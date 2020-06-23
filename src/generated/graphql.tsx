import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type BaseEntity = {
   __typename?: 'BaseEntity',
  id: Scalars['String'],
  creationDate: Scalars['String'],
};

export type BlockedDate = {
   __typename?: 'BlockedDate',
  bookingId: Scalars['String'],
  dateTimeStamp: Scalars['Float'],
  type: Scalars['Float'],
};

export type Booking = {
   __typename?: 'Booking',
  id: Scalars['String'],
  creationDate: Scalars['String'],
  user?: Maybe<Scalars['String']>,
  dateOfArrival?: Maybe<Scalars['String']>,
  dateOfDeparture?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['String']>,
};

export type BookingInput = {
  user?: Maybe<Scalars['String']>,
  dateOfArrival?: Maybe<Scalars['String']>,
  dateOfDeparture?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['String']>,
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  updateProduct: Scalars['Boolean'],
  deleteProduct: Scalars['Boolean'],
  subscribeToPricePlan: Scalars['Boolean'],
  addPaymentMethod: Scalars['Boolean'],
  updateRating: Scalars['Boolean'],
  deleteRating: Scalars['Boolean'],
  insertRating: Scalars['Boolean'],
  updateSight: Scalars['Boolean'],
  deleteSight: Scalars['Boolean'],
  insertSight: Scalars['Boolean'],
  updateBooking: Scalars['Boolean'],
  deleteBooking: Scalars['Boolean'],
  createBooking: Scalars['Boolean'],
  updateProperty: Scalars['Boolean'],
  deleteProperty: Scalars['Boolean'],
  insertProperty: Scalars['Boolean'],
  logout: Scalars['Boolean'],
  revokeRefreshTokeForUser: Scalars['Boolean'],
  createPaymentServiceCustomer: Scalars['Boolean'],
  login: LoginResponse,
  register: Scalars['Boolean'],
  updateUserName: Scalars['Boolean'],
  updateUserAddress: Scalars['Boolean'],
};


export type MutationUpdateProductArgs = {
  product: ProductInput
};


export type MutationDeleteProductArgs = {
  id: Scalars['String']
};


export type MutationSubscribeToPricePlanArgs = {
  priceplan: Scalars['String']
};


export type MutationAddPaymentMethodArgs = {
  paymentMethodId: Scalars['String']
};


export type MutationUpdateRatingArgs = {
  rating: RatingInput
};


export type MutationDeleteRatingArgs = {
  id: Scalars['String']
};


export type MutationInsertRatingArgs = {
  rating: RatingInput
};


export type MutationUpdateSightArgs = {
  sight: SightInput
};


export type MutationDeleteSightArgs = {
  id: Scalars['String']
};


export type MutationInsertSightArgs = {
  sight: SightInput
};


export type MutationUpdateBookingArgs = {
  booking: BookingInput
};


export type MutationDeleteBookingArgs = {
  id: Scalars['String']
};


export type MutationCreateBookingArgs = {
  propertyId: Scalars['String'],
  departure: Scalars['String'],
  arrival: Scalars['String']
};


export type MutationUpdatePropertyArgs = {
  property: PropertyInput
};


export type MutationDeletePropertyArgs = {
  id: Scalars['String']
};


export type MutationInsertPropertyArgs = {
  property: PropertyInput
};


export type MutationRevokeRefreshTokeForUserArgs = {
  userId: Scalars['String']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationRegisterArgs = {
  password: Scalars['String'],
  email: Scalars['String'],
  username: Scalars['String']
};


export type MutationUpdateUserNameArgs = {
  username: UserName
};


export type MutationUpdateUserAddressArgs = {
  useraddress: UserAddress
};

export type Product = {
   __typename?: 'Product',
  id: Scalars['String'],
  creationDate: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  paymentPricePlan?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  minmonth?: Maybe<Scalars['Float']>,
  active?: Maybe<Scalars['Boolean']>,
};

export type ProductInput = {
  title?: Maybe<Scalars['String']>,
  paymentPricePlan?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Float']>,
  minmonth?: Maybe<Scalars['Float']>,
  active?: Maybe<Scalars['Boolean']>,
};

export type Property = {
   __typename?: 'Property',
  id: Scalars['String'],
  creationDate: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  subtext?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  long?: Maybe<Scalars['Float']>,
  lat?: Maybe<Scalars['Float']>,
  beds_adult?: Maybe<Scalars['Float']>,
  beds_kids?: Maybe<Scalars['Float']>,
  beds_tent?: Maybe<Scalars['Float']>,
  images: Array<Scalars['String']>,
};

export type PropertyInput = {
  title?: Maybe<Scalars['String']>,
  subtext?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  long?: Maybe<Scalars['Float']>,
  lat?: Maybe<Scalars['Float']>,
  beds_adult?: Maybe<Scalars['Float']>,
  beds_kids?: Maybe<Scalars['Float']>,
  beds_tent?: Maybe<Scalars['Float']>,
  images: Array<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  getProduct?: Maybe<Product>,
  getNewProduct: Product,
  getAllProducts?: Maybe<Array<Product>>,
  getRating?: Maybe<Rating>,
  getNewRating: Rating,
  getAllRatings?: Maybe<Array<Rating>>,
  getRatingValuesByTarget?: Maybe<RatingValues>,
  getSight?: Maybe<Sight>,
  getNewSight: Sight,
  getAllSights?: Maybe<Array<Sight>>,
  getBooking?: Maybe<Booking>,
  myBooking?: Maybe<Booking>,
  getNewBooking: Booking,
  getAllBookings?: Maybe<Array<Booking>>,
  getBlockedDatesFromProperty?: Maybe<Array<BlockedDate>>,
  propertiesEvalable?: Maybe<Array<Booking>>,
  getProperty?: Maybe<Property>,
  getNewProperty: Property,
  getAllProperties?: Maybe<Array<Property>>,
  me?: Maybe<User>,
  users: Array<User>,
};


export type QueryGetProductArgs = {
  id: Scalars['String']
};


export type QueryGetRatingArgs = {
  id: Scalars['String']
};


export type QueryGetRatingValuesByTargetArgs = {
  targetId: Scalars['String']
};


export type QueryGetSightArgs = {
  id: Scalars['String']
};


export type QueryGetBookingArgs = {
  id: Scalars['String']
};


export type QueryGetBlockedDatesFromPropertyArgs = {
  propertyId: Scalars['String']
};


export type QueryPropertiesEvalableArgs = {
  to: Scalars['Float'],
  from: Scalars['Float']
};


export type QueryGetPropertyArgs = {
  id: Scalars['String']
};

export type Rating = {
   __typename?: 'Rating',
  id: Scalars['String'],
  creationDate: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  targetId: Scalars['Float'],
  rating?: Maybe<Scalars['Float']>,
  userId?: Maybe<Scalars['Float']>,
  comment?: Maybe<Scalars['String']>,
};

export type RatingInput = {
  title?: Maybe<Scalars['String']>,
  targetId: Scalars['Float'],
  rating?: Maybe<Scalars['Float']>,
  userId?: Maybe<Scalars['Float']>,
  comment?: Maybe<Scalars['String']>,
};

export type RatingValues = {
   __typename?: 'RatingValues',
  targettype: Scalars['String'],
  targetId: Scalars['Float'],
  ratings: Scalars['Float'],
  ratingValue: Scalars['Float'],
};

export type Sight = {
   __typename?: 'Sight',
  id: Scalars['String'],
  creationDate: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  subtext?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  long?: Maybe<Scalars['Float']>,
  lat?: Maybe<Scalars['Float']>,
  images: Array<Scalars['String']>,
};

export type SightInput = {
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  subtext?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  long?: Maybe<Scalars['Float']>,
  lat?: Maybe<Scalars['Float']>,
  images: Array<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  creationDate: Scalars['String'],
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  paymentServiceId?: Maybe<Scalars['String']>,
  gender?: Maybe<Scalars['String']>,
  firstname?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  streetNumber?: Maybe<Scalars['String']>,
  town?: Maybe<Scalars['String']>,
  postalcode?: Maybe<Scalars['String']>,
  tokenVersion?: Maybe<Scalars['Float']>,
  email_verified: Scalars['Boolean'],
};

export type UserAddress = {
  streetName: Scalars['String'],
  streetNumber: Scalars['String'],
  postalCode: Scalars['String'],
  town: Scalars['String'],
};

export type UserName = {
  gender: Scalars['String'],
  firstName: Scalars['String'],
  surname: Scalars['String'],
};

export type CreateMyBookingMutationVariables = {
  arrival: Scalars['String'],
  departure: Scalars['String'],
  propertyId: Scalars['String']
};


export type CreateMyBookingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createBooking'>
);

export type CreateProductQueryVariables = {};


export type CreateProductQuery = (
  { __typename?: 'Query' }
  & { getNewProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'creationDate' | 'paymentPricePlan' | 'price' | 'minmonth' | 'active'>
  ) }
);

export type CreatePropertyMutationVariables = {
  property: PropertyInput
};


export type CreatePropertyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'insertProperty'>
);

export type SaveRatingMutationVariables = {
  rating: RatingInput
};


export type SaveRatingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'insertRating'>
);

export type CreateSightMutationVariables = {
  sight: SightInput
};


export type CreateSightMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'insertSight'>
);

export type DeleteBookingMutationVariables = {
  bookingId: Scalars['String']
};


export type DeleteBookingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBooking'>
);

export type DeleteProductMutationVariables = {
  id: Scalars['String']
};


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProduct'>
);

export type DeletePropertyMutationVariables = {
  id: Scalars['String']
};


export type DeletePropertyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteProperty'>
);

export type AllBookingsQueryVariables = {};


export type AllBookingsQuery = (
  { __typename?: 'Query' }
  & { getAllBookings: Maybe<Array<(
    { __typename?: 'Booking' }
    & Pick<Booking, 'creationDate' | 'id' | 'dateOfArrival' | 'dateOfDeparture' | 'propertyId'>
  )>> }
);

export type ProductsQueryVariables = {};


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { getAllProducts: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'creationDate' | 'paymentPricePlan' | 'price' | 'minmonth' | 'active'>
  )>> }
);

export type GetAllPropertiesQueryVariables = {};


export type GetAllPropertiesQuery = (
  { __typename?: 'Query' }
  & { getAllProperties: Maybe<Array<(
    { __typename?: 'Property' }
    & Pick<Property, 'id' | 'creationDate' | 'title' | 'subtext' | 'location' | 'long' | 'lat' | 'beds_adult' | 'beds_kids' | 'beds_tent' | 'images'>
  )>> }
);

export type AllRatingsQueryVariables = {};


export type AllRatingsQuery = (
  { __typename?: 'Query' }
  & { getAllRatings: Maybe<Array<(
    { __typename?: 'Rating' }
    & Pick<Rating, 'id' | 'creationDate' | 'targetId' | 'comment' | 'rating' | 'title' | 'userId'>
  )>> }
);

export type SightsQueryVariables = {};


export type SightsQuery = (
  { __typename?: 'Query' }
  & { getAllSights: Maybe<Array<(
    { __typename?: 'Sight' }
    & Pick<Sight, 'id' | 'creationDate' | 'title' | 'type' | 'subtext' | 'location' | 'long' | 'lat' | 'images'>
  )>> }
);

export type BlockedDatesByPropertyQueryVariables = {
  propertyId: Scalars['String']
};


export type BlockedDatesByPropertyQuery = (
  { __typename?: 'Query' }
  & { getBlockedDatesFromProperty: Maybe<Array<(
    { __typename?: 'BlockedDate' }
    & Pick<BlockedDate, 'bookingId' | 'dateTimeStamp' | 'type'>
  )>> }
);

export type MyBookingQueryVariables = {};


export type MyBookingQuery = (
  { __typename?: 'Query' }
  & { myBooking: Maybe<(
    { __typename?: 'Booking' }
    & Pick<Booking, 'id' | 'dateOfArrival' | 'dateOfDeparture' | 'propertyId'>
  )> }
);

export type GetProductQueryVariables = {
  id: Scalars['String']
};


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { getProduct: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'creationDate' | 'paymentPricePlan' | 'price' | 'minmonth' | 'active'>
  )> }
);

export type GetPropertyQueryVariables = {
  id: Scalars['String']
};


export type GetPropertyQuery = (
  { __typename?: 'Query' }
  & { getProperty: Maybe<(
    { __typename?: 'Property' }
    & Pick<Property, 'id' | 'creationDate' | 'title' | 'subtext' | 'location' | 'long' | 'lat' | 'beds_adult' | 'beds_kids' | 'beds_tent' | 'images'>
  )> }
);

export type GetRatingQueryVariables = {
  id: Scalars['String']
};


export type GetRatingQuery = (
  { __typename?: 'Query' }
  & { getRating: Maybe<(
    { __typename?: 'Rating' }
    & Pick<Rating, 'id' | 'creationDate' | 'targetId' | 'comment' | 'rating' | 'title' | 'userId'>
  )> }
);

export type GetRatingValuesByTargetQueryVariables = {
  targetId: Scalars['String']
};


export type GetRatingValuesByTargetQuery = (
  { __typename?: 'Query' }
  & { getRatingValuesByTarget: Maybe<(
    { __typename?: 'RatingValues' }
    & Pick<RatingValues, 'targetId' | 'ratings' | 'ratingValue'>
  )> }
);

export type GetSightQueryVariables = {
  id: Scalars['String']
};


export type GetSightQuery = (
  { __typename?: 'Query' }
  & { getSight: Maybe<(
    { __typename?: 'Sight' }
    & Pick<Sight, 'id' | 'creationDate' | 'title' | 'type' | 'subtext' | 'location' | 'long' | 'lat' | 'images'>
  )> }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'creationDate' | 'id' | 'paymentServiceId' | 'gender' | 'firstname' | 'surname' | 'street' | 'streetNumber' | 'postalcode' | 'town'>
  )> }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'paymentServiceId'>
    ) }
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type AddPaymentMethodMutationVariables = {
  paymentMethodId: Scalars['String']
};


export type AddPaymentMethodMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addPaymentMethod'>
);

export type CreatePaymentCustomerMutationVariables = {};


export type CreatePaymentCustomerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createPaymentServiceCustomer'>
);

export type SubscribeToPricePlanMutationVariables = {
  priceplan: Scalars['String']
};


export type SubscribeToPricePlanMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'subscribeToPricePlan'>
);

export type RegisterMutationVariables = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type UpdateProductMutationVariables = {
  product: ProductInput
};


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateProduct'>
);

export type UpdatePropertyMutationVariables = {
  property: PropertyInput
};


export type UpdatePropertyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateProperty'>
);


export const CreateMyBookingDocument = gql`
    mutation CreateMyBooking($arrival: String!, $departure: String!, $propertyId: String!) {
  createBooking(arrival: $arrival, departure: $departure, propertyId: $propertyId)
}
    `;
export type CreateMyBookingMutationFn = ApolloReactCommon.MutationFunction<CreateMyBookingMutation, CreateMyBookingMutationVariables>;

/**
 * __useCreateMyBookingMutation__
 *
 * To run a mutation, you first call `useCreateMyBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMyBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMyBookingMutation, { data, loading, error }] = useCreateMyBookingMutation({
 *   variables: {
 *      arrival: // value for 'arrival'
 *      departure: // value for 'departure'
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useCreateMyBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMyBookingMutation, CreateMyBookingMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateMyBookingMutation, CreateMyBookingMutationVariables>(CreateMyBookingDocument, baseOptions);
      }
export type CreateMyBookingMutationHookResult = ReturnType<typeof useCreateMyBookingMutation>;
export type CreateMyBookingMutationResult = ApolloReactCommon.MutationResult<CreateMyBookingMutation>;
export type CreateMyBookingMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMyBookingMutation, CreateMyBookingMutationVariables>;
export const CreateProductDocument = gql`
    query createProduct {
  getNewProduct {
    id
    title
    creationDate
    paymentPricePlan
    price
    minmonth
    active
  }
}
    `;

/**
 * __useCreateProductQuery__
 *
 * To run a query within a React component, call `useCreateProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreateProductQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreateProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useCreateProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CreateProductQuery, CreateProductQueryVariables>) {
        return ApolloReactHooks.useQuery<CreateProductQuery, CreateProductQueryVariables>(CreateProductDocument, baseOptions);
      }
export function useCreateProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CreateProductQuery, CreateProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CreateProductQuery, CreateProductQueryVariables>(CreateProductDocument, baseOptions);
        }
export type CreateProductQueryHookResult = ReturnType<typeof useCreateProductQuery>;
export type CreateProductLazyQueryHookResult = ReturnType<typeof useCreateProductLazyQuery>;
export type CreateProductQueryResult = ApolloReactCommon.QueryResult<CreateProductQuery, CreateProductQueryVariables>;
export const CreatePropertyDocument = gql`
    mutation createProperty($property: PropertyInput!) {
  insertProperty(property: $property)
}
    `;
export type CreatePropertyMutationFn = ApolloReactCommon.MutationFunction<CreatePropertyMutation, CreatePropertyMutationVariables>;

/**
 * __useCreatePropertyMutation__
 *
 * To run a mutation, you first call `useCreatePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPropertyMutation, { data, loading, error }] = useCreatePropertyMutation({
 *   variables: {
 *      property: // value for 'property'
 *   },
 * });
 */
export function useCreatePropertyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePropertyMutation, CreatePropertyMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePropertyMutation, CreatePropertyMutationVariables>(CreatePropertyDocument, baseOptions);
      }
export type CreatePropertyMutationHookResult = ReturnType<typeof useCreatePropertyMutation>;
export type CreatePropertyMutationResult = ApolloReactCommon.MutationResult<CreatePropertyMutation>;
export type CreatePropertyMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePropertyMutation, CreatePropertyMutationVariables>;
export const SaveRatingDocument = gql`
    mutation saveRating($rating: RatingInput!) {
  insertRating(rating: $rating)
}
    `;
export type SaveRatingMutationFn = ApolloReactCommon.MutationFunction<SaveRatingMutation, SaveRatingMutationVariables>;

/**
 * __useSaveRatingMutation__
 *
 * To run a mutation, you first call `useSaveRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveRatingMutation, { data, loading, error }] = useSaveRatingMutation({
 *   variables: {
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useSaveRatingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveRatingMutation, SaveRatingMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveRatingMutation, SaveRatingMutationVariables>(SaveRatingDocument, baseOptions);
      }
export type SaveRatingMutationHookResult = ReturnType<typeof useSaveRatingMutation>;
export type SaveRatingMutationResult = ApolloReactCommon.MutationResult<SaveRatingMutation>;
export type SaveRatingMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveRatingMutation, SaveRatingMutationVariables>;
export const CreateSightDocument = gql`
    mutation createSight($sight: SightInput!) {
  insertSight(sight: $sight)
}
    `;
export type CreateSightMutationFn = ApolloReactCommon.MutationFunction<CreateSightMutation, CreateSightMutationVariables>;

/**
 * __useCreateSightMutation__
 *
 * To run a mutation, you first call `useCreateSightMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSightMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSightMutation, { data, loading, error }] = useCreateSightMutation({
 *   variables: {
 *      sight: // value for 'sight'
 *   },
 * });
 */
export function useCreateSightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSightMutation, CreateSightMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSightMutation, CreateSightMutationVariables>(CreateSightDocument, baseOptions);
      }
export type CreateSightMutationHookResult = ReturnType<typeof useCreateSightMutation>;
export type CreateSightMutationResult = ApolloReactCommon.MutationResult<CreateSightMutation>;
export type CreateSightMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSightMutation, CreateSightMutationVariables>;
export const DeleteBookingDocument = gql`
    mutation deleteBooking($bookingId: String!) {
  deleteBooking(id: $bookingId)
}
    `;
export type DeleteBookingMutationFn = ApolloReactCommon.MutationFunction<DeleteBookingMutation, DeleteBookingMutationVariables>;

/**
 * __useDeleteBookingMutation__
 *
 * To run a mutation, you first call `useDeleteBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookingMutation, { data, loading, error }] = useDeleteBookingMutation({
 *   variables: {
 *      bookingId: // value for 'bookingId'
 *   },
 * });
 */
export function useDeleteBookingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteBookingMutation, DeleteBookingMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteBookingMutation, DeleteBookingMutationVariables>(DeleteBookingDocument, baseOptions);
      }
export type DeleteBookingMutationHookResult = ReturnType<typeof useDeleteBookingMutation>;
export type DeleteBookingMutationResult = ApolloReactCommon.MutationResult<DeleteBookingMutation>;
export type DeleteBookingMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBookingMutation, DeleteBookingMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: String!) {
  deleteProduct(id: $id)
}
    `;
export type DeleteProductMutationFn = ApolloReactCommon.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = ApolloReactCommon.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const DeletePropertyDocument = gql`
    mutation deleteProperty($id: String!) {
  deleteProperty(id: $id)
}
    `;
export type DeletePropertyMutationFn = ApolloReactCommon.MutationFunction<DeletePropertyMutation, DeletePropertyMutationVariables>;

/**
 * __useDeletePropertyMutation__
 *
 * To run a mutation, you first call `useDeletePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePropertyMutation, { data, loading, error }] = useDeletePropertyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePropertyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePropertyMutation, DeletePropertyMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePropertyMutation, DeletePropertyMutationVariables>(DeletePropertyDocument, baseOptions);
      }
export type DeletePropertyMutationHookResult = ReturnType<typeof useDeletePropertyMutation>;
export type DeletePropertyMutationResult = ApolloReactCommon.MutationResult<DeletePropertyMutation>;
export type DeletePropertyMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePropertyMutation, DeletePropertyMutationVariables>;
export const AllBookingsDocument = gql`
    query allBookings {
  getAllBookings {
    creationDate
    id
    dateOfArrival
    dateOfDeparture
    propertyId
  }
}
    `;

/**
 * __useAllBookingsQuery__
 *
 * To run a query within a React component, call `useAllBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBookingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBookingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllBookingsQuery, AllBookingsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllBookingsQuery, AllBookingsQueryVariables>(AllBookingsDocument, baseOptions);
      }
export function useAllBookingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllBookingsQuery, AllBookingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllBookingsQuery, AllBookingsQueryVariables>(AllBookingsDocument, baseOptions);
        }
export type AllBookingsQueryHookResult = ReturnType<typeof useAllBookingsQuery>;
export type AllBookingsLazyQueryHookResult = ReturnType<typeof useAllBookingsLazyQuery>;
export type AllBookingsQueryResult = ApolloReactCommon.QueryResult<AllBookingsQuery, AllBookingsQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  getAllProducts {
    id
    title
    creationDate
    paymentPricePlan
    price
    minmonth
    active
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = ApolloReactCommon.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const GetAllPropertiesDocument = gql`
    query getAllProperties {
  getAllProperties {
    id
    creationDate
    title
    subtext
    location
    long
    lat
    beds_adult
    beds_kids
    beds_tent
    images
  }
}
    `;

/**
 * __useGetAllPropertiesQuery__
 *
 * To run a query within a React component, call `useGetAllPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPropertiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllPropertiesQuery, GetAllPropertiesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllPropertiesQuery, GetAllPropertiesQueryVariables>(GetAllPropertiesDocument, baseOptions);
      }
export function useGetAllPropertiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllPropertiesQuery, GetAllPropertiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllPropertiesQuery, GetAllPropertiesQueryVariables>(GetAllPropertiesDocument, baseOptions);
        }
export type GetAllPropertiesQueryHookResult = ReturnType<typeof useGetAllPropertiesQuery>;
export type GetAllPropertiesLazyQueryHookResult = ReturnType<typeof useGetAllPropertiesLazyQuery>;
export type GetAllPropertiesQueryResult = ApolloReactCommon.QueryResult<GetAllPropertiesQuery, GetAllPropertiesQueryVariables>;
export const AllRatingsDocument = gql`
    query AllRatings {
  getAllRatings {
    id
    creationDate
    targetId
    comment
    rating
    title
    userId
  }
}
    `;

/**
 * __useAllRatingsQuery__
 *
 * To run a query within a React component, call `useAllRatingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRatingsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRatingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllRatingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllRatingsQuery, AllRatingsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllRatingsQuery, AllRatingsQueryVariables>(AllRatingsDocument, baseOptions);
      }
export function useAllRatingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllRatingsQuery, AllRatingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllRatingsQuery, AllRatingsQueryVariables>(AllRatingsDocument, baseOptions);
        }
export type AllRatingsQueryHookResult = ReturnType<typeof useAllRatingsQuery>;
export type AllRatingsLazyQueryHookResult = ReturnType<typeof useAllRatingsLazyQuery>;
export type AllRatingsQueryResult = ApolloReactCommon.QueryResult<AllRatingsQuery, AllRatingsQueryVariables>;
export const SightsDocument = gql`
    query Sights {
  getAllSights {
    id
    creationDate
    title
    type
    subtext
    location
    long
    lat
    images
  }
}
    `;

/**
 * __useSightsQuery__
 *
 * To run a query within a React component, call `useSightsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSightsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSightsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSightsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SightsQuery, SightsQueryVariables>) {
        return ApolloReactHooks.useQuery<SightsQuery, SightsQueryVariables>(SightsDocument, baseOptions);
      }
export function useSightsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SightsQuery, SightsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SightsQuery, SightsQueryVariables>(SightsDocument, baseOptions);
        }
export type SightsQueryHookResult = ReturnType<typeof useSightsQuery>;
export type SightsLazyQueryHookResult = ReturnType<typeof useSightsLazyQuery>;
export type SightsQueryResult = ApolloReactCommon.QueryResult<SightsQuery, SightsQueryVariables>;
export const BlockedDatesByPropertyDocument = gql`
    query blockedDatesByProperty($propertyId: String!) {
  getBlockedDatesFromProperty(propertyId: $propertyId) {
    bookingId
    dateTimeStamp
    type
  }
}
    `;

/**
 * __useBlockedDatesByPropertyQuery__
 *
 * To run a query within a React component, call `useBlockedDatesByPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockedDatesByPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockedDatesByPropertyQuery({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useBlockedDatesByPropertyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BlockedDatesByPropertyQuery, BlockedDatesByPropertyQueryVariables>) {
        return ApolloReactHooks.useQuery<BlockedDatesByPropertyQuery, BlockedDatesByPropertyQueryVariables>(BlockedDatesByPropertyDocument, baseOptions);
      }
export function useBlockedDatesByPropertyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BlockedDatesByPropertyQuery, BlockedDatesByPropertyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BlockedDatesByPropertyQuery, BlockedDatesByPropertyQueryVariables>(BlockedDatesByPropertyDocument, baseOptions);
        }
export type BlockedDatesByPropertyQueryHookResult = ReturnType<typeof useBlockedDatesByPropertyQuery>;
export type BlockedDatesByPropertyLazyQueryHookResult = ReturnType<typeof useBlockedDatesByPropertyLazyQuery>;
export type BlockedDatesByPropertyQueryResult = ApolloReactCommon.QueryResult<BlockedDatesByPropertyQuery, BlockedDatesByPropertyQueryVariables>;
export const MyBookingDocument = gql`
    query MyBooking {
  myBooking {
    id
    dateOfArrival
    dateOfDeparture
    propertyId
  }
}
    `;

/**
 * __useMyBookingQuery__
 *
 * To run a query within a React component, call `useMyBookingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyBookingQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyBookingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyBookingQuery, MyBookingQueryVariables>) {
        return ApolloReactHooks.useQuery<MyBookingQuery, MyBookingQueryVariables>(MyBookingDocument, baseOptions);
      }
export function useMyBookingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyBookingQuery, MyBookingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyBookingQuery, MyBookingQueryVariables>(MyBookingDocument, baseOptions);
        }
export type MyBookingQueryHookResult = ReturnType<typeof useMyBookingQuery>;
export type MyBookingLazyQueryHookResult = ReturnType<typeof useMyBookingLazyQuery>;
export type MyBookingQueryResult = ApolloReactCommon.QueryResult<MyBookingQuery, MyBookingQueryVariables>;
export const GetProductDocument = gql`
    query getProduct($id: String!) {
  getProduct(id: $id) {
    id
    title
    creationDate
    paymentPricePlan
    price
    minmonth
    active
  }
}
    `;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
      }
export function useGetProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = ApolloReactCommon.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const GetPropertyDocument = gql`
    query getProperty($id: String!) {
  getProperty(id: $id) {
    id
    creationDate
    title
    subtext
    location
    long
    lat
    beds_adult
    beds_kids
    beds_tent
    images
  }
}
    `;

/**
 * __useGetPropertyQuery__
 *
 * To run a query within a React component, call `useGetPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPropertyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, baseOptions);
      }
export function useGetPropertyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, baseOptions);
        }
export type GetPropertyQueryHookResult = ReturnType<typeof useGetPropertyQuery>;
export type GetPropertyLazyQueryHookResult = ReturnType<typeof useGetPropertyLazyQuery>;
export type GetPropertyQueryResult = ApolloReactCommon.QueryResult<GetPropertyQuery, GetPropertyQueryVariables>;
export const GetRatingDocument = gql`
    query getRating($id: String!) {
  getRating(id: $id) {
    id
    creationDate
    targetId
    comment
    rating
    title
    userId
  }
}
    `;

/**
 * __useGetRatingQuery__
 *
 * To run a query within a React component, call `useGetRatingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRatingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRatingQuery, GetRatingQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRatingQuery, GetRatingQueryVariables>(GetRatingDocument, baseOptions);
      }
export function useGetRatingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRatingQuery, GetRatingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRatingQuery, GetRatingQueryVariables>(GetRatingDocument, baseOptions);
        }
export type GetRatingQueryHookResult = ReturnType<typeof useGetRatingQuery>;
export type GetRatingLazyQueryHookResult = ReturnType<typeof useGetRatingLazyQuery>;
export type GetRatingQueryResult = ApolloReactCommon.QueryResult<GetRatingQuery, GetRatingQueryVariables>;
export const GetRatingValuesByTargetDocument = gql`
    query getRatingValuesByTarget($targetId: String!) {
  getRatingValuesByTarget(targetId: $targetId) {
    targetId
    ratings
    ratingValue
  }
}
    `;

/**
 * __useGetRatingValuesByTargetQuery__
 *
 * To run a query within a React component, call `useGetRatingValuesByTargetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRatingValuesByTargetQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRatingValuesByTargetQuery({
 *   variables: {
 *      targetId: // value for 'targetId'
 *   },
 * });
 */
export function useGetRatingValuesByTargetQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRatingValuesByTargetQuery, GetRatingValuesByTargetQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRatingValuesByTargetQuery, GetRatingValuesByTargetQueryVariables>(GetRatingValuesByTargetDocument, baseOptions);
      }
export function useGetRatingValuesByTargetLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRatingValuesByTargetQuery, GetRatingValuesByTargetQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRatingValuesByTargetQuery, GetRatingValuesByTargetQueryVariables>(GetRatingValuesByTargetDocument, baseOptions);
        }
export type GetRatingValuesByTargetQueryHookResult = ReturnType<typeof useGetRatingValuesByTargetQuery>;
export type GetRatingValuesByTargetLazyQueryHookResult = ReturnType<typeof useGetRatingValuesByTargetLazyQuery>;
export type GetRatingValuesByTargetQueryResult = ApolloReactCommon.QueryResult<GetRatingValuesByTargetQuery, GetRatingValuesByTargetQueryVariables>;
export const GetSightDocument = gql`
    query getSight($id: String!) {
  getSight(id: $id) {
    id
    creationDate
    title
    type
    subtext
    location
    long
    lat
    images
  }
}
    `;

/**
 * __useGetSightQuery__
 *
 * To run a query within a React component, call `useGetSightQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSightQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSightQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSightQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSightQuery, GetSightQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSightQuery, GetSightQueryVariables>(GetSightDocument, baseOptions);
      }
export function useGetSightLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSightQuery, GetSightQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSightQuery, GetSightQueryVariables>(GetSightDocument, baseOptions);
        }
export type GetSightQueryHookResult = ReturnType<typeof useGetSightQuery>;
export type GetSightLazyQueryHookResult = ReturnType<typeof useGetSightLazyQuery>;
export type GetSightQueryResult = ApolloReactCommon.QueryResult<GetSightQuery, GetSightQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    email
    creationDate
    id
    paymentServiceId
    gender
    firstname
    surname
    street
    streetNumber
    postalcode
    town
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    email
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      id
      email
      paymentServiceId
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const AddPaymentMethodDocument = gql`
    mutation addPaymentMethod($paymentMethodId: String!) {
  addPaymentMethod(paymentMethodId: $paymentMethodId)
}
    `;
export type AddPaymentMethodMutationFn = ApolloReactCommon.MutationFunction<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>;

/**
 * __useAddPaymentMethodMutation__
 *
 * To run a mutation, you first call `useAddPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPaymentMethodMutation, { data, loading, error }] = useAddPaymentMethodMutation({
 *   variables: {
 *      paymentMethodId: // value for 'paymentMethodId'
 *   },
 * });
 */
export function useAddPaymentMethodMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>) {
        return ApolloReactHooks.useMutation<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>(AddPaymentMethodDocument, baseOptions);
      }
export type AddPaymentMethodMutationHookResult = ReturnType<typeof useAddPaymentMethodMutation>;
export type AddPaymentMethodMutationResult = ApolloReactCommon.MutationResult<AddPaymentMethodMutation>;
export type AddPaymentMethodMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>;
export const CreatePaymentCustomerDocument = gql`
    mutation createPaymentCustomer {
  createPaymentServiceCustomer
}
    `;
export type CreatePaymentCustomerMutationFn = ApolloReactCommon.MutationFunction<CreatePaymentCustomerMutation, CreatePaymentCustomerMutationVariables>;

/**
 * __useCreatePaymentCustomerMutation__
 *
 * To run a mutation, you first call `useCreatePaymentCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentCustomerMutation, { data, loading, error }] = useCreatePaymentCustomerMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreatePaymentCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePaymentCustomerMutation, CreatePaymentCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePaymentCustomerMutation, CreatePaymentCustomerMutationVariables>(CreatePaymentCustomerDocument, baseOptions);
      }
export type CreatePaymentCustomerMutationHookResult = ReturnType<typeof useCreatePaymentCustomerMutation>;
export type CreatePaymentCustomerMutationResult = ApolloReactCommon.MutationResult<CreatePaymentCustomerMutation>;
export type CreatePaymentCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePaymentCustomerMutation, CreatePaymentCustomerMutationVariables>;
export const SubscribeToPricePlanDocument = gql`
    mutation subscribeToPricePlan($priceplan: String!) {
  subscribeToPricePlan(priceplan: $priceplan)
}
    `;
export type SubscribeToPricePlanMutationFn = ApolloReactCommon.MutationFunction<SubscribeToPricePlanMutation, SubscribeToPricePlanMutationVariables>;

/**
 * __useSubscribeToPricePlanMutation__
 *
 * To run a mutation, you first call `useSubscribeToPricePlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToPricePlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeToPricePlanMutation, { data, loading, error }] = useSubscribeToPricePlanMutation({
 *   variables: {
 *      priceplan: // value for 'priceplan'
 *   },
 * });
 */
export function useSubscribeToPricePlanMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubscribeToPricePlanMutation, SubscribeToPricePlanMutationVariables>) {
        return ApolloReactHooks.useMutation<SubscribeToPricePlanMutation, SubscribeToPricePlanMutationVariables>(SubscribeToPricePlanDocument, baseOptions);
      }
export type SubscribeToPricePlanMutationHookResult = ReturnType<typeof useSubscribeToPricePlanMutation>;
export type SubscribeToPricePlanMutationResult = ApolloReactCommon.MutationResult<SubscribeToPricePlanMutation>;
export type SubscribeToPricePlanMutationOptions = ApolloReactCommon.BaseMutationOptions<SubscribeToPricePlanMutation, SubscribeToPricePlanMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
  register(username: $username, email: $email, password: $password)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($product: ProductInput!) {
  updateProduct(product: $product)
}
    `;
export type UpdateProductMutationFn = ApolloReactCommon.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = ApolloReactCommon.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const UpdatePropertyDocument = gql`
    mutation updateProperty($property: PropertyInput!) {
  updateProperty(property: $property)
}
    `;
export type UpdatePropertyMutationFn = ApolloReactCommon.MutationFunction<UpdatePropertyMutation, UpdatePropertyMutationVariables>;

/**
 * __useUpdatePropertyMutation__
 *
 * To run a mutation, you first call `useUpdatePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropertyMutation, { data, loading, error }] = useUpdatePropertyMutation({
 *   variables: {
 *      property: // value for 'property'
 *   },
 * });
 */
export function useUpdatePropertyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePropertyMutation, UpdatePropertyMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePropertyMutation, UpdatePropertyMutationVariables>(UpdatePropertyDocument, baseOptions);
      }
export type UpdatePropertyMutationHookResult = ReturnType<typeof useUpdatePropertyMutation>;
export type UpdatePropertyMutationResult = ApolloReactCommon.MutationResult<UpdatePropertyMutation>;
export type UpdatePropertyMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePropertyMutation, UpdatePropertyMutationVariables>;