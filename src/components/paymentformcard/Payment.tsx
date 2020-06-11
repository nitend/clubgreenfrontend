
import React, { useState } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentForm} from './PaymentForm'
import { STRIPE_PUBLIC_KEY } from "../../config";
import { BasicContentBox } from "../../pages/pageframe/global/StyledComponents";
import { Typography, Tabs, Tab, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
interface Props {
     onDone: () => void
}

export const Payment: React.FC<Props> = (props) => {

const [expanded, setExpanded] = useState('panel1')


const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
  setExpanded(isExpanded ? panel : " ");
};

  return (
    <BasicContentBox>
      <Typography variant="h6">
          Zahlungsart
      </Typography>
      <Elements stripe={stripePromise}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMore/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography >Kreditkarte</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <PaymentForm onDone={props.onDone}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMore/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography >SEPA Lastschrift</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        
      </Elements>
    </BasicContentBox>
  );
};