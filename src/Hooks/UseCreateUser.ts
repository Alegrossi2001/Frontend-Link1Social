import { useState } from 'react';
import axios from 'axios';

// Types for the request payload
interface CreateUserRequest {
    userName: string;
    userEmail: string;
    password: string;
    confirmPassword: string;
}

// Enum for possible error types
enum CreateUserErrorType {
    UserAlreadyExists,
    InvalidData,
    UnknownError,
}

// Type for the response payload
interface CreateUserResult {
    IsSuccess: boolean;
    ErrorMessage?: string;
    UserId?: string;
    ErrorType?: CreateUserErrorType;
}

// Type for the result returned by the hook
interface CreateUserResponse {
    success: boolean;
    userId?: string;
    errorMessage?: string;
}

// Custom Hook
const useCreateUser = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    const createUser = async (userData: CreateUserRequest): Promise<CreateUserResponse> => {
        const { userName, userEmail, password, confirmPassword } = userData;

        // Reset the error state before making a new request
        setError(null);

        // Basic validation
        if (!userName || !userEmail || !password || !confirmPassword) {
            setError('All fields are required');
            return { success: false, errorMessage: 'All fields are required' };
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return { success: false, errorMessage: 'Passwords do not match' };
        }

        setLoading(true);

        try {
            const response = await axios.post<CreateUserResult>('/Login/Create', {
                userName,
                userEmail,
                password,
                confirmPassword,
            });

            const result = response.data;

            if (result.IsSuccess) {
                setUserId(result.UserId || null);
                return {
                    success: true,
                    userId: result.UserId!,
                };
            } else {
                const errorMsg = result.ErrorMessage || 'An unknown error occurred';
                setError(errorMsg);
                return {
                    success: false,
                    errorMessage: errorMsg,
                };
            }
        } catch (error: any) {
            let errorMsg = 'Request Error: ' + error.message;

            if (error.response) {
                console.error('Server Error:', error.response.data);
                errorMsg = error.response.data.message || 'Server Error';
            } else if (error.request) {
                console.error('No Response:', error.request);
                errorMsg = 'No response from the server';
            } else {
                console.error('Error:', error.message);
            }

            setError(errorMsg);
            return {
                success: false,
                errorMessage: errorMsg,
            };
        } finally {
            setLoading(false);
        }
    };

    return {
        createUser,
        loading,
        error,
        userId,
    };
};

export default useCreateUser;