
export const theme = {
    light: {
        primary: '#015249',
        secondary: '#57BC90',
        color: '#77C9D4',
        texts: '#A5A5AF',
        background: `linear-gradient(135deg, 
                   rgba(1, 82, 73, 1), 
                   rgba(87, 188, 144, 1), 
                   rgba(119, 201, 212, 0.5)
                   );
                   
                   animation: moveBackground 6s linear infinite alternate; 

                    @keyframes moveBackground {
                        from {
                        transform: translateY(0);
                        }
                        to {
                        transform: translateY(-300vh);
                        }
                    }`,
        panel: {
            background: '#ffffffc9',
            shadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.25)'
        },
        main: {
            background: '#e8fff3ef'
        },
        text: {
            primary: '#000000'
        }
    },
    dark: {
        primary: '#015249',
        secondary: '#57BC90',
        color: '#77C9D4',
        text: '#A5A5AF',
        background: ``
    }

    // container: {
    //     background: ''
    // }
};

export const color = {
    light: {
        primary: '#015249',
        secondary: '#57BC90',
        background: '#77C9D4',
        text: '#A5A5AF',
        border: '#e0e0e0',

        shadow: 'rgba(0, 0, 0, 0.25)',
    },
    dark: {

    },
};

export const size = {
    mobile: '500px',
    tablet: '768px',
    desktop: '1200px'
};