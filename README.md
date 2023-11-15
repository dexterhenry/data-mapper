# Data Mapping

The data mapper performs a visual mapping of the data using the drag and drop functionality of the mouse, and as a result, the link connections are obtained in the form of arrows and a table with the list of connections made.

The mapper is developed in React.js and uses the context to manage global state and the main react hooks


![Screenshot from 2023-11-14 21-48-21](https://github.com/dexterhenry/data-mapper/assets/81880890/ec108c12-bcec-4eba-b6d3-b2c94f7af901)


![Screenshot from 2023-11-14 21-48-15](https://github.com/dexterhenry/data-mapper/assets/81880890/e5b26e3e-a865-4a79-9c1b-0071f762a4ab)

In data mapper it is composed of 2 main components
the mapping area and the area of the mapping result.

![Screenshot from 2023-11-14 21-45-05](https://github.com/dexterhenry/data-mapper/assets/81880890/f377463e-272a-4055-84a7-21eb0866de37)

The mapping area is composed of two components, Source workspace and the Target workspace.

![Screenshot from 2023-11-14 21-45-29](https://github.com/dexterhenry/data-mapper/assets/81880890/a7197273-5ccb-41cd-9ddb-3324f1322e49)


The mapping area is composed of two components, Source workspace and Target workspace, in both workspaces the data to be mapped must be loaded   using a csv file (it is recommended to use the example file ["sample_data_model.csv"](https://github.com/dexterhenry/data-mapper/blob/main/sample_data_model.csv).

You can interact with the mapper by accessing this url [Data Mapper App](http://data-mapper.vercel.app/).



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
