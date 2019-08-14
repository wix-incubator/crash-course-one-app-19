import {Navigation} from 'react-native-navigation';

export const openScreen = (componentId: string, screenName: string, title: string) => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
      options: {
        topBar: {
          title: {
            text: title,
          },
        },
      },
    },
  });
};

export const showModal = (screenName: string, title: string, passProps: any) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: screenName,
            passProps,
            options: {
              topBar: {
                title: {
                  text: title,
                },
              },
            },
          },
        },
      ],
    },
  });
};

export const pop = (componentId: string) => {
  Navigation.pop(componentId);
};
