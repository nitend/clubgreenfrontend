import { Container, withStyles, Typography, Box, Button, Paper } from "@material-ui/core";

  // ####################
  // #    Container     #
  // ####################

export const SectionContainer = withStyles({
        root: {
            paddingTop: "32px",
            paddingBottom: "32px",
            margin: '0px',
            maxWidth: '100%'
            
        },
      })(Container);

  export const SectionContainerDark = withStyles({
        root: {
            backgroundColor: '#222222'            
        },
      })(SectionContainer);

export const TopSectionContainer = withStyles({
        root: {
            backgroundImage: "url(/img/header_club_green.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            textAlign: 'center'
        },
      })(SectionContainer);    

export const BgContainer = withStyles({
  root: {
      padding: "0px",
      background: "#f6f6f6",
      
  },
})(SectionContainer);

export const MyBookingArea = withStyles({
  root: {
      width: "100%",
      paddingTop: "16px",
      paddingBottom: "8px",
      margin: "0px",
      square: true,
      position: "sticky",
      top: 0,
      zIndex: 2
  },
})(Paper);

  export const BasicContentBox = withStyles({
    root: {
        width: '90%',
        paddingTop: "16px",
        paddingBottom: "16px",
        margin: "auto"
    },
  })(Box);

  // ####################
  // #    Typos         #
  // ####################

  export const SectionHeader = withStyles({
    root: {
        color: 'gray',
        width: '100%',
        fontSize: '32px',
        paddingBottom: "24px",
        textAlign: 'center'
    },
  })(Typography);

  export const SectionHeaderWhite = withStyles({
    root: {
        color: '#FFFFFF',
    },
  })(SectionHeader);

  export const WhiteTypo = withStyles(
    {
      root: {
        color: 'white',
        paddingBottom: '16px'
      }
      
    }
  )(Typography)




  // ####################
  // #    oThers        #
  // ####################
  export const TopActionButton = withStyles(
    {
      root: {
        fontSize: "24px",
        textTransform: "none",
        fontWeight: "bold",
        color: "white"
      }
    }
  )(Button)
