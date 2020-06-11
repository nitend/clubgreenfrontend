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
  DateTime: any,
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
  user: Scalars['String'],
  date: Scalars['Float'],
  from: Scalars['Float'],
  to: Scalars['Float'],
  deleted: Scalars['Boolean'],
  propertyId: Scalars['String'],
  property: Property,
};


export type Email = {
   __typename?: 'Email',
  id: Scalars['Int'],
  email: Scalars['String'],
  verified: Scalars['Boolean'],
  verification_token: Scalars['String'],
  verification_date: Scalars['Float'],
};

export type Location = {
   __typename?: 'Location',
  id: Scalars['String'],
  title: Scalars['String'],
  type: Scalars['String'],
  lat: Scalars['Float'],
  long: Scalars['Float'],
  images: Array<Scalars['String']>,
};

export type LoginResponse = {
   __typename?: 'LoginResponse',
  accessToken: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  logout: Scalars['Boolean'],
  revokeRefreshTokeForUser: Scalars['Boolean'],
  createPaymentServiceCustomer: Scalars['Boolean'],
  login: LoginResponse,
  register: Scalars['Boolean'],
  updateUserName: Scalars['Boolean'],
  updateUserAddress: Scalars['Boolean'],
  bookProperty: Scalars['Boolean'],
  deleteBooking: Scalars['Boolean'],
  saveProperty: Scalars['Boolean'],
  createProperty: Scalars['Boolean'],
  deleteProperty: Scalars['Boolean'],
  saveSight: Scalars['Boolean'],
  deleteSight: Scalars['Boolean'],
  saveRating: Scalars['Boolean'],
  deleteRating: Scalars['Boolean'],
  updateProduct: Scalars['Boolean'],
  deleteProduct: Scalars['Boolean'],
  subscribeToPricePlan: Scalars['Boolean'],
  addPaymentMethod: Scalars['Boolean'],
};


export type MutationRevokeRefreshTokeForUserArgs = {
  userId: Scalars['Int']
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


export type MutationBookPropertyArgs = {
  to: Scalars['Float'],
  from: Scalars['Float'],
  propertyId: Scalars['String']
};


export type MutationDeleteBookingArgs = {
  bookingId: Scalars['String']
};


export type MutationSavePropertyArgs = {
  property: PropertyInput
};


export type MutationCreatePropertyArgs = {
  images: Array<Scalars['String']>,
  beds_tent: Scalars['Float'],
  beds_kids: Scalars['Float'],
  beds_adult: Scalars['Float'],
  long: Scalars['Float'],
  lat: Scalars['Float'],
  subtext: Scalars['String'],
  location: Scalars['String'],
  title: Scalars['String']
};


export type MutationDeletePropertyArgs = {
  id: Scalars['String']
};


export type MutationSaveSightArgs = {
  sight: SightInput
};


export type MutationDeleteSightArgs = {
  id: Scalars['String']
};


export type MutationSaveRatingArgs = {
  rating: RatingInput
};


export type MutationDeleteRatingArgs = {
  id: Scalars['String']
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

export type Product = {
   __typename?: 'Product',
  id: Scalars['String'],
  creationDate: Scalars['DateTime'],
  title: Scalars['String'],
  paymentPricePlan: Scalars['String'],
  price: Scalars['Float'],
  minmonth: Scalars['Float'],
  deleted: Scalars['Boolean'],
  active: Scalars['Boolean'],
};

export type ProductInput = {
  id: Scalars['String'],
  creationDate: Scalars['DateTime'],
  title: Scalars['String'],
  paymentPricePlan: Scalars['String'],
  price: Scalars['Float'],
  minmonth: Scalars['Float'],
  deleted: Scalars['Boolean'],
  active: Scalars['Boolean'],
};

export type Property = {
   __typename?: 'Property',
  id: Scalars['String'],
  title: Scalars['String'],
  subtext: Scalars['String'],
  location: Scalars['String'],
  long: Scalars['Float'],
  lat: Scalars['Float'],
  beds_adult: Scalars['Float'],
  beds_kids: Scalars['Float'],
  beds_tent: Scalars['Float'],
  images: Array<Scalars['String']>,
};

export type PropertyInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  subtext: Scalars['String'],
  location: Scalars['String'],
  long: Scalars['Float'],
  lat: Scalars['Float'],
  beds_adult: Scalars['Float'],
  beds_kids: Scalars['Float'],
  beds_tent: Scalars['Float'],
  images: Array<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
  users: Array<User>,
  myBooking?: Maybe<Booking>,
  allBooking?: Maybe<Array<Booking>>,
  getBlockedDatesFromProperty?: Maybe<Array<BlockedDate>>,
  propertiesEvalable?: Maybe<Array<Booking>>,
  allProperties?: Maybe<Array<Property>>,
  teaserProperties?: Maybe<Array<Property>>,
  activeBookingsForProperty?: Maybe<Array<Booking>>,
  getProperties?: Maybe<Array<Property>>,
  getProperty?: Maybe<Property>,
  getSights?: Maybe<Array<Sight>>,
  getSight?: Maybe<Sight>,
  getAllRatings?: Maybe<Array<Rating>>,
  getRating?: Maybe<Rating>,
  getRatingValuesByTarget?: Maybe<RatingValues>,
  getAllLocations?: Maybe<Array<Location>>,
  getAllProducts?: Maybe<Array<Product>>,
  getProduct?: Maybe<Product>,
  getNewProduct: Product,
};


export type QueryGetBlockedDatesFromPropertyArgs = {
  propertyId: Scalars['String']
};


export type QueryPropertiesEvalableArgs = {
  to: Scalars['Float'],
  from: Scalars['Float']
};


export type QueryActiveBookingsForPropertyArgs = {
  propertyId: Scalars['String']
};


export type QueryGetPropertyArgs = {
  id: Scalars['String']
};


export type QueryGetSightArgs = {
  id: Scalars['String']
};


export type QueryGetRatingArgs = {
  id: Scalars['String']
};


export type QueryGetRatingValuesByTargetArgs = {
  targetId: Scalars['String'],
  targettype: Scalars['String']
};


export type QueryGetProductArgs = {
  id: Scalars['String']
};

export type Rating = {
   __typename?: 'Rating',
  id: Scalars['String'],
  title: Scalars['String'],
  targettype: Scalars['String'],
  targetId: Scalars['Float'],
  rating: Scalars['Float'],
  userId: Scalars['Float'],
  comment: Scalars['String'],
};

export type RatingInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  targettype: Scalars['String'],
  targetId: Scalars['Float'],
  rating: Scalars['Float'],
  userId: Scalars['Float'],
  comment: Scalars['String'],
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
  title: Scalars['String'],
  type: Scalars['String'],
  subtext: Scalars['String'],
  location: Scalars['String'],
  long: Scalars['Float'],
  lat: Scalars['Float'],
  images: Array<Scalars['String']>,
};

export type SightInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  type: Scalars['String'],
  subtext: Scalars['String'],
  location: Scalars['String'],
  long: Scalars['Float'],
  lat: Scalars['Float'],
  images: Array<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['String'],
  username: Scalars['String'],
  email: Scalars['String'],
  paymentServiceId?: Maybe<Scalars['String']>,
  gender?: Maybe<Scalars['String']>,
  firstname?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  street?: Maybe<Scalars['String']>,
  streetNumber?: Maybe<Scalars['String']>,
  town?: Maybe<Scalars['String']>,
  postalcode?: Maybe<Scalars['String']>,
  tokenVersion: Scalars['Float'],
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
  to: Scalars['Float'],
  from: Scalars['Float'],
  propertyId: Scalars['String']
};


export type CreateMyBookingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'bookProperty'>
);

export type CreateProductQueryVariables = {};


export type CreateProductQuery = (
  { __typename?: 'Query' }
  & { getNewProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'creationDate' | 'paymentPricePlan' | 'price' | 'minmonth' | 'deleted' | 'active'>
  ) }
);

export type SavePropertyMutationVariables = {
  property: PropertyInput
};


export type SavePropertyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'saveProperty'>
);

export type SaveRatingMutationVariables = {
  rating: RatingInput
};


export type SaveRatingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'saveRating'>
);

export type SaveSightMutationVariables = {
  sight: SightInput
};


export type SaveSightMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'saveSight'>
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

export type AllBookingQueryVariables = {};


export type AllBookingQuery = (
  { __typename?: 'Query' }
  & { allBooking: Maybe<Array<(
    { __typename?: 'Booking' }
    & Pick<Booking, 'id' | 'from' | 'to' | 'deleted' | 'propertyId'>
  )>> }
);

export type ProductsQueryVariables = {};


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { getAllProducts: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'creationDate' | 'paymentPricePlan' | 'price' | 'minmonth' | 'deleted' | 'active'>
  )>> }
);

export type PropertiesQueryVariables = {};


export type PropertiesQuery = (
  { __typename?: 'Query' }
  & { allProperties: Maybe<Array<(
    { __typename?: 'Property' }
    & Pick<Property, 'id' | 'title' | 'subtext' | 'location' | 'long' | 'lat' | 'beds_adult' | 'beds_kids' | 'beds_tent' | 'images'>
  )>> }
);

export type AllRatingsQueryVariables = {};


export type AllRatingsQuery = (
  { __typename?: 'Query' }
  & { getAllRatings: Maybe<Array<(
    { __typename?: 'Rating' }
    & Pick<Rating, 'id' | 'targettype' | 'targetId' | 'comment' | 'rating' | 'title' | 'userId'>
  )>> }
);

export type SightsQueryVariables = {};


export type SightsQuery = (
  { __typename?: 'Query' }
  & { getSights: Maybe<Array<(
    { __typename?: 'Sight' }
    & Pick<Sight, 'id' | 'title' | 'type' | 'subtext' | 'location' | 'long' | 'lat' | 'images'>
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
    & Pick<Booking, 'id' | 'from' | 'to'>
    & { property: (
      { __typename?: 'Property' }
      & Pick<Property, 'id' | 'title' | 'location' | 'long' | 'lat' | 'images' | 'beds_adult' | 'beds_kids' | 'beds_tent' | 'subtext'>
    ) }
  )> }
);

export type BookingsByPropertyQueryVariables = {
  propertyId: Scalars['String']
};


export type BookingsByPropertyQuery = (
  { __typename?: 'Query' }
  & { activeBookingsForProperty: Maybe<Array<(
    { __typename?: 'Booking' }
    & Pick<Booking, 'propertyId' | 'to' | 'from'>
  )>> }
);

export type GetProductQueryVariables = {
  id: Scalars['String']
};


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { getProduct: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'title' | 'creationDate' | 'paymentPricePlan' | 'price' | 'minmonth' | 'deleted' | 'active'>
  )> }
);

export type TeaserPropertiesQueryVariables = {};


export type TeaserPropertiesQuery = (
  { __typename?: 'Query' }
  & { teaserProperties: Maybe<Array<(
    { __typename?: 'Property' }
    & Pick<Property, 'id' | 'title' | 'subtext' | 'location' | 'long' | 'lat' | 'beds_adult' | 'beds_kids' | 'beds_tent' | 'images'>
  )>> }
);

export type GetPropertyQueryVariables = {
  id: Scalars['String']
};


export type GetPropertyQuery = (
  { __typename?: 'Query' }
  & { getProperty: Maybe<(
    { __typename?: 'Property' }
    & Pick<Property, 'id' | 'title' | 'subtext' | 'location' | 'long' | 'lat' | 'beds_adult' | 'beds_kids' | 'beds_tent' | 'images'>
  )> }
);

export type GetRatingQueryVariables = {
  id: Scalars['String']
};


export type GetRatingQuery = (
  { __typename?: 'Query' }
  & { getRating: Maybe<(
    { __typename?: 'Rating' }
    & Pick<Rating, 'id' | 'targettype' | 'targetId' | 'comment' | 'rating' | 'title' | 'userId'>
  )> }
);

export type GetRatingValuesByTargetQueryVariables = {
  targettype: Scalars['String'],
  targetId: Scalars['String']
};


export type GetRatingValuesByTargetQuery = (
  { __typename?: 'Query' }
  & { getRatingValuesByTarget: Maybe<(
    { __typename?: 'RatingValues' }
    & Pick<RatingValues, 'targetId' | 'targettype' | 'ratings' | 'ratingValue'>
  )> }
);

export type GetSightQueryVariables = {
  id: Scalars['String']
};


export type GetSightQuery = (
  { __typename?: 'Query' }
  & { getSight: Maybe<(
    { __typename?: 'Sight' }
    & Pick<Sight, 'id' | 'title' | 'type' | 'subtext' | 'location' | 'long' | 'lat' | 'images'>
  )> }
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'id' | 'paymentServiceId' | 'gender' | 'firstname' | 'surname' | 'street' | 'streetNumber' | 'postalcode' | 'town'>
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

export type CreatePaymentSerivceCustomerMutationVariables = {};


export type CreatePaymentSerivceCustomerMutation = (
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

export type UpdateUserAddressMutationVariables = {
  useraddress: UserAddress
};


export type UpdateUserAddressMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateUserAddress'>
);

export type UpdateUserNameMutationVariables = {
  username: UserName
};


export type UpdateUserNameMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateUserName'>
);


export const CreateMyBookingDocument = gql`
    mutation CreateMyBooking($to: Float!, $from: Float!, $propertyId: String!) {
  bookProperty(to: $to, from: $from, propertyId: $propertyId)
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
 *      to: // value for 'to'
 *      from: // value for 'from'
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
    deleted
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
export const SavePropertyDocument = gql`
    mutation saveProperty($property: PropertyInput!) {
  saveProperty(property: $property)
}
    `;
export type SavePropertyMutationFn = ApolloReactCommon.MutationFunction<SavePropertyMutation, SavePropertyMutationVariables>;

/**
 * __useSavePropertyMutation__
 *
 * To run a mutation, you first call `useSavePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePropertyMutation, { data, loading, error }] = useSavePropertyMutation({
 *   variables: {
 *      property: // value for 'property'
 *   },
 * });
 */
export function useSavePropertyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SavePropertyMutation, SavePropertyMutationVariables>) {
        return ApolloReactHooks.useMutation<SavePropertyMutation, SavePropertyMutationVariables>(SavePropertyDocument, baseOptions);
      }
export type SavePropertyMutationHookResult = ReturnType<typeof useSavePropertyMutation>;
export type SavePropertyMutationResult = ApolloReactCommon.MutationResult<SavePropertyMutation>;
export type SavePropertyMutationOptions = ApolloReactCommon.BaseMutationOptions<SavePropertyMutation, SavePropertyMutationVariables>;
export const SaveRatingDocument = gql`
    mutation saveRating($rating: RatingInput!) {
  saveRating(rating: $rating)
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
export const SaveSightDocument = gql`
    mutation saveSight($sight: SightInput!) {
  saveSight(sight: $sight)
}
    `;
export type SaveSightMutationFn = ApolloReactCommon.MutationFunction<SaveSightMutation, SaveSightMutationVariables>;

/**
 * __useSaveSightMutation__
 *
 * To run a mutation, you first call `useSaveSightMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveSightMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveSightMutation, { data, loading, error }] = useSaveSightMutation({
 *   variables: {
 *      sight: // value for 'sight'
 *   },
 * });
 */
export function useSaveSightMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveSightMutation, SaveSightMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveSightMutation, SaveSightMutationVariables>(SaveSightDocument, baseOptions);
      }
export type SaveSightMutationHookResult = ReturnType<typeof useSaveSightMutation>;
export type SaveSightMutationResult = ApolloReactCommon.MutationResult<SaveSightMutation>;
export type SaveSightMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveSightMutation, SaveSightMutationVariables>;
export const DeleteBookingDocument = gql`
    mutation deleteBooking($bookingId: String!) {
  deleteBooking(bookingId: $bookingId)
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
export const AllBookingDocument = gql`
    query allBooking {
  allBooking {
    id
    from
    to
    deleted
    propertyId
  }
}
    `;

/**
 * __useAllBookingQuery__
 *
 * To run a query within a React component, call `useAllBookingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBookingQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBookingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllBookingQuery, AllBookingQueryVariables>) {
        return ApolloReactHooks.useQuery<AllBookingQuery, AllBookingQueryVariables>(AllBookingDocument, baseOptions);
      }
export function useAllBookingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllBookingQuery, AllBookingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllBookingQuery, AllBookingQueryVariables>(AllBookingDocument, baseOptions);
        }
export type AllBookingQueryHookResult = ReturnType<typeof useAllBookingQuery>;
export type AllBookingLazyQueryHookResult = ReturnType<typeof useAllBookingLazyQuery>;
export type AllBookingQueryResult = ApolloReactCommon.QueryResult<AllBookingQuery, AllBookingQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  getAllProducts {
    id
    title
    creationDate
    paymentPricePlan
    price
    minmonth
    deleted
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
export const PropertiesDocument = gql`
    query Properties {
  allProperties {
    id
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
 * __usePropertiesQuery__
 *
 * To run a query within a React component, call `usePropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePropertiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PropertiesQuery, PropertiesQueryVariables>) {
        return ApolloReactHooks.useQuery<PropertiesQuery, PropertiesQueryVariables>(PropertiesDocument, baseOptions);
      }
export function usePropertiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PropertiesQuery, PropertiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PropertiesQuery, PropertiesQueryVariables>(PropertiesDocument, baseOptions);
        }
export type PropertiesQueryHookResult = ReturnType<typeof usePropertiesQuery>;
export type PropertiesLazyQueryHookResult = ReturnType<typeof usePropertiesLazyQuery>;
export type PropertiesQueryResult = ApolloReactCommon.QueryResult<PropertiesQuery, PropertiesQueryVariables>;
export const AllRatingsDocument = gql`
    query AllRatings {
  getAllRatings {
    id
    targettype
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
  getSights {
    id
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
    from
    to
    property {
      id
      title
      location
      long
      lat
      images
      beds_adult
      beds_kids
      beds_tent
      subtext
    }
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
export const BookingsByPropertyDocument = gql`
    query BookingsByProperty($propertyId: String!) {
  activeBookingsForProperty(propertyId: $propertyId) {
    propertyId
    to
    from
  }
}
    `;

/**
 * __useBookingsByPropertyQuery__
 *
 * To run a query within a React component, call `useBookingsByPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookingsByPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookingsByPropertyQuery({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useBookingsByPropertyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BookingsByPropertyQuery, BookingsByPropertyQueryVariables>) {
        return ApolloReactHooks.useQuery<BookingsByPropertyQuery, BookingsByPropertyQueryVariables>(BookingsByPropertyDocument, baseOptions);
      }
export function useBookingsByPropertyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BookingsByPropertyQuery, BookingsByPropertyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BookingsByPropertyQuery, BookingsByPropertyQueryVariables>(BookingsByPropertyDocument, baseOptions);
        }
export type BookingsByPropertyQueryHookResult = ReturnType<typeof useBookingsByPropertyQuery>;
export type BookingsByPropertyLazyQueryHookResult = ReturnType<typeof useBookingsByPropertyLazyQuery>;
export type BookingsByPropertyQueryResult = ApolloReactCommon.QueryResult<BookingsByPropertyQuery, BookingsByPropertyQueryVariables>;
export const GetProductDocument = gql`
    query getProduct($id: String!) {
  getProduct(id: $id) {
    id
    title
    creationDate
    paymentPricePlan
    price
    minmonth
    deleted
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
export const TeaserPropertiesDocument = gql`
    query TeaserProperties {
  teaserProperties {
    id
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
 * __useTeaserPropertiesQuery__
 *
 * To run a query within a React component, call `useTeaserPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeaserPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeaserPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeaserPropertiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TeaserPropertiesQuery, TeaserPropertiesQueryVariables>) {
        return ApolloReactHooks.useQuery<TeaserPropertiesQuery, TeaserPropertiesQueryVariables>(TeaserPropertiesDocument, baseOptions);
      }
export function useTeaserPropertiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TeaserPropertiesQuery, TeaserPropertiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TeaserPropertiesQuery, TeaserPropertiesQueryVariables>(TeaserPropertiesDocument, baseOptions);
        }
export type TeaserPropertiesQueryHookResult = ReturnType<typeof useTeaserPropertiesQuery>;
export type TeaserPropertiesLazyQueryHookResult = ReturnType<typeof useTeaserPropertiesLazyQuery>;
export type TeaserPropertiesQueryResult = ApolloReactCommon.QueryResult<TeaserPropertiesQuery, TeaserPropertiesQueryVariables>;
export const GetPropertyDocument = gql`
    query getProperty($id: String!) {
  getProperty(id: $id) {
    id
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
    targettype
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
    query getRatingValuesByTarget($targettype: String!, $targetId: String!) {
  getRatingValuesByTarget(targettype: $targettype, targetId: $targetId) {
    targetId
    targettype
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
 *      targettype: // value for 'targettype'
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
export const CreatePaymentSerivceCustomerDocument = gql`
    mutation createPaymentSerivceCustomer {
  createPaymentServiceCustomer
}
    `;
export type CreatePaymentSerivceCustomerMutationFn = ApolloReactCommon.MutationFunction<CreatePaymentSerivceCustomerMutation, CreatePaymentSerivceCustomerMutationVariables>;

/**
 * __useCreatePaymentSerivceCustomerMutation__
 *
 * To run a mutation, you first call `useCreatePaymentSerivceCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentSerivceCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentSerivceCustomerMutation, { data, loading, error }] = useCreatePaymentSerivceCustomerMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreatePaymentSerivceCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePaymentSerivceCustomerMutation, CreatePaymentSerivceCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePaymentSerivceCustomerMutation, CreatePaymentSerivceCustomerMutationVariables>(CreatePaymentSerivceCustomerDocument, baseOptions);
      }
export type CreatePaymentSerivceCustomerMutationHookResult = ReturnType<typeof useCreatePaymentSerivceCustomerMutation>;
export type CreatePaymentSerivceCustomerMutationResult = ApolloReactCommon.MutationResult<CreatePaymentSerivceCustomerMutation>;
export type CreatePaymentSerivceCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePaymentSerivceCustomerMutation, CreatePaymentSerivceCustomerMutationVariables>;
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
export const UpdateUserAddressDocument = gql`
    mutation updateUserAddress($useraddress: UserAddress!) {
  updateUserAddress(useraddress: $useraddress)
}
    `;
export type UpdateUserAddressMutationFn = ApolloReactCommon.MutationFunction<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>;

/**
 * __useUpdateUserAddressMutation__
 *
 * To run a mutation, you first call `useUpdateUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAddressMutation, { data, loading, error }] = useUpdateUserAddressMutation({
 *   variables: {
 *      useraddress: // value for 'useraddress'
 *   },
 * });
 */
export function useUpdateUserAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>(UpdateUserAddressDocument, baseOptions);
      }
export type UpdateUserAddressMutationHookResult = ReturnType<typeof useUpdateUserAddressMutation>;
export type UpdateUserAddressMutationResult = ApolloReactCommon.MutationResult<UpdateUserAddressMutation>;
export type UpdateUserAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserAddressMutation, UpdateUserAddressMutationVariables>;
export const UpdateUserNameDocument = gql`
    mutation updateUserName($username: UserName!) {
  updateUserName(username: $username)
}
    `;
export type UpdateUserNameMutationFn = ApolloReactCommon.MutationFunction<UpdateUserNameMutation, UpdateUserNameMutationVariables>;

/**
 * __useUpdateUserNameMutation__
 *
 * To run a mutation, you first call `useUpdateUserNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserNameMutation, { data, loading, error }] = useUpdateUserNameMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUpdateUserNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserNameMutation, UpdateUserNameMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserNameMutation, UpdateUserNameMutationVariables>(UpdateUserNameDocument, baseOptions);
      }
export type UpdateUserNameMutationHookResult = ReturnType<typeof useUpdateUserNameMutation>;
export type UpdateUserNameMutationResult = ApolloReactCommon.MutationResult<UpdateUserNameMutation>;
export type UpdateUserNameMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserNameMutation, UpdateUserNameMutationVariables>;