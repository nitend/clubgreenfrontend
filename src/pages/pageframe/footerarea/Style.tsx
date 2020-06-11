import { withStyles, Typography, Link } from "@material-ui/core";
import { SectionContainer } from "../global/StyledComponents";
import { FOOTER_HEIGHT } from "../../../config";

export const FooterSectionHeader = withStyles({
    root: {
        color: 'white',
        fontSize: '16px',    
    },
  })(Typography);

  export const SectionItem = withStyles({
    root: {
        marginLeft: '8px',
        marginTop: '4px',
        color: 'white',
        fontSize: '12px'
    },
  })(Link);

  export const SectionHeader = withStyles({
    root: {
        color: 'gray',
        width: '100%',
        fontSize: '32px',
        paddingBottom: "24px",
        textAlign: 'center'
    },
  })(Typography);


  export const FooterHeader = withStyles({
    root: {
        color: 'gray',
        width: '100%',
        fontSize: '32px',
        paddingBottom: "24px",
        textAlign: 'center'
    },
  })(Typography);


export const FooterSectionContainer = withStyles({
  root: {
      backgroundColor: "#444444",
      bottom: "0",
      height: FOOTER_HEIGHT
  },
})(SectionContainer); 