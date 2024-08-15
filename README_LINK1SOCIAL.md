# What is this project?

It's a cool fucking project designed for handling all sorts of social aspects. It holds various "packs", all done through microservices. The backend is built in ASP.NET and will be hosted on Azure.

## Project Structure

Wherever possible, we are using and creating reusable components that are extremely dynamic and accept TS objects for content.
These components are currently held in the "Styled" folder and I am trying to slowly remove all other components present that aren't these super dynamic beasts that will be used to create our in-house mega component library.

Ideally this is the logic we are trying to follow:

- All graphics and looks go into reusable, functional components, which can be edited through the MUI styling engine (Eg. L1LineChart)
- The data is injected through standard components with various hooks (eg. Dashboard contains L1Linechart and passes the data through an api call)
- API calls are handled through external files

The benefits of this is obvious: Since we are still not very experienced with react, separating these concerns will allow us to easily refactor it for performance and readability in the near future.

# Social Packs

## 1. Standard Pack

This handles the default aspects of a social media management tool:
- Basic Analytics (Dashboard)
- Schedule Post (Schedule)
- Connect Social Media Profiles and create groups(Connect)
- Save post template (Create)