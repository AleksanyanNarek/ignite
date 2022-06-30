export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transtion: {
            duration: 1.25,
        },
        exit: {
            opacity: 0,
            transtion: { 
                duration: 1.25
            },
        }
    }
}

export const popup = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    show: {
        opacity: 1,
        scale: 1,
        transtion: {
            duration: 0.75,
        },
        exit: {
            opacity: 0,
            transtion: { 
                duration: 0.75
            },
        }
    }
}