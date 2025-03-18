
export type Tool = {
  id: number;
  image: string;
  name: string;
  url: string;
};

export const toolList: Tool[] = [
    // Ferramentas para Desenvolvimento Web
    {
        id: 1,
        image: "react.png",
        name: "React",
        url: "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png",
    },
    // {
    //     id: 2,
    //     image: "redux.png",
    //     name: "Redux",
    //     url: "https://redux.js.org/",
    // },
    // {
    //     id: 3,
    //     image: "react-router.png",
    //     name: "React Router",
    //     url: "https://reactrouter.com/",
    // },
    {
        id: 4,
        image: "tailwind.png",
        name: "Tailwind CSS",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    },
    {
        id: 5,
        image: "bootstrap.png",
        name: "Bootstrap",
        url: "https://i.ytimg.com/vi/IWZX9YhOsfs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGeuXO5D754aG4zwsiTkwr50_7-w",
    },
    // {
    //     id: 6,
    //     image: "sass.png",
    //     name: "Sass",
    //     url: "https://sass-lang.com/",
    // },
    // {
    //     id: 7,
    //     image: "webpack.png",
    //     name: "Webpack",
    //     url: "https://webpack.js.org/",
    // },
    // {
    //     id: 8,
    //     image: "babel.png",
    //     name: "Babel",
    //     url: "https://babeljs.io/",
    // },
    // {
    //     id: 9,
    //     image: "eslint.png",
    //     name: "ESLint",
    //     url: "https://eslint.org/",
    // },
    // {
    //     id: 10,
    //     image: "prettier.png",
    //     name: "Prettier",
    //     url: "https://prettier.io/",
    // },
    // {
    //     id: 11,
    //     image: "jest.png",
    //     name: "Jest",
    //     url: "https://jestjs.io/",
    // },
    {
        id: 12,
        image: "nodejs.png",
        name: "Node.js",
        url: "https://www.rocketseat.com.br/blog/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fstar-lab%2Fblog%2FOGs%2Fnode.png&w=3840&q=75",
    },
    // {
    //     id: 13,
    //     image: "express.png",
    //     name: "Express",
    //     url: "https://expressjs.com/",
    // },
    // {
    //     id: 14,
    //     image: "mongodb.png",
    //     name: "MongoDB",
    //     url: "https://www.mongodb.com/",
    // },
    // {
    //     id: 15,
    //     image: "graphql.png",
    //     name: "GraphQL",
    //     url: "https://graphql.org/",
    // },
    {
        id: 16,
        image: "docker.png",
        name: "Docker",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOnbN9Wr4DTqP-4U71iQ5XxT3UyWFHJ4dVw&s",
    },
    {
        id: 17,
        image: "git.png",
        name: "Git",
        url: "https://cdn.iconscout.com/icon/free/png-256/free-git-17-1175218.png?f=webp",
    },
    {
        id: 18,
        image: "github.png",
        name: "GitHub",
        url: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png",
    },
    {
        id: 19,
        image: "postman.png",
        name: "Postman",
        url: "https://cdn.worldvectorlogo.com/logos/postman.svg",
    },
    {
        id: 20,
        image: "figma.png",
        name: "Figma",
        url: "data:image/png;base64,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",
    },

    // Ferramentas para Desenvolvimento Mobile
    {
        id: 21,
        image: "react-native.png",
        name: "React Native",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWtdwGyVCRjUkbNkL-SyAT7hj9GXg4qHdKQ&s",
    },
    // {
    //     id: 22,
    //     image: "expo.png",
    //     name: "Expo",
    //     url: "https://expo.dev/",
    // },
    // {
    //     id: 23,
    //     image: "redux.png",
    //     name: "Redux",
    //     url: "https://redux.js.org/",
    // },
    // {
    //     id: 24,
    //     image: "react-navigation.png",
    //     name: "React Navigation",
    //     url: "https://reactnavigation.org/",
    // },
    // {
    //     id: 25,
    //     image: "axios.png",
    //     name: "Axios",
    //     url: "https://axios-http.com/",
    // },
    // {
    //     id: 26,
    //     image: "styled-components.png",
    //     name: "Styled Components",
    //     url: "https://styled-components.com/",
    // },
    // {
    //     id: 27,
    //     image: "jest.png",
    //     name: "Jest",
    //     url: "https://jestjs.io/",
    // },
    // {
    //     id: 28,
    //     image: "react-native-paper.png",
    //     name: "React Native Paper",
    //     url: "https://callstack.github.io/react-native-paper/",
    // },
    // {
    //     id: 29,
    //     image: "react-native-elements.png",
    //     name: "React Native Elements",
    //     url: "https://reactnativeelements.com/",
    // },
    {
        id: 30,
        image: "firebase.png",
        name: "Firebase",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6eyjw-sncwZxtTnaQj66DdHF2PJ0uL6PGQ&s",
    },
];


