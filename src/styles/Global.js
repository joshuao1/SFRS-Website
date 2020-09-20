import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        margin: '10px'
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
    },
    titleMedia: {
        marginLeft:'auto',
        position: 'relative',
        marginBottom: 'auto',
        height: "500px",
        width: "auto",
    },
    titleCard: {
        position: 'relative',
        margin: "10px",
        backgroundColor: 'black'
    },
    titleContent: {
        position: 'absolute',
        top: '170px',
        left: '10px',
        color: 'white',
        backgroundColor: '',
        width: '500px',
    },  
    iconMedia: {
        height: "100px",
        marginTop: "20px",
        maxWidth: "100%",
        objectFit: "contain"
    },
    iconCard: {
        margin: "10px",
        height: "350px",
    },
    iconTitle: {
        align: 'center',
    },
    iconText: {

    },
    avatarMedia: {
        height: '150px',
        width: '150px',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        objectFit: 'none'
    },
    avatarCard: {
        height: "300px",
        margin: "10px",
    },
    blogCard: {
        height: "400px",
        margin: '10px',

    },
    blogMedia: {
        height: "200px",
        marginTop: "20px",
        maxWidth: "100%",
        objectFit: "contain"
    },
    blogText: {

    },
});