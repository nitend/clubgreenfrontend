import React, { useContext, useEffect, useState} from 'react'
import { useMyBookingQuery, useDeleteBookingMutation, useCreateMyBookingMutation, MyBookingQuery} from '../../../generated/graphql';
import { PropertySelectionView } from './propertyView/PropertySelectionView';
import { BookingButton } from './actions/BookingButton';
import { Grid, Typography } from '@material-ui/core';
import moment from 'moment';
import { BookingContext } from '../BookingContext';
import { MyBookingArea, BasicContentBox } from '../../pageframe/global/StyledComponents';
import { TravelDatesPicker } from './datasview/TravelDatesPicker';
import { SuccessDialog } from '../../pageframe/global/dialogs/SuccessDialog';
import { SuccessDialogContent } from '../../pageframe/global/dialogs/SuccessDialogContent';
import { sunUmbrella } from '../../pageframe/global/dialogs/DialogIcons';
import { ShowMapButton } from './actions/ShowMapButton';


interface Props {
    
}

export const MyBooking:  React.FC<Props> = () => {

    const {data, loading, error, refetch} = useMyBookingQuery();

    const [show, setShow] = useState(false);

    const [Booking] = useCreateMyBookingMutation();
    const [deleteBooking] = useDeleteBookingMutation();
    const { 
              setArrivalDate, 
              setDepartureDate,
              selectedProperty,
              arrivalDate, 
              departureDate,
              isActive,
              setIsActive,
              setSelectedPropterty} = useContext(BookingContext);

    
    if(loading){
      console.log("laoding" + loading)
    }

    if(error){
      console.log("error" + error) 
    }

    function clearBookingView() {
      setIsActive(false);
      setArrivalDate(null);
      setDepartureDate(null);
      setSelectedPropterty(null)
    }

   const setBooking = (data: MyBookingQuery | undefined) => {
    const myBooking = data?.myBooking;
    if(myBooking && myBooking.dateOfArrival && myBooking.dateOfDeparture && myBooking.propertyId){
      setArrivalDate(moment(myBooking.dateOfArrival));
      setDepartureDate(moment(myBooking.dateOfDeparture))
      setSelectedPropterty(myBooking.propertyId)
      setIsActive(true);
    } else {
      clearBookingView()
    }
  }



  const booking = data?.myBooking;

    useEffect(() => {
      if(data){
        setBooking(data)
      }
        
    } , [booking]) 
    

    const bookingButtonPressed = async () => {
      console.log(isActive)
      if(isActive){
          deleteBook();     
      } else{
          createBook()
      }
    }

    const deleteBook = async () => {
      if(data && data.myBooking){
        const result = await deleteBooking({
          variables: {
            bookingId: data.myBooking.id
          }
        })
        if(result){
          console.log("result myBooking" + result);
          refetch();
          clearBookingView()
        }
      } 
    }

    const createBook = async () => {
      if(selectedProperty && arrivalDate && departureDate){
        const result = await Booking(
          { 
            variables: {
                arrival: arrivalDate.toISOString(),
                departure: departureDate.toISOString(),
                propertyId: selectedProperty
            }
          })
          if(result){

            console.log(result);
            refetch();
            setShow(true)
            setIsActive(true)
          }  
      }
    }

    const closeDialog = () => {
        setShow(false)
    }

    
    return (
        <div style={{position: "sticky", top: 0, zIndex: 2}}>
              <MyBookingArea elevation={4}>        
                <BasicContentBox>
                  <div style={{marginBottom: "8px"}}>
                  <Typography variant="h4">
                    Dein nächster Ausflug:
                    </Typography>
                    </div>
                    <TravelDatesPicker propertyId={selectedProperty || "" } />
                  
                  <Grid container spacing={4} alignItems="flex-end">
                    <Grid item xs={12} sm>
                      <PropertySelectionView />
                    </Grid>
                    <Grid item >


                      <SuccessDialog 
                          open={show} 
                          handleClose={closeDialog}
                          buttonText={"Los"} 
                          >
                            <SuccessDialogContent
                            title={"Super"}
                            text={"Dann kann es bald los gehen..."}>
                              {sunUmbrella}

                            </SuccessDialogContent>
                          </SuccessDialog>
                      <ShowMapButton />
                      <BookingButton 
                          aktiveBooking={isActive} 
                          disabled={selectedProperty && arrivalDate && departureDate? false : true} 
                          buttonPressedListener={bookingButtonPressed}/>
                    </Grid>
                  </Grid>
                  </BasicContentBox>               
              </MyBookingArea>             
          </div>
    )
    
}
