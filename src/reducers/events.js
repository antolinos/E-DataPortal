import { CHANGE_PAGE } from '../constants/ActionTypes'

const initialState = {
  page: null,
  eventlist: [],
}


const events = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_PAGE: {
      if (action.page === "WALLELOG") {

        state = {
          ...state,
          eventList: [
            {
              id: 4,
              createdAt: "2017-12-01T0:00:00.000",
              type: "Annotation",
              lastTimestamp: "2017-12-01T10:00:05.000",
              history: [
                {
                  updatedOn: "2017-12-01T10:00:05.000",
                  logger: "Boby Lapointe",
                  content: "Repeat calibration. Calibration 4",
                },
                {
                  updatedOn: "2017-12-01T2:00:00.000",
                  logger: "James Bond",
                  content: "Calibration 3",
                },
                {
                  updatedOn: "2017-12-01T1:00:00.000",
                  logger: "James Bond",
                  content: "Calibration 2",
                },
                {
                  updatedOn: "2017-12-01T0:00:00.000",
                  logger: "Boby Lapointe",
                  content: "Calibration 1",
                },
              ]
            },
            {
              id: 3,
              createdAt: "2017-12-01T9:00:00.000",
              type: "Command",
              lastTimestamp: "2017-12-01T9:00:00.000",
              history: [
                {
                  updatedOn: "2017-12-01T9:00:00.000",
                  logger: "Boby Lapointe",
                  content: "ls -l"
                }
              ]
            },
            {
              id: 2,
              createdAt: "2017-12-01T8:00:05.000",
              type: "Command",
              lastTimestamp: "2017-12-01T8:00:05.000",
              history: [
                {
                  updatedOn: "2017-12-01T8:00:05.000",
                  logger: "Boby Lapointe",
                  content: "bla bla bla",
                }
              ]
            },
            {
              id: 1,
              createdAt: "2017-11-06T8:00:00.000",
              type: "Annotation",
              lastTimestamp: "2017-12-01T8:00:00.000",

              history: [
                {
                  updatedOn: "2017-12-01T8:00:00.000",
                  logger: "Boby Lapointe",
                  content: "Adjust transmission to 50%. The energy was too strong and burned the Xtals. The cristal was changed and new settings applied. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis non ipsum nec fermentum. Vestibulum accumsan, leo non convallis dictum, nulla elit ornare velit, ac porta erat arcu non nisl. Etiam ac sapien consequat, consectetur mauris eget, gravida dolor. Nam lectus mauris, varius eu ultrices ac, efficitur sit amet urna. Ut ut molestie ipsum, ac facilisis leo. Cras ultrices ornare elit vel placerat. Nullam non sodales eros. Aliquam at nisl vel odio scelerisque ultrices. Nulla eget dignissim arcu. Maecenas egestas iaculis cursus. Nunc ut dui ut dui ornare hendrerit. Cras maximus tempus tellus sed dictum. ",
                },
                {
                  updatedOn: "2017-11-07T8:00:00.000",
                  logger: "James Bond",
                  content: "Adjust transmission to 50%. The energy was too strong and burned the Xtals. Yes I ate an apple.",
                },
                {
                  updatedOn: "2017-11-06T8:00:00.000",
                  logger: "Boby Lapointe",
                  content: "Adjust transmission to 50%.",
                },
              ]
            },
          ]
        }
      }
      break;
    }
    default: break;
  }


  return state
}

export default events;
