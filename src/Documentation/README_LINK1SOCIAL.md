# What is this project?

It's a cool fucking project designed for handling all sorts of social aspects. It holds various "packs", all done through microservices. The backend is built in ASP.NET and probably hosted on Azure.

## Project Structure

Wherever possible, we are using and creating reusable components that are extremely dynamic and accept TS objects for content.
These components are currently held in the "Styled" folder and I am trying to slowly remove all other components present that aren't these super dynamic beasts that will be used to create our in-house mega component library.

Ideally this is the logic we are trying to follow:

- All graphics and looks go into reusable, functional components, which can be edited through the MUI styling engine (Eg. L1LineChart)
- The data is injected through standard components with various hooks (eg. Dashboard contains L1Linechart and passes the data through an api call)
- API calls are handled through external, ideally reusable hooks. The client is stored in the Services folder.

The benefits of this is obvious: Since we are still not very experienced with react, separating these concerns will allow us to easily refactor it for performance and readability in the near future.

### Folder structure

- Components: All the components that make Link1 Social
- Documentation: The various documentation of the project. All Link1 projects require a strong documentation, which should be updated as the project continues.
- Hooks: The various hooks, ideally reusable.
- Services: The various services, such as APIClient, which is the axios object.
- Styled: This will be exported as the Link1 component library eventually. Keep this as uncoupled as possible from the rest of the project. This is all the graphical, reusable components mentioned in Project Structure.


# Social Packs

## 1. Standard Pack (Free)

This handles the default aspects of a social media management tool:
- Basic Analytics (Dashboard)
- Schedule Post (Schedule)
- Connect Social Media Profiles and create groups(Connect)
- Save post template (Create)

