import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type AdminGetMeOutput = {
  __typename?: 'AdminGetMeOutput';
  id: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AdminRegisterInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String']['output'];
};

export type CloudinarySignatureOutput = {
  __typename?: 'CloudinarySignatureOutput';
  apiKey: Scalars['String']['output'];
  cloudName: Scalars['String']['output'];
  publicId: Scalars['String']['output'];
  signature: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};

export type CustomerLoginInput = {
  phoneNumber: Scalars['String']['input'];
};

export type CustomerLoginOutput = {
  __typename?: 'CustomerLoginOutput';
  status: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AdminLoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminLoginOutput = {
  __typename?: 'adminLoginOutput';
  accessToken: Scalars['String']['output'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** columns and relationships of "advantages" */
export type Advantages = {
  __typename?: 'advantages';
  id: Scalars['uuid']['output'];
  label: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "advantages" */
export type Advantages_Aggregate = {
  __typename?: 'advantages_aggregate';
  aggregate?: Maybe<Advantages_Aggregate_Fields>;
  nodes: Array<Advantages>;
};

/** aggregate fields of "advantages" */
export type Advantages_Aggregate_Fields = {
  __typename?: 'advantages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Advantages_Max_Fields>;
  min?: Maybe<Advantages_Min_Fields>;
};


/** aggregate fields of "advantages" */
export type Advantages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Advantages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "advantages". All fields are combined with a logical 'AND'. */
export type Advantages_Bool_Exp = {
  _and?: InputMaybe<Array<Advantages_Bool_Exp>>;
  _not?: InputMaybe<Advantages_Bool_Exp>;
  _or?: InputMaybe<Array<Advantages_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "advantages" */
export enum Advantages_Constraint {
  /** unique or primary key constraint */
  AdvantagesPkey = 'advantages_pkey'
}

/** input type for inserting data into table "advantages" */
export type Advantages_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Advantages_Max_Fields = {
  __typename?: 'advantages_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Advantages_Min_Fields = {
  __typename?: 'advantages_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "advantages" */
export type Advantages_Mutation_Response = {
  __typename?: 'advantages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Advantages>;
};

/** on conflict condition type for table "advantages" */
export type Advantages_On_Conflict = {
  constraint: Advantages_Constraint;
  update_columns?: Array<Advantages_Update_Column>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};

/** Ordering options when selecting data from "advantages". */
export type Advantages_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: advantages */
export type Advantages_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "advantages" */
export enum Advantages_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "advantages" */
export type Advantages_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "advantages" */
export enum Advantages_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Title = 'title'
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

export type CreateOrderInput = {
  client_address: Scalars['String']['input'];
  client_name: Scalars['String']['input'];
  client_phone: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  items: Scalars['String']['input'];
  payment_type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderOutput = {
  __typename?: 'createOrderOutput';
  checkout_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

export type CustomerLoginPasswordInput = {
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CustomerLoginPasswordOutput = {
  __typename?: 'customerLoginPasswordOutput';
  accessToken: Scalars['String']['output'];
};

export type CustomerRegisterInput = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CustomerRegisterOutput = {
  __typename?: 'customerRegisterOutput';
  accessToken: Scalars['String']['output'];
};

export type CustomerVerifyCodeInput = {
  code: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type CustomerVerifyCodeOutput = {
  __typename?: 'customerVerifyCodeOutput';
  accessToken: Scalars['String']['output'];
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  address?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  password?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  twilioVerificationSid?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  twilioVerificationSid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPhoneKey = 'customers_phone_key',
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  twilioVerificationSid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  twilioVerificationSid?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  address?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  twilioVerificationSid?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  address?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  twilioVerificationSid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  TwilioVerificationSid = 'twilioVerificationSid'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  twilioVerificationSid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  TwilioVerificationSid = 'twilioVerificationSid'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "form_services" */
export type Form_Services = {
  __typename?: 'form_services';
  form_service_name: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
};

/** aggregated selection of "form_services" */
export type Form_Services_Aggregate = {
  __typename?: 'form_services_aggregate';
  aggregate?: Maybe<Form_Services_Aggregate_Fields>;
  nodes: Array<Form_Services>;
};

/** aggregate fields of "form_services" */
export type Form_Services_Aggregate_Fields = {
  __typename?: 'form_services_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Form_Services_Max_Fields>;
  min?: Maybe<Form_Services_Min_Fields>;
};


/** aggregate fields of "form_services" */
export type Form_Services_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Form_Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "form_services". All fields are combined with a logical 'AND'. */
export type Form_Services_Bool_Exp = {
  _and?: InputMaybe<Array<Form_Services_Bool_Exp>>;
  _not?: InputMaybe<Form_Services_Bool_Exp>;
  _or?: InputMaybe<Array<Form_Services_Bool_Exp>>;
  form_service_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "form_services" */
export enum Form_Services_Constraint {
  /** unique or primary key constraint */
  FormServicesPkey = 'form_services_pkey'
}

/** input type for inserting data into table "form_services" */
export type Form_Services_Insert_Input = {
  form_service_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Form_Services_Max_Fields = {
  __typename?: 'form_services_max_fields';
  form_service_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Form_Services_Min_Fields = {
  __typename?: 'form_services_min_fields';
  form_service_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "form_services" */
export type Form_Services_Mutation_Response = {
  __typename?: 'form_services_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Form_Services>;
};

/** on conflict condition type for table "form_services" */
export type Form_Services_On_Conflict = {
  constraint: Form_Services_Constraint;
  update_columns?: Array<Form_Services_Update_Column>;
  where?: InputMaybe<Form_Services_Bool_Exp>;
};

/** Ordering options when selecting data from "form_services". */
export type Form_Services_Order_By = {
  form_service_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: form_services */
export type Form_Services_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "form_services" */
export enum Form_Services_Select_Column {
  /** column name */
  FormServiceName = 'form_service_name',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "form_services" */
export type Form_Services_Set_Input = {
  form_service_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "form_services" */
export enum Form_Services_Update_Column {
  /** column name */
  FormServiceName = 'form_service_name',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "last_week_orders" */
export type Last_Week_Orders = {
  __typename?: 'last_week_orders';
  count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregated selection of "last_week_orders" */
export type Last_Week_Orders_Aggregate = {
  __typename?: 'last_week_orders_aggregate';
  aggregate?: Maybe<Last_Week_Orders_Aggregate_Fields>;
  nodes: Array<Last_Week_Orders>;
};

/** aggregate fields of "last_week_orders" */
export type Last_Week_Orders_Aggregate_Fields = {
  __typename?: 'last_week_orders_aggregate_fields';
  avg?: Maybe<Last_Week_Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Last_Week_Orders_Max_Fields>;
  min?: Maybe<Last_Week_Orders_Min_Fields>;
  stddev?: Maybe<Last_Week_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Last_Week_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Last_Week_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Last_Week_Orders_Sum_Fields>;
  var_pop?: Maybe<Last_Week_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Last_Week_Orders_Var_Samp_Fields>;
  variance?: Maybe<Last_Week_Orders_Variance_Fields>;
};


/** aggregate fields of "last_week_orders" */
export type Last_Week_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Last_Week_Orders_Avg_Fields = {
  __typename?: 'last_week_orders_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "last_week_orders". All fields are combined with a logical 'AND'. */
export type Last_Week_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Last_Week_Orders_Bool_Exp>>;
  _not?: InputMaybe<Last_Week_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Last_Week_Orders_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Last_Week_Orders_Max_Fields = {
  __typename?: 'last_week_orders_max_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Last_Week_Orders_Min_Fields = {
  __typename?: 'last_week_orders_min_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** Ordering options when selecting data from "last_week_orders". */
export type Last_Week_Orders_Order_By = {
  count?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  sum?: InputMaybe<Order_By>;
};

/** select columns of table "last_week_orders" */
export enum Last_Week_Orders_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Date = 'date',
  /** column name */
  Sum = 'sum'
}

/** aggregate stddev on columns */
export type Last_Week_Orders_Stddev_Fields = {
  __typename?: 'last_week_orders_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Last_Week_Orders_Stddev_Pop_Fields = {
  __typename?: 'last_week_orders_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Last_Week_Orders_Stddev_Samp_Fields = {
  __typename?: 'last_week_orders_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate sum on columns */
export type Last_Week_Orders_Sum_Fields = {
  __typename?: 'last_week_orders_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  sum?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_pop on columns */
export type Last_Week_Orders_Var_Pop_Fields = {
  __typename?: 'last_week_orders_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Last_Week_Orders_Var_Samp_Fields = {
  __typename?: 'last_week_orders_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Last_Week_Orders_Variance_Fields = {
  __typename?: 'last_week_orders_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "main_services" */
export type Main_Services = {
  __typename?: 'main_services';
  id: Scalars['uuid']['output'];
  media: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
};

/** aggregated selection of "main_services" */
export type Main_Services_Aggregate = {
  __typename?: 'main_services_aggregate';
  aggregate?: Maybe<Main_Services_Aggregate_Fields>;
  nodes: Array<Main_Services>;
};

/** aggregate fields of "main_services" */
export type Main_Services_Aggregate_Fields = {
  __typename?: 'main_services_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Main_Services_Max_Fields>;
  min?: Maybe<Main_Services_Min_Fields>;
};


/** aggregate fields of "main_services" */
export type Main_Services_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Main_Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "main_services". All fields are combined with a logical 'AND'. */
export type Main_Services_Bool_Exp = {
  _and?: InputMaybe<Array<Main_Services_Bool_Exp>>;
  _not?: InputMaybe<Main_Services_Bool_Exp>;
  _or?: InputMaybe<Array<Main_Services_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  media?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "main_services" */
export enum Main_Services_Constraint {
  /** unique or primary key constraint */
  MainServicesPkey = 'main_services_pkey'
}

/** input type for inserting data into table "main_services" */
export type Main_Services_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Main_Services_Max_Fields = {
  __typename?: 'main_services_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Main_Services_Min_Fields = {
  __typename?: 'main_services_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  media?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "main_services" */
export type Main_Services_Mutation_Response = {
  __typename?: 'main_services_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Main_Services>;
};

/** on conflict condition type for table "main_services" */
export type Main_Services_On_Conflict = {
  constraint: Main_Services_Constraint;
  update_columns?: Array<Main_Services_Update_Column>;
  where?: InputMaybe<Main_Services_Bool_Exp>;
};

/** Ordering options when selecting data from "main_services". */
export type Main_Services_Order_By = {
  id?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** primary key columns input for table: main_services */
export type Main_Services_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "main_services" */
export enum Main_Services_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "main_services" */
export type Main_Services_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "main_services" */
export enum Main_Services_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Media = 'media',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Admin registration */
  adminRegister?: Maybe<AdminRegisterOutput>;
  createOrder?: Maybe<CreateOrderOutput>;
  customerRegister?: Maybe<CustomerRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "advantages" */
  delete_advantages?: Maybe<Advantages_Mutation_Response>;
  /** delete single row from the table: "advantages" */
  delete_advantages_by_pk?: Maybe<Advantages>;
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "form_services" */
  delete_form_services?: Maybe<Form_Services_Mutation_Response>;
  /** delete single row from the table: "form_services" */
  delete_form_services_by_pk?: Maybe<Form_Services>;
  /** delete data from the table: "main_services" */
  delete_main_services?: Maybe<Main_Services_Mutation_Response>;
  /** delete single row from the table: "main_services" */
  delete_main_services_by_pk?: Maybe<Main_Services>;
  /** delete data from the table: "order_status" */
  delete_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** delete single row from the table: "order_status" */
  delete_order_status_by_pk?: Maybe<Order_Status>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "orders_products" */
  delete_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** delete single row from the table: "orders_products" */
  delete_orders_products_by_pk?: Maybe<Orders_Products>;
  /** delete data from the table: "payment_status" */
  delete_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** delete single row from the table: "payment_status" */
  delete_payment_status_by_pk?: Maybe<Payment_Status>;
  /** delete data from the table: "payment_types" */
  delete_payment_types?: Maybe<Payment_Types_Mutation_Response>;
  /** delete single row from the table: "payment_types" */
  delete_payment_types_by_pk?: Maybe<Payment_Types>;
  /** delete data from the table: "personnel" */
  delete_personnel?: Maybe<Personnel_Mutation_Response>;
  /** delete single row from the table: "personnel" */
  delete_personnel_by_pk?: Maybe<Personnel>;
  /** delete data from the table: "personnel_categories" */
  delete_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** delete single row from the table: "personnel_categories" */
  delete_personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** delete data from the table: "price_list" */
  delete_price_list?: Maybe<Price_List_Mutation_Response>;
  /** delete single row from the table: "price_list" */
  delete_price_list_by_pk?: Maybe<Price_List>;
  /** delete data from the table: "price_list_categories" */
  delete_price_list_categories?: Maybe<Price_List_Categories_Mutation_Response>;
  /** delete single row from the table: "price_list_categories" */
  delete_price_list_categories_by_pk?: Maybe<Price_List_Categories>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "products_categories" */
  delete_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** delete single row from the table: "products_categories" */
  delete_products_categories_by_pk?: Maybe<Products_Categories>;
  /** delete data from the table: "service_categories" */
  delete_service_categories?: Maybe<Service_Categories_Mutation_Response>;
  /** delete single row from the table: "service_categories" */
  delete_service_categories_by_pk?: Maybe<Service_Categories>;
  /** delete data from the table: "service_sections" */
  delete_service_sections?: Maybe<Service_Sections_Mutation_Response>;
  /** delete single row from the table: "service_sections" */
  delete_service_sections_by_pk?: Maybe<Service_Sections>;
  /** delete data from the table: "service_subcategories" */
  delete_service_subcategories?: Maybe<Service_Subcategories_Mutation_Response>;
  /** delete single row from the table: "service_subcategories" */
  delete_service_subcategories_by_pk?: Maybe<Service_Subcategories>;
  /** delete data from the table: "services" */
  delete_services?: Maybe<Services_Mutation_Response>;
  /** delete single row from the table: "services" */
  delete_services_by_pk?: Maybe<Services>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "advantages" */
  insert_advantages?: Maybe<Advantages_Mutation_Response>;
  /** insert a single row into the table: "advantages" */
  insert_advantages_one?: Maybe<Advantages>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "form_services" */
  insert_form_services?: Maybe<Form_Services_Mutation_Response>;
  /** insert a single row into the table: "form_services" */
  insert_form_services_one?: Maybe<Form_Services>;
  /** insert data into the table: "main_services" */
  insert_main_services?: Maybe<Main_Services_Mutation_Response>;
  /** insert a single row into the table: "main_services" */
  insert_main_services_one?: Maybe<Main_Services>;
  /** insert data into the table: "order_status" */
  insert_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** insert a single row into the table: "order_status" */
  insert_order_status_one?: Maybe<Order_Status>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "orders_products" */
  insert_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** insert a single row into the table: "orders_products" */
  insert_orders_products_one?: Maybe<Orders_Products>;
  /** insert data into the table: "payment_status" */
  insert_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** insert a single row into the table: "payment_status" */
  insert_payment_status_one?: Maybe<Payment_Status>;
  /** insert data into the table: "payment_types" */
  insert_payment_types?: Maybe<Payment_Types_Mutation_Response>;
  /** insert a single row into the table: "payment_types" */
  insert_payment_types_one?: Maybe<Payment_Types>;
  /** insert data into the table: "personnel" */
  insert_personnel?: Maybe<Personnel_Mutation_Response>;
  /** insert data into the table: "personnel_categories" */
  insert_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** insert a single row into the table: "personnel_categories" */
  insert_personnel_categories_one?: Maybe<Personnel_Categories>;
  /** insert a single row into the table: "personnel" */
  insert_personnel_one?: Maybe<Personnel>;
  /** insert data into the table: "price_list" */
  insert_price_list?: Maybe<Price_List_Mutation_Response>;
  /** insert data into the table: "price_list_categories" */
  insert_price_list_categories?: Maybe<Price_List_Categories_Mutation_Response>;
  /** insert a single row into the table: "price_list_categories" */
  insert_price_list_categories_one?: Maybe<Price_List_Categories>;
  /** insert a single row into the table: "price_list" */
  insert_price_list_one?: Maybe<Price_List>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert data into the table: "products_categories" */
  insert_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** insert a single row into the table: "products_categories" */
  insert_products_categories_one?: Maybe<Products_Categories>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "service_categories" */
  insert_service_categories?: Maybe<Service_Categories_Mutation_Response>;
  /** insert a single row into the table: "service_categories" */
  insert_service_categories_one?: Maybe<Service_Categories>;
  /** insert data into the table: "service_sections" */
  insert_service_sections?: Maybe<Service_Sections_Mutation_Response>;
  /** insert a single row into the table: "service_sections" */
  insert_service_sections_one?: Maybe<Service_Sections>;
  /** insert data into the table: "service_subcategories" */
  insert_service_subcategories?: Maybe<Service_Subcategories_Mutation_Response>;
  /** insert a single row into the table: "service_subcategories" */
  insert_service_subcategories_one?: Maybe<Service_Subcategories>;
  /** insert data into the table: "services" */
  insert_services?: Maybe<Services_Mutation_Response>;
  /** insert a single row into the table: "services" */
  insert_services_one?: Maybe<Services>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update data of the table: "advantages" */
  update_advantages?: Maybe<Advantages_Mutation_Response>;
  /** update single row of the table: "advantages" */
  update_advantages_by_pk?: Maybe<Advantages>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "form_services" */
  update_form_services?: Maybe<Form_Services_Mutation_Response>;
  /** update single row of the table: "form_services" */
  update_form_services_by_pk?: Maybe<Form_Services>;
  /** update data of the table: "main_services" */
  update_main_services?: Maybe<Main_Services_Mutation_Response>;
  /** update single row of the table: "main_services" */
  update_main_services_by_pk?: Maybe<Main_Services>;
  /** update data of the table: "order_status" */
  update_order_status?: Maybe<Order_Status_Mutation_Response>;
  /** update single row of the table: "order_status" */
  update_order_status_by_pk?: Maybe<Order_Status>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "orders_products" */
  update_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** update single row of the table: "orders_products" */
  update_orders_products_by_pk?: Maybe<Orders_Products>;
  /** update data of the table: "payment_status" */
  update_payment_status?: Maybe<Payment_Status_Mutation_Response>;
  /** update single row of the table: "payment_status" */
  update_payment_status_by_pk?: Maybe<Payment_Status>;
  /** update data of the table: "payment_types" */
  update_payment_types?: Maybe<Payment_Types_Mutation_Response>;
  /** update single row of the table: "payment_types" */
  update_payment_types_by_pk?: Maybe<Payment_Types>;
  /** update data of the table: "personnel" */
  update_personnel?: Maybe<Personnel_Mutation_Response>;
  /** update single row of the table: "personnel" */
  update_personnel_by_pk?: Maybe<Personnel>;
  /** update data of the table: "personnel_categories" */
  update_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** update single row of the table: "personnel_categories" */
  update_personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** update data of the table: "price_list" */
  update_price_list?: Maybe<Price_List_Mutation_Response>;
  /** update single row of the table: "price_list" */
  update_price_list_by_pk?: Maybe<Price_List>;
  /** update data of the table: "price_list_categories" */
  update_price_list_categories?: Maybe<Price_List_Categories_Mutation_Response>;
  /** update single row of the table: "price_list_categories" */
  update_price_list_categories_by_pk?: Maybe<Price_List_Categories>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "products_categories" */
  update_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** update single row of the table: "products_categories" */
  update_products_categories_by_pk?: Maybe<Products_Categories>;
  /** update data of the table: "service_categories" */
  update_service_categories?: Maybe<Service_Categories_Mutation_Response>;
  /** update single row of the table: "service_categories" */
  update_service_categories_by_pk?: Maybe<Service_Categories>;
  /** update data of the table: "service_sections" */
  update_service_sections?: Maybe<Service_Sections_Mutation_Response>;
  /** update single row of the table: "service_sections" */
  update_service_sections_by_pk?: Maybe<Service_Sections>;
  /** update data of the table: "service_subcategories" */
  update_service_subcategories?: Maybe<Service_Subcategories_Mutation_Response>;
  /** update single row of the table: "service_subcategories" */
  update_service_subcategories_by_pk?: Maybe<Service_Subcategories>;
  /** update data of the table: "services" */
  update_services?: Maybe<Services_Mutation_Response>;
  /** update single row of the table: "services" */
  update_services_by_pk?: Maybe<Services>;
};


/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootCreateOrderArgs = {
  order: CreateOrderInput;
};


/** mutation root */
export type Mutation_RootCustomerRegisterArgs = {
  customer: CustomerRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AdvantagesArgs = {
  where: Advantages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Advantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Form_ServicesArgs = {
  where: Form_Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Form_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Main_ServicesArgs = {
  where: Main_Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Main_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatusArgs = {
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Orders_ProductsArgs = {
  where: Orders_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_StatusArgs = {
  where: Payment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_TypesArgs = {
  where: Payment_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PersonnelArgs = {
  where: Personnel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Personnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Personnel_CategoriesArgs = {
  where: Personnel_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Personnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Price_ListArgs = {
  where: Price_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Price_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Price_List_CategoriesArgs = {
  where: Price_List_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Price_List_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Products_CategoriesArgs = {
  where: Products_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Service_CategoriesArgs = {
  where: Service_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Service_SectionsArgs = {
  where: Service_Sections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_Sections_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Service_SubcategoriesArgs = {
  where: Service_Subcategories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_Subcategories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ServicesArgs = {
  where: Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AdvantagesArgs = {
  objects: Array<Advantages_Insert_Input>;
  on_conflict?: InputMaybe<Advantages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Advantages_OneArgs = {
  object: Advantages_Insert_Input;
  on_conflict?: InputMaybe<Advantages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_ServicesArgs = {
  objects: Array<Form_Services_Insert_Input>;
  on_conflict?: InputMaybe<Form_Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Form_Services_OneArgs = {
  object: Form_Services_Insert_Input;
  on_conflict?: InputMaybe<Form_Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Main_ServicesArgs = {
  objects: Array<Main_Services_Insert_Input>;
  on_conflict?: InputMaybe<Main_Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Main_Services_OneArgs = {
  object: Main_Services_Insert_Input;
  on_conflict?: InputMaybe<Main_Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatusArgs = {
  objects: Array<Order_Status_Insert_Input>;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_OneArgs = {
  object: Order_Status_Insert_Input;
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_ProductsArgs = {
  objects: Array<Orders_Products_Insert_Input>;
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_Products_OneArgs = {
  object: Orders_Products_Insert_Input;
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_StatusArgs = {
  objects: Array<Payment_Status_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Status_OneArgs = {
  object: Payment_Status_Insert_Input;
  on_conflict?: InputMaybe<Payment_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_TypesArgs = {
  objects: Array<Payment_Types_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Types_OneArgs = {
  object: Payment_Types_Insert_Input;
  on_conflict?: InputMaybe<Payment_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonnelArgs = {
  objects: Array<Personnel_Insert_Input>;
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_CategoriesArgs = {
  objects: Array<Personnel_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_Categories_OneArgs = {
  object: Personnel_Categories_Insert_Input;
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_OneArgs = {
  object: Personnel_Insert_Input;
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_ListArgs = {
  objects: Array<Price_List_Insert_Input>;
  on_conflict?: InputMaybe<Price_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_List_CategoriesArgs = {
  objects: Array<Price_List_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Price_List_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_List_Categories_OneArgs = {
  object: Price_List_Categories_Insert_Input;
  on_conflict?: InputMaybe<Price_List_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Price_List_OneArgs = {
  object: Price_List_Insert_Input;
  on_conflict?: InputMaybe<Price_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_CategoriesArgs = {
  objects: Array<Products_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_Categories_OneArgs = {
  object: Products_Categories_Insert_Input;
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_CategoriesArgs = {
  objects: Array<Service_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Service_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_Categories_OneArgs = {
  object: Service_Categories_Insert_Input;
  on_conflict?: InputMaybe<Service_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_SectionsArgs = {
  objects: Array<Service_Sections_Insert_Input>;
  on_conflict?: InputMaybe<Service_Sections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_Sections_OneArgs = {
  object: Service_Sections_Insert_Input;
  on_conflict?: InputMaybe<Service_Sections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_SubcategoriesArgs = {
  objects: Array<Service_Subcategories_Insert_Input>;
  on_conflict?: InputMaybe<Service_Subcategories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_Subcategories_OneArgs = {
  object: Service_Subcategories_Insert_Input;
  on_conflict?: InputMaybe<Service_Subcategories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ServicesArgs = {
  objects: Array<Services_Insert_Input>;
  on_conflict?: InputMaybe<Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Services_OneArgs = {
  object: Services_Insert_Input;
  on_conflict?: InputMaybe<Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AdvantagesArgs = {
  _set?: InputMaybe<Advantages_Set_Input>;
  where: Advantages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Advantages_By_PkArgs = {
  _set?: InputMaybe<Advantages_Set_Input>;
  pk_columns: Advantages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Form_ServicesArgs = {
  _set?: InputMaybe<Form_Services_Set_Input>;
  where: Form_Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Form_Services_By_PkArgs = {
  _set?: InputMaybe<Form_Services_Set_Input>;
  pk_columns: Form_Services_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Main_ServicesArgs = {
  _set?: InputMaybe<Main_Services_Set_Input>;
  where: Main_Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Main_Services_By_PkArgs = {
  _set?: InputMaybe<Main_Services_Set_Input>;
  pk_columns: Main_Services_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatusArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  where: Order_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_By_PkArgs = {
  _set?: InputMaybe<Order_Status_Set_Input>;
  pk_columns: Order_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ProductsArgs = {
  _inc?: InputMaybe<Orders_Products_Inc_Input>;
  _set?: InputMaybe<Orders_Products_Set_Input>;
  where: Orders_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Products_By_PkArgs = {
  _inc?: InputMaybe<Orders_Products_Inc_Input>;
  _set?: InputMaybe<Orders_Products_Set_Input>;
  pk_columns: Orders_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_StatusArgs = {
  _set?: InputMaybe<Payment_Status_Set_Input>;
  where: Payment_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Status_By_PkArgs = {
  _set?: InputMaybe<Payment_Status_Set_Input>;
  pk_columns: Payment_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_TypesArgs = {
  _set?: InputMaybe<Payment_Types_Set_Input>;
  where: Payment_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Types_By_PkArgs = {
  _set?: InputMaybe<Payment_Types_Set_Input>;
  pk_columns: Payment_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PersonnelArgs = {
  _set?: InputMaybe<Personnel_Set_Input>;
  where: Personnel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_By_PkArgs = {
  _set?: InputMaybe<Personnel_Set_Input>;
  pk_columns: Personnel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_CategoriesArgs = {
  _set?: InputMaybe<Personnel_Categories_Set_Input>;
  where: Personnel_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_Categories_By_PkArgs = {
  _set?: InputMaybe<Personnel_Categories_Set_Input>;
  pk_columns: Personnel_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Price_ListArgs = {
  _inc?: InputMaybe<Price_List_Inc_Input>;
  _set?: InputMaybe<Price_List_Set_Input>;
  where: Price_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Price_List_By_PkArgs = {
  _inc?: InputMaybe<Price_List_Inc_Input>;
  _set?: InputMaybe<Price_List_Set_Input>;
  pk_columns: Price_List_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Price_List_CategoriesArgs = {
  _set?: InputMaybe<Price_List_Categories_Set_Input>;
  where: Price_List_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Price_List_Categories_By_PkArgs = {
  _set?: InputMaybe<Price_List_Categories_Set_Input>;
  pk_columns: Price_List_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_CategoriesArgs = {
  _set?: InputMaybe<Products_Categories_Set_Input>;
  where: Products_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_Categories_By_PkArgs = {
  _set?: InputMaybe<Products_Categories_Set_Input>;
  pk_columns: Products_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_CategoriesArgs = {
  _set?: InputMaybe<Service_Categories_Set_Input>;
  where: Service_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Categories_By_PkArgs = {
  _set?: InputMaybe<Service_Categories_Set_Input>;
  pk_columns: Service_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_SectionsArgs = {
  _set?: InputMaybe<Service_Sections_Set_Input>;
  where: Service_Sections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Sections_By_PkArgs = {
  _set?: InputMaybe<Service_Sections_Set_Input>;
  pk_columns: Service_Sections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_SubcategoriesArgs = {
  _set?: InputMaybe<Service_Subcategories_Set_Input>;
  where: Service_Subcategories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Subcategories_By_PkArgs = {
  _set?: InputMaybe<Service_Subcategories_Set_Input>;
  pk_columns: Service_Subcategories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ServicesArgs = {
  _set?: InputMaybe<Services_Set_Input>;
  where: Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Services_By_PkArgs = {
  _set?: InputMaybe<Services_Set_Input>;
  pk_columns: Services_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_status" */
export type Order_Status = {
  __typename?: 'order_status';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
};


/** columns and relationships of "order_status" */
export type Order_StatusOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "order_status" */
export type Order_StatusOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "order_status" */
export type Order_Status_Aggregate = {
  __typename?: 'order_status_aggregate';
  aggregate?: Maybe<Order_Status_Aggregate_Fields>;
  nodes: Array<Order_Status>;
};

/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_Fields = {
  __typename?: 'order_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Status_Max_Fields>;
  min?: Maybe<Order_Status_Min_Fields>;
};


/** aggregate fields of "order_status" */
export type Order_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "order_status". All fields are combined with a logical 'AND'. */
export type Order_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  _not?: InputMaybe<Order_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
};

/** unique or primary key constraints on table "order_status" */
export enum Order_Status_Constraint {
  /** unique or primary key constraint */
  OrderStatusPkey = 'order_status_pkey'
}

export enum Order_Status_Enum {
  /** Відмінений */
  Canceled = 'CANCELED',
  /** Виданий клієнту */
  Delivered = 'DELIVERED',
  /** Відправлений */
  Done = 'DONE',
  /** Готується до відправки */
  InProgress = 'IN_PROGRESS',
  /** Новий */
  New = 'NEW'
}

/** Boolean expression to compare columns of type "order_status_enum". All fields are combined with logical 'AND'. */
export type Order_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_Status_Enum>;
  _in?: InputMaybe<Array<Order_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Order_Status_Enum>;
  _nin?: InputMaybe<Array<Order_Status_Enum>>;
};

/** input type for inserting data into table "order_status" */
export type Order_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Order_Status_Max_Fields = {
  __typename?: 'order_status_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Order_Status_Min_Fields = {
  __typename?: 'order_status_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "order_status" */
export type Order_Status_Mutation_Response = {
  __typename?: 'order_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status>;
};

/** input type for inserting object relation for remote table "order_status" */
export type Order_Status_Obj_Rel_Insert_Input = {
  data: Order_Status_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Order_Status_On_Conflict>;
};

/** on conflict condition type for table "order_status" */
export type Order_Status_On_Conflict = {
  constraint: Order_Status_Constraint;
  update_columns?: Array<Order_Status_Update_Column>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status". */
export type Order_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: order_status */
export type Order_Status_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "order_status" */
export enum Order_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "order_status" */
export type Order_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "order_status" */
export enum Order_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  /** An object relationship */
  Customer?: Maybe<Customers>;
  client_address: Scalars['String']['output'];
  client_name: Scalars['String']['output'];
  client_phone: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  order_items: Array<Orders_Products>;
  /** An aggregate relationship */
  order_items_aggregate: Orders_Products_Aggregate;
  /** An object relationship */
  order_status?: Maybe<Order_Status>;
  /** An object relationship */
  paymentStatusByPaymentStatus?: Maybe<Payment_Status>;
  /** An object relationship */
  paymentTypeByPaymentType: Payment_Types;
  payment_id?: Maybe<Scalars['Int']['output']>;
  payment_status?: Maybe<Payment_Status_Enum>;
  payment_type: Payment_Types_Enum;
  status?: Maybe<Order_Status_Enum>;
  /** A computed field, executes function "sum_by_order" */
  sum?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  Customer?: InputMaybe<Customers_Bool_Exp>;
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  client_address?: InputMaybe<String_Comparison_Exp>;
  client_name?: InputMaybe<String_Comparison_Exp>;
  client_phone?: InputMaybe<String_Comparison_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_items?: InputMaybe<Orders_Products_Bool_Exp>;
  order_status?: InputMaybe<Order_Status_Bool_Exp>;
  paymentStatusByPaymentStatus?: InputMaybe<Payment_Status_Bool_Exp>;
  paymentTypeByPaymentType?: InputMaybe<Payment_Types_Bool_Exp>;
  payment_id?: InputMaybe<Int_Comparison_Exp>;
  payment_status?: InputMaybe<Payment_Status_Enum_Comparison_Exp>;
  payment_type?: InputMaybe<Payment_Types_Enum_Comparison_Exp>;
  status?: InputMaybe<Order_Status_Enum_Comparison_Exp>;
  sum?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  payment_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  Customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  client_address?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_items?: InputMaybe<Orders_Products_Arr_Rel_Insert_Input>;
  order_status?: InputMaybe<Order_Status_Obj_Rel_Insert_Input>;
  paymentStatusByPaymentStatus?: InputMaybe<Payment_Status_Obj_Rel_Insert_Input>;
  paymentTypeByPaymentType?: InputMaybe<Payment_Types_Obj_Rel_Insert_Input>;
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<Payment_Status_Enum>;
  payment_type?: InputMaybe<Payment_Types_Enum>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  client_address?: Maybe<Scalars['String']['output']>;
  client_name?: Maybe<Scalars['String']['output']>;
  client_phone?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  client_address?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  client_address?: Maybe<Scalars['String']['output']>;
  client_name?: Maybe<Scalars['String']['output']>;
  client_phone?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  client_address?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  Customer?: InputMaybe<Customers_Order_By>;
  client_address?: InputMaybe<Order_By>;
  client_name?: InputMaybe<Order_By>;
  client_phone?: InputMaybe<Order_By>;
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_items_aggregate?: InputMaybe<Orders_Products_Aggregate_Order_By>;
  order_status?: InputMaybe<Order_Status_Order_By>;
  paymentStatusByPaymentStatus?: InputMaybe<Payment_Status_Order_By>;
  paymentTypeByPaymentType?: InputMaybe<Payment_Types_Order_By>;
  payment_id?: InputMaybe<Order_By>;
  payment_status?: InputMaybe<Order_By>;
  payment_type?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "orders_products" */
export type Orders_Products = {
  __typename?: 'orders_products';
  amount: Scalars['numeric']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  item?: Maybe<Products>;
  /** An object relationship */
  order?: Maybe<Orders>;
  order_id: Scalars['uuid']['output'];
  products_id: Scalars['uuid']['output'];
};

/** aggregated selection of "orders_products" */
export type Orders_Products_Aggregate = {
  __typename?: 'orders_products_aggregate';
  aggregate?: Maybe<Orders_Products_Aggregate_Fields>;
  nodes: Array<Orders_Products>;
};

/** aggregate fields of "orders_products" */
export type Orders_Products_Aggregate_Fields = {
  __typename?: 'orders_products_aggregate_fields';
  avg?: Maybe<Orders_Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Products_Max_Fields>;
  min?: Maybe<Orders_Products_Min_Fields>;
  stddev?: Maybe<Orders_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Products_Sum_Fields>;
  var_pop?: Maybe<Orders_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Products_Var_Samp_Fields>;
  variance?: Maybe<Orders_Products_Variance_Fields>;
};


/** aggregate fields of "orders_products" */
export type Orders_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders_products" */
export type Orders_Products_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Products_Max_Order_By>;
  min?: InputMaybe<Orders_Products_Min_Order_By>;
  stddev?: InputMaybe<Orders_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Products_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders_products" */
export type Orders_Products_Arr_Rel_Insert_Input = {
  data: Array<Orders_Products_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Products_Avg_Fields = {
  __typename?: 'orders_products_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders_products" */
export type Orders_Products_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders_products". All fields are combined with a logical 'AND'. */
export type Orders_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Products_Bool_Exp>>;
  _not?: InputMaybe<Orders_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Products_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  item?: InputMaybe<Products_Bool_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
  products_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders_products" */
export enum Orders_Products_Constraint {
  /** unique or primary key constraint */
  OrdersProductsPkey = 'orders_products_pkey'
}

/** input type for incrementing numeric columns in table "orders_products" */
export type Orders_Products_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "orders_products" */
export type Orders_Products_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  item?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  products_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Orders_Products_Max_Fields = {
  __typename?: 'orders_products_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  products_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "orders_products" */
export type Orders_Products_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Products_Min_Fields = {
  __typename?: 'orders_products_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  products_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "orders_products" */
export type Orders_Products_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders_products" */
export type Orders_Products_Mutation_Response = {
  __typename?: 'orders_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders_Products>;
};

/** on conflict condition type for table "orders_products" */
export type Orders_Products_On_Conflict = {
  constraint: Orders_Products_Constraint;
  update_columns?: Array<Orders_Products_Update_Column>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "orders_products". */
export type Orders_Products_Order_By = {
  amount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  item?: InputMaybe<Products_Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  products_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders_products */
export type Orders_Products_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orders_products" */
export enum Orders_Products_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductsId = 'products_id'
}

/** input type for updating data in table "orders_products" */
export type Orders_Products_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  products_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Products_Stddev_Fields = {
  __typename?: 'orders_products_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders_products" */
export type Orders_Products_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Products_Stddev_Pop_Fields = {
  __typename?: 'orders_products_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders_products" */
export type Orders_Products_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Products_Stddev_Samp_Fields = {
  __typename?: 'orders_products_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders_products" */
export type Orders_Products_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Products_Sum_Fields = {
  __typename?: 'orders_products_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "orders_products" */
export type Orders_Products_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** update columns of table "orders_products" */
export enum Orders_Products_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductsId = 'products_id'
}

/** aggregate var_pop on columns */
export type Orders_Products_Var_Pop_Fields = {
  __typename?: 'orders_products_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders_products" */
export type Orders_Products_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Products_Var_Samp_Fields = {
  __typename?: 'orders_products_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders_products" */
export type Orders_Products_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Products_Variance_Fields = {
  __typename?: 'orders_products_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders_products" */
export type Orders_Products_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  ClientAddress = 'client_address',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  client_address?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<Payment_Status_Enum>;
  payment_type?: InputMaybe<Payment_Types_Enum>;
  status?: InputMaybe<Order_Status_Enum>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  payment_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  ClientAddress = 'client_address',
  /** column name */
  ClientName = 'client_name',
  /** column name */
  ClientPhone = 'client_phone',
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PaymentStatus = 'payment_status',
  /** column name */
  PaymentType = 'payment_type',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  payment_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  payment_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "payment_status" */
export type Payment_Status = {
  __typename?: 'payment_status';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
};


/** columns and relationships of "payment_status" */
export type Payment_StatusOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "payment_status" */
export type Payment_StatusOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "payment_status" */
export type Payment_Status_Aggregate = {
  __typename?: 'payment_status_aggregate';
  aggregate?: Maybe<Payment_Status_Aggregate_Fields>;
  nodes: Array<Payment_Status>;
};

/** aggregate fields of "payment_status" */
export type Payment_Status_Aggregate_Fields = {
  __typename?: 'payment_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Payment_Status_Max_Fields>;
  min?: Maybe<Payment_Status_Min_Fields>;
};


/** aggregate fields of "payment_status" */
export type Payment_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "payment_status". All fields are combined with a logical 'AND'. */
export type Payment_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Status_Bool_Exp>>;
  _not?: InputMaybe<Payment_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
};

/** unique or primary key constraints on table "payment_status" */
export enum Payment_Status_Constraint {
  /** unique or primary key constraint */
  PaymentStatusPkey = 'payment_status_pkey'
}

export enum Payment_Status_Enum {
  /** Оплату відмінено */
  Failed = 'FAILED',
  /** Очікуємо оплати */
  Processing = 'PROCESSING',
  /** Оплачено */
  Succeeded = 'SUCCEEDED'
}

/** Boolean expression to compare columns of type "payment_status_enum". All fields are combined with logical 'AND'. */
export type Payment_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Payment_Status_Enum>;
  _in?: InputMaybe<Array<Payment_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Payment_Status_Enum>;
  _nin?: InputMaybe<Array<Payment_Status_Enum>>;
};

/** input type for inserting data into table "payment_status" */
export type Payment_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Payment_Status_Max_Fields = {
  __typename?: 'payment_status_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Payment_Status_Min_Fields = {
  __typename?: 'payment_status_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "payment_status" */
export type Payment_Status_Mutation_Response = {
  __typename?: 'payment_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Status>;
};

/** input type for inserting object relation for remote table "payment_status" */
export type Payment_Status_Obj_Rel_Insert_Input = {
  data: Payment_Status_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Payment_Status_On_Conflict>;
};

/** on conflict condition type for table "payment_status" */
export type Payment_Status_On_Conflict = {
  constraint: Payment_Status_Constraint;
  update_columns?: Array<Payment_Status_Update_Column>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_status". */
export type Payment_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: payment_status */
export type Payment_Status_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "payment_status" */
export enum Payment_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "payment_status" */
export type Payment_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "payment_status" */
export enum Payment_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** columns and relationships of "payment_types" */
export type Payment_Types = {
  __typename?: 'payment_types';
  id: Scalars['String']['output'];
  label: Scalars['String']['output'];
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
};


/** columns and relationships of "payment_types" */
export type Payment_TypesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "payment_types" */
export type Payment_TypesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "payment_types" */
export type Payment_Types_Aggregate = {
  __typename?: 'payment_types_aggregate';
  aggregate?: Maybe<Payment_Types_Aggregate_Fields>;
  nodes: Array<Payment_Types>;
};

/** aggregate fields of "payment_types" */
export type Payment_Types_Aggregate_Fields = {
  __typename?: 'payment_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Payment_Types_Max_Fields>;
  min?: Maybe<Payment_Types_Min_Fields>;
};


/** aggregate fields of "payment_types" */
export type Payment_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "payment_types". All fields are combined with a logical 'AND'. */
export type Payment_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Types_Bool_Exp>>;
  _not?: InputMaybe<Payment_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Types_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
};

/** unique or primary key constraints on table "payment_types" */
export enum Payment_Types_Constraint {
  /** unique or primary key constraint */
  PaymentTypePkey = 'payment_type_pkey'
}

export enum Payment_Types_Enum {
  /** Картка */
  Card = 'CARD',
  /** Готівка */
  Cash = 'CASH',
  /** Онлайн */
  Online = 'Online'
}

/** Boolean expression to compare columns of type "payment_types_enum". All fields are combined with logical 'AND'. */
export type Payment_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Payment_Types_Enum>;
  _in?: InputMaybe<Array<Payment_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Payment_Types_Enum>;
  _nin?: InputMaybe<Array<Payment_Types_Enum>>;
};

/** input type for inserting data into table "payment_types" */
export type Payment_Types_Insert_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Payment_Types_Max_Fields = {
  __typename?: 'payment_types_max_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Payment_Types_Min_Fields = {
  __typename?: 'payment_types_min_fields';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "payment_types" */
export type Payment_Types_Mutation_Response = {
  __typename?: 'payment_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Types>;
};

/** input type for inserting object relation for remote table "payment_types" */
export type Payment_Types_Obj_Rel_Insert_Input = {
  data: Payment_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Payment_Types_On_Conflict>;
};

/** on conflict condition type for table "payment_types" */
export type Payment_Types_On_Conflict = {
  constraint: Payment_Types_Constraint;
  update_columns?: Array<Payment_Types_Update_Column>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_types". */
export type Payment_Types_Order_By = {
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: payment_types */
export type Payment_Types_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "payment_types" */
export enum Payment_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** input type for updating data in table "payment_types" */
export type Payment_Types_Set_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "payment_types" */
export enum Payment_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label'
}

/** columns and relationships of "personnel" */
export type Personnel = {
  __typename?: 'personnel';
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  personnel_category?: Maybe<Personnel_Categories>;
  personnel_category_id: Scalars['uuid']['output'];
  specialty?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "personnel" */
export type Personnel_Aggregate = {
  __typename?: 'personnel_aggregate';
  aggregate?: Maybe<Personnel_Aggregate_Fields>;
  nodes: Array<Personnel>;
};

/** aggregate fields of "personnel" */
export type Personnel_Aggregate_Fields = {
  __typename?: 'personnel_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Personnel_Max_Fields>;
  min?: Maybe<Personnel_Min_Fields>;
};


/** aggregate fields of "personnel" */
export type Personnel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Personnel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "personnel" */
export type Personnel_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Personnel_Max_Order_By>;
  min?: InputMaybe<Personnel_Min_Order_By>;
};

/** input type for inserting array relation for remote table "personnel" */
export type Personnel_Arr_Rel_Insert_Input = {
  data: Array<Personnel_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};

/** Boolean expression to filter rows from the table "personnel". All fields are combined with a logical 'AND'. */
export type Personnel_Bool_Exp = {
  _and?: InputMaybe<Array<Personnel_Bool_Exp>>;
  _not?: InputMaybe<Personnel_Bool_Exp>;
  _or?: InputMaybe<Array<Personnel_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  personnel_category?: InputMaybe<Personnel_Categories_Bool_Exp>;
  personnel_category_id?: InputMaybe<Uuid_Comparison_Exp>;
  specialty?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "personnel_categories" */
export type Personnel_Categories = {
  __typename?: 'personnel_categories';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  personnel_items: Array<Personnel>;
  /** An aggregate relationship */
  personnel_items_aggregate: Personnel_Aggregate;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "personnel_categories" */
export type Personnel_CategoriesPersonnel_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


/** columns and relationships of "personnel_categories" */
export type Personnel_CategoriesPersonnel_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};

/** aggregated selection of "personnel_categories" */
export type Personnel_Categories_Aggregate = {
  __typename?: 'personnel_categories_aggregate';
  aggregate?: Maybe<Personnel_Categories_Aggregate_Fields>;
  nodes: Array<Personnel_Categories>;
};

/** aggregate fields of "personnel_categories" */
export type Personnel_Categories_Aggregate_Fields = {
  __typename?: 'personnel_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Personnel_Categories_Max_Fields>;
  min?: Maybe<Personnel_Categories_Min_Fields>;
};


/** aggregate fields of "personnel_categories" */
export type Personnel_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "personnel_categories". All fields are combined with a logical 'AND'. */
export type Personnel_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Personnel_Categories_Bool_Exp>>;
  _not?: InputMaybe<Personnel_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Personnel_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  personnel_items?: InputMaybe<Personnel_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "personnel_categories" */
export enum Personnel_Categories_Constraint {
  /** unique or primary key constraint */
  PersonnelCategoriesPkey = 'personnel_categories_pkey'
}

/** input type for inserting data into table "personnel_categories" */
export type Personnel_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  personnel_items?: InputMaybe<Personnel_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Personnel_Categories_Max_Fields = {
  __typename?: 'personnel_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Personnel_Categories_Min_Fields = {
  __typename?: 'personnel_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "personnel_categories" */
export type Personnel_Categories_Mutation_Response = {
  __typename?: 'personnel_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Personnel_Categories>;
};

/** input type for inserting object relation for remote table "personnel_categories" */
export type Personnel_Categories_Obj_Rel_Insert_Input = {
  data: Personnel_Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};

/** on conflict condition type for table "personnel_categories" */
export type Personnel_Categories_On_Conflict = {
  constraint: Personnel_Categories_Constraint;
  update_columns?: Array<Personnel_Categories_Update_Column>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "personnel_categories". */
export type Personnel_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  personnel_items_aggregate?: InputMaybe<Personnel_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: personnel_categories */
export type Personnel_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "personnel_categories" */
export enum Personnel_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "personnel_categories" */
export type Personnel_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "personnel_categories" */
export enum Personnel_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** unique or primary key constraints on table "personnel" */
export enum Personnel_Constraint {
  /** unique or primary key constraint */
  PersonnelPkey = 'personnel_pkey'
}

/** input type for inserting data into table "personnel" */
export type Personnel_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personnel_category?: InputMaybe<Personnel_Categories_Obj_Rel_Insert_Input>;
  personnel_category_id?: InputMaybe<Scalars['uuid']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Personnel_Max_Fields = {
  __typename?: 'personnel_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personnel_category_id?: Maybe<Scalars['uuid']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "personnel" */
export type Personnel_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Personnel_Min_Fields = {
  __typename?: 'personnel_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personnel_category_id?: Maybe<Scalars['uuid']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "personnel" */
export type Personnel_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "personnel" */
export type Personnel_Mutation_Response = {
  __typename?: 'personnel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Personnel>;
};

/** on conflict condition type for table "personnel" */
export type Personnel_On_Conflict = {
  constraint: Personnel_Constraint;
  update_columns?: Array<Personnel_Update_Column>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};

/** Ordering options when selecting data from "personnel". */
export type Personnel_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category?: InputMaybe<Personnel_Categories_Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
};

/** primary key columns input for table: personnel */
export type Personnel_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "personnel" */
export enum Personnel_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  PersonnelCategoryId = 'personnel_category_id',
  /** column name */
  Specialty = 'specialty'
}

/** input type for updating data in table "personnel" */
export type Personnel_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personnel_category_id?: InputMaybe<Scalars['uuid']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "personnel" */
export enum Personnel_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  PersonnelCategoryId = 'personnel_category_id',
  /** column name */
  Specialty = 'specialty'
}

/** columns and relationships of "price_list" */
export type Price_List = {
  __typename?: 'price_list';
  id: Scalars['uuid']['output'];
  price: Scalars['numeric']['output'];
  /** An object relationship */
  price_list_category?: Maybe<Price_List_Categories>;
  price_list_category_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "price_list" */
export type Price_List_Aggregate = {
  __typename?: 'price_list_aggregate';
  aggregate?: Maybe<Price_List_Aggregate_Fields>;
  nodes: Array<Price_List>;
};

/** aggregate fields of "price_list" */
export type Price_List_Aggregate_Fields = {
  __typename?: 'price_list_aggregate_fields';
  avg?: Maybe<Price_List_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Price_List_Max_Fields>;
  min?: Maybe<Price_List_Min_Fields>;
  stddev?: Maybe<Price_List_Stddev_Fields>;
  stddev_pop?: Maybe<Price_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Price_List_Stddev_Samp_Fields>;
  sum?: Maybe<Price_List_Sum_Fields>;
  var_pop?: Maybe<Price_List_Var_Pop_Fields>;
  var_samp?: Maybe<Price_List_Var_Samp_Fields>;
  variance?: Maybe<Price_List_Variance_Fields>;
};


/** aggregate fields of "price_list" */
export type Price_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Price_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "price_list" */
export type Price_List_Aggregate_Order_By = {
  avg?: InputMaybe<Price_List_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Price_List_Max_Order_By>;
  min?: InputMaybe<Price_List_Min_Order_By>;
  stddev?: InputMaybe<Price_List_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Price_List_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Price_List_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Price_List_Sum_Order_By>;
  var_pop?: InputMaybe<Price_List_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Price_List_Var_Samp_Order_By>;
  variance?: InputMaybe<Price_List_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "price_list" */
export type Price_List_Arr_Rel_Insert_Input = {
  data: Array<Price_List_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Price_List_On_Conflict>;
};

/** aggregate avg on columns */
export type Price_List_Avg_Fields = {
  __typename?: 'price_list_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "price_list" */
export type Price_List_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "price_list". All fields are combined with a logical 'AND'. */
export type Price_List_Bool_Exp = {
  _and?: InputMaybe<Array<Price_List_Bool_Exp>>;
  _not?: InputMaybe<Price_List_Bool_Exp>;
  _or?: InputMaybe<Array<Price_List_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  price_list_category?: InputMaybe<Price_List_Categories_Bool_Exp>;
  price_list_category_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "price_list_categories" */
export type Price_List_Categories = {
  __typename?: 'price_list_categories';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  price_list_items: Array<Price_List>;
  /** An aggregate relationship */
  price_list_items_aggregate: Price_List_Aggregate;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "price_list_categories" */
export type Price_List_CategoriesPrice_List_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


/** columns and relationships of "price_list_categories" */
export type Price_List_CategoriesPrice_List_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};

/** aggregated selection of "price_list_categories" */
export type Price_List_Categories_Aggregate = {
  __typename?: 'price_list_categories_aggregate';
  aggregate?: Maybe<Price_List_Categories_Aggregate_Fields>;
  nodes: Array<Price_List_Categories>;
};

/** aggregate fields of "price_list_categories" */
export type Price_List_Categories_Aggregate_Fields = {
  __typename?: 'price_list_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Price_List_Categories_Max_Fields>;
  min?: Maybe<Price_List_Categories_Min_Fields>;
};


/** aggregate fields of "price_list_categories" */
export type Price_List_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "price_list_categories". All fields are combined with a logical 'AND'. */
export type Price_List_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Price_List_Categories_Bool_Exp>>;
  _not?: InputMaybe<Price_List_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Price_List_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price_list_items?: InputMaybe<Price_List_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "price_list_categories" */
export enum Price_List_Categories_Constraint {
  /** unique or primary key constraint */
  PriceListPkey = 'price_list_pkey'
}

/** input type for inserting data into table "price_list_categories" */
export type Price_List_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  price_list_items?: InputMaybe<Price_List_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Price_List_Categories_Max_Fields = {
  __typename?: 'price_list_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Price_List_Categories_Min_Fields = {
  __typename?: 'price_list_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "price_list_categories" */
export type Price_List_Categories_Mutation_Response = {
  __typename?: 'price_list_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Price_List_Categories>;
};

/** input type for inserting object relation for remote table "price_list_categories" */
export type Price_List_Categories_Obj_Rel_Insert_Input = {
  data: Price_List_Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Price_List_Categories_On_Conflict>;
};

/** on conflict condition type for table "price_list_categories" */
export type Price_List_Categories_On_Conflict = {
  constraint: Price_List_Categories_Constraint;
  update_columns?: Array<Price_List_Categories_Update_Column>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "price_list_categories". */
export type Price_List_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  price_list_items_aggregate?: InputMaybe<Price_List_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: price_list_categories */
export type Price_List_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "price_list_categories" */
export enum Price_List_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "price_list_categories" */
export type Price_List_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "price_list_categories" */
export enum Price_List_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** unique or primary key constraints on table "price_list" */
export enum Price_List_Constraint {
  /** unique or primary key constraint */
  PriceListPkey1 = 'price_list_pkey1'
}

/** input type for incrementing numeric columns in table "price_list" */
export type Price_List_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "price_list" */
export type Price_List_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  price_list_category?: InputMaybe<Price_List_Categories_Obj_Rel_Insert_Input>;
  price_list_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Price_List_Max_Fields = {
  __typename?: 'price_list_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  price_list_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "price_list" */
export type Price_List_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  price_list_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Price_List_Min_Fields = {
  __typename?: 'price_list_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  price_list_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "price_list" */
export type Price_List_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  price_list_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "price_list" */
export type Price_List_Mutation_Response = {
  __typename?: 'price_list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Price_List>;
};

/** on conflict condition type for table "price_list" */
export type Price_List_On_Conflict = {
  constraint: Price_List_Constraint;
  update_columns?: Array<Price_List_Update_Column>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};

/** Ordering options when selecting data from "price_list". */
export type Price_List_Order_By = {
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  price_list_category?: InputMaybe<Price_List_Categories_Order_By>;
  price_list_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: price_list */
export type Price_List_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "price_list" */
export enum Price_List_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  PriceListCategoryId = 'price_list_category_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "price_list" */
export type Price_List_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  price_list_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Price_List_Stddev_Fields = {
  __typename?: 'price_list_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "price_list" */
export type Price_List_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Price_List_Stddev_Pop_Fields = {
  __typename?: 'price_list_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "price_list" */
export type Price_List_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Price_List_Stddev_Samp_Fields = {
  __typename?: 'price_list_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "price_list" */
export type Price_List_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Price_List_Sum_Fields = {
  __typename?: 'price_list_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "price_list" */
export type Price_List_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** update columns of table "price_list" */
export enum Price_List_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  PriceListCategoryId = 'price_list_category_id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Price_List_Var_Pop_Fields = {
  __typename?: 'price_list_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "price_list" */
export type Price_List_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Price_List_Var_Samp_Fields = {
  __typename?: 'price_list_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "price_list" */
export type Price_List_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Price_List_Variance_Fields = {
  __typename?: 'price_list_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "price_list" */
export type Price_List_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  price: Scalars['numeric']['output'];
  /** An object relationship */
  products_category?: Maybe<Products_Categories>;
  products_category_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  weight: Scalars['numeric']['output'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  products_category?: InputMaybe<Products_Categories_Bool_Exp>;
  products_category_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** columns and relationships of "products_categories" */
export type Products_Categories = {
  __typename?: 'products_categories';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  products_items: Array<Products>;
  /** An aggregate relationship */
  products_items_aggregate: Products_Aggregate;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "products_categories" */
export type Products_CategoriesProducts_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "products_categories" */
export type Products_CategoriesProducts_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "products_categories" */
export type Products_Categories_Aggregate = {
  __typename?: 'products_categories_aggregate';
  aggregate?: Maybe<Products_Categories_Aggregate_Fields>;
  nodes: Array<Products_Categories>;
};

/** aggregate fields of "products_categories" */
export type Products_Categories_Aggregate_Fields = {
  __typename?: 'products_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Categories_Max_Fields>;
  min?: Maybe<Products_Categories_Min_Fields>;
};


/** aggregate fields of "products_categories" */
export type Products_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "products_categories". All fields are combined with a logical 'AND'. */
export type Products_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Categories_Bool_Exp>>;
  _not?: InputMaybe<Products_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  products_items?: InputMaybe<Products_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products_categories" */
export enum Products_Categories_Constraint {
  /** unique or primary key constraint */
  ProductsCategoryPkey = 'products_category_pkey'
}

/** input type for inserting data into table "products_categories" */
export type Products_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  products_items?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Products_Categories_Max_Fields = {
  __typename?: 'products_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Products_Categories_Min_Fields = {
  __typename?: 'products_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "products_categories" */
export type Products_Categories_Mutation_Response = {
  __typename?: 'products_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products_Categories>;
};

/** input type for inserting object relation for remote table "products_categories" */
export type Products_Categories_Obj_Rel_Insert_Input = {
  data: Products_Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};

/** on conflict condition type for table "products_categories" */
export type Products_Categories_On_Conflict = {
  constraint: Products_Categories_Constraint;
  update_columns?: Array<Products_Categories_Update_Column>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "products_categories". */
export type Products_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  products_items_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products_categories */
export type Products_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "products_categories" */
export enum Products_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "products_categories" */
export type Products_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "products_categories" */
export enum Products_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  products_category?: InputMaybe<Products_Categories_Obj_Rel_Insert_Input>;
  products_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  products_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  products_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category?: InputMaybe<Products_Categories_Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ProductsCategoryId = 'products_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  products_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ProductsCategoryId = 'products_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  adminGetMe?: Maybe<AdminGetMeOutput>;
  /** Admin login */
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "advantages" */
  advantages: Array<Advantages>;
  /** fetch aggregated fields from the table: "advantages" */
  advantages_aggregate: Advantages_Aggregate;
  /** fetch data from the table: "advantages" using primary key columns */
  advantages_by_pk?: Maybe<Advantages>;
  cloudinarySignature?: Maybe<CloudinarySignatureOutput>;
  /** Customer login */
  customerLogin?: Maybe<CustomerLoginOutput>;
  customerLoginPassword?: Maybe<CustomerLoginPasswordOutput>;
  /** Customer verify code */
  customerVerifyCode?: Maybe<CustomerVerifyCodeOutput>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "form_services" */
  form_services: Array<Form_Services>;
  /** fetch aggregated fields from the table: "form_services" */
  form_services_aggregate: Form_Services_Aggregate;
  /** fetch data from the table: "form_services" using primary key columns */
  form_services_by_pk?: Maybe<Form_Services>;
  /** fetch data from the table: "last_week_orders" */
  last_week_orders: Array<Last_Week_Orders>;
  /** fetch aggregated fields from the table: "last_week_orders" */
  last_week_orders_aggregate: Last_Week_Orders_Aggregate;
  /** fetch data from the table: "main_services" */
  main_services: Array<Main_Services>;
  /** fetch aggregated fields from the table: "main_services" */
  main_services_aggregate: Main_Services_Aggregate;
  /** fetch data from the table: "main_services" using primary key columns */
  main_services_by_pk?: Maybe<Main_Services>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_products" */
  orders_products: Array<Orders_Products>;
  /** fetch aggregated fields from the table: "orders_products" */
  orders_products_aggregate: Orders_Products_Aggregate;
  /** fetch data from the table: "orders_products" using primary key columns */
  orders_products_by_pk?: Maybe<Orders_Products>;
  /** fetch data from the table: "payment_status" */
  payment_status: Array<Payment_Status>;
  /** fetch aggregated fields from the table: "payment_status" */
  payment_status_aggregate: Payment_Status_Aggregate;
  /** fetch data from the table: "payment_status" using primary key columns */
  payment_status_by_pk?: Maybe<Payment_Status>;
  /** fetch data from the table: "payment_types" */
  payment_types: Array<Payment_Types>;
  /** fetch aggregated fields from the table: "payment_types" */
  payment_types_aggregate: Payment_Types_Aggregate;
  /** fetch data from the table: "payment_types" using primary key columns */
  payment_types_by_pk?: Maybe<Payment_Types>;
  /** fetch data from the table: "personnel" */
  personnel: Array<Personnel>;
  /** fetch aggregated fields from the table: "personnel" */
  personnel_aggregate: Personnel_Aggregate;
  /** fetch data from the table: "personnel" using primary key columns */
  personnel_by_pk?: Maybe<Personnel>;
  /** fetch data from the table: "personnel_categories" */
  personnel_categories: Array<Personnel_Categories>;
  /** fetch aggregated fields from the table: "personnel_categories" */
  personnel_categories_aggregate: Personnel_Categories_Aggregate;
  /** fetch data from the table: "personnel_categories" using primary key columns */
  personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** fetch data from the table: "price_list" */
  price_list: Array<Price_List>;
  /** fetch aggregated fields from the table: "price_list" */
  price_list_aggregate: Price_List_Aggregate;
  /** fetch data from the table: "price_list" using primary key columns */
  price_list_by_pk?: Maybe<Price_List>;
  /** fetch data from the table: "price_list_categories" */
  price_list_categories: Array<Price_List_Categories>;
  /** fetch aggregated fields from the table: "price_list_categories" */
  price_list_categories_aggregate: Price_List_Categories_Aggregate;
  /** fetch data from the table: "price_list_categories" using primary key columns */
  price_list_categories_by_pk?: Maybe<Price_List_Categories>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products_categories" */
  products_categories: Array<Products_Categories>;
  /** fetch aggregated fields from the table: "products_categories" */
  products_categories_aggregate: Products_Categories_Aggregate;
  /** fetch data from the table: "products_categories" using primary key columns */
  products_categories_by_pk?: Maybe<Products_Categories>;
  /** fetch data from the table: "service_categories" */
  service_categories: Array<Service_Categories>;
  /** An aggregate relationship */
  service_categories_aggregate: Service_Categories_Aggregate;
  /** fetch data from the table: "service_categories" using primary key columns */
  service_categories_by_pk?: Maybe<Service_Categories>;
  /** fetch data from the table: "service_sections" */
  service_sections: Array<Service_Sections>;
  /** fetch aggregated fields from the table: "service_sections" */
  service_sections_aggregate: Service_Sections_Aggregate;
  /** fetch data from the table: "service_sections" using primary key columns */
  service_sections_by_pk?: Maybe<Service_Sections>;
  /** An array relationship */
  service_subcategories: Array<Service_Subcategories>;
  /** An aggregate relationship */
  service_subcategories_aggregate: Service_Subcategories_Aggregate;
  /** fetch data from the table: "service_subcategories" using primary key columns */
  service_subcategories_by_pk?: Maybe<Service_Subcategories>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAdvantagesArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Query_RootAdvantages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Query_RootAdvantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCustomerLoginArgs = {
  input: CustomerLoginInput;
};


export type Query_RootCustomerLoginPasswordArgs = {
  customer: CustomerLoginPasswordInput;
};


export type Query_RootCustomerVerifyCodeArgs = {
  input: CustomerVerifyCodeInput;
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootForm_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Form_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Services_Order_By>>;
  where?: InputMaybe<Form_Services_Bool_Exp>;
};


export type Query_RootForm_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Services_Order_By>>;
  where?: InputMaybe<Form_Services_Bool_Exp>;
};


export type Query_RootForm_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLast_Week_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Last_Week_Orders_Order_By>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Query_RootLast_Week_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Last_Week_Orders_Order_By>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Query_RootMain_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Main_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Main_Services_Order_By>>;
  where?: InputMaybe<Main_Services_Bool_Exp>;
};


export type Query_RootMain_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Main_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Main_Services_Order_By>>;
  where?: InputMaybe<Main_Services_Bool_Exp>;
};


export type Query_RootMain_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Query_RootOrder_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Query_RootOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Query_RootOrders_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPayment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Status_Order_By>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Query_RootPayment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Status_Order_By>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Query_RootPayment_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPayment_TypesArgs = {
  distinct_on?: InputMaybe<Array<Payment_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Types_Order_By>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Query_RootPayment_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Types_Order_By>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Query_RootPayment_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootPersonnelArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Query_RootPersonnel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Query_RootPersonnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPersonnel_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Query_RootPersonnel_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Query_RootPersonnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrice_ListArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Query_RootPrice_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Query_RootPrice_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPrice_List_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Categories_Order_By>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Query_RootPrice_List_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Categories_Order_By>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Query_RootPrice_List_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProducts_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Query_RootProducts_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Query_RootProducts_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootService_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Service_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Categories_Order_By>>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};


export type Query_RootService_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Categories_Order_By>>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};


export type Query_RootService_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootService_SectionsArgs = {
  distinct_on?: InputMaybe<Array<Service_Sections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Sections_Order_By>>;
  where?: InputMaybe<Service_Sections_Bool_Exp>;
};


export type Query_RootService_Sections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Sections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Sections_Order_By>>;
  where?: InputMaybe<Service_Sections_Bool_Exp>;
};


export type Query_RootService_Sections_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootService_SubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Service_Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Subcategories_Order_By>>;
  where?: InputMaybe<Service_Subcategories_Bool_Exp>;
};


export type Query_RootService_Subcategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Subcategories_Order_By>>;
  where?: InputMaybe<Service_Subcategories_Bool_Exp>;
};


export type Query_RootService_Subcategories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootServicesArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Query_RootServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Query_RootServices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "service_categories" */
export type Service_Categories = {
  __typename?: 'service_categories';
  id: Scalars['uuid']['output'];
  preview: Scalars['String']['output'];
  section_id: Scalars['uuid']['output'];
  /** An object relationship */
  service_section: Service_Sections;
  /** An array relationship */
  service_subcategories: Array<Service_Subcategories>;
  /** An aggregate relationship */
  service_subcategories_aggregate: Service_Subcategories_Aggregate;
  title: Scalars['String']['output'];
};


/** columns and relationships of "service_categories" */
export type Service_CategoriesService_SubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Service_Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Subcategories_Order_By>>;
  where?: InputMaybe<Service_Subcategories_Bool_Exp>;
};


/** columns and relationships of "service_categories" */
export type Service_CategoriesService_Subcategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Subcategories_Order_By>>;
  where?: InputMaybe<Service_Subcategories_Bool_Exp>;
};

/** aggregated selection of "service_categories" */
export type Service_Categories_Aggregate = {
  __typename?: 'service_categories_aggregate';
  aggregate?: Maybe<Service_Categories_Aggregate_Fields>;
  nodes: Array<Service_Categories>;
};

/** aggregate fields of "service_categories" */
export type Service_Categories_Aggregate_Fields = {
  __typename?: 'service_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Service_Categories_Max_Fields>;
  min?: Maybe<Service_Categories_Min_Fields>;
};


/** aggregate fields of "service_categories" */
export type Service_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "service_categories" */
export type Service_Categories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Service_Categories_Max_Order_By>;
  min?: InputMaybe<Service_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "service_categories" */
export type Service_Categories_Arr_Rel_Insert_Input = {
  data: Array<Service_Categories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Service_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "service_categories". All fields are combined with a logical 'AND'. */
export type Service_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Categories_Bool_Exp>>;
  _not?: InputMaybe<Service_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  preview?: InputMaybe<String_Comparison_Exp>;
  section_id?: InputMaybe<Uuid_Comparison_Exp>;
  service_section?: InputMaybe<Service_Sections_Bool_Exp>;
  service_subcategories?: InputMaybe<Service_Subcategories_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "service_categories" */
export enum Service_Categories_Constraint {
  /** unique or primary key constraint */
  ServiceCategoriesPkey = 'service_categories_pkey'
}

/** input type for inserting data into table "service_categories" */
export type Service_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  preview?: InputMaybe<Scalars['String']['input']>;
  section_id?: InputMaybe<Scalars['uuid']['input']>;
  service_section?: InputMaybe<Service_Sections_Obj_Rel_Insert_Input>;
  service_subcategories?: InputMaybe<Service_Subcategories_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Service_Categories_Max_Fields = {
  __typename?: 'service_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  preview?: Maybe<Scalars['String']['output']>;
  section_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "service_categories" */
export type Service_Categories_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  preview?: InputMaybe<Order_By>;
  section_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Service_Categories_Min_Fields = {
  __typename?: 'service_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  preview?: Maybe<Scalars['String']['output']>;
  section_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "service_categories" */
export type Service_Categories_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  preview?: InputMaybe<Order_By>;
  section_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "service_categories" */
export type Service_Categories_Mutation_Response = {
  __typename?: 'service_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Service_Categories>;
};

/** input type for inserting object relation for remote table "service_categories" */
export type Service_Categories_Obj_Rel_Insert_Input = {
  data: Service_Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Service_Categories_On_Conflict>;
};

/** on conflict condition type for table "service_categories" */
export type Service_Categories_On_Conflict = {
  constraint: Service_Categories_Constraint;
  update_columns?: Array<Service_Categories_Update_Column>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "service_categories". */
export type Service_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  preview?: InputMaybe<Order_By>;
  section_id?: InputMaybe<Order_By>;
  service_section?: InputMaybe<Service_Sections_Order_By>;
  service_subcategories_aggregate?: InputMaybe<Service_Subcategories_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: service_categories */
export type Service_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "service_categories" */
export enum Service_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Preview = 'preview',
  /** column name */
  SectionId = 'section_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "service_categories" */
export type Service_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  preview?: InputMaybe<Scalars['String']['input']>;
  section_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "service_categories" */
export enum Service_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Preview = 'preview',
  /** column name */
  SectionId = 'section_id',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "service_sections" */
export type Service_Sections = {
  __typename?: 'service_sections';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  relationship_service_categories: Array<Service_Categories>;
  /** An aggregate relationship */
  relationship_service_categories_aggregate: Service_Categories_Aggregate;
  /** fetch data from the table: "service_categories" */
  service_categories: Array<Service_Categories>;
  /** An aggregate relationship */
  service_categories_aggregate: Service_Categories_Aggregate;
  title: Scalars['String']['output'];
};


/** columns and relationships of "service_sections" */
export type Service_SectionsRelationship_Service_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Service_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Categories_Order_By>>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};


/** columns and relationships of "service_sections" */
export type Service_SectionsRelationship_Service_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Categories_Order_By>>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};


/** columns and relationships of "service_sections" */
export type Service_SectionsService_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Service_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Categories_Order_By>>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};


/** columns and relationships of "service_sections" */
export type Service_SectionsService_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Categories_Order_By>>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};

/** aggregated selection of "service_sections" */
export type Service_Sections_Aggregate = {
  __typename?: 'service_sections_aggregate';
  aggregate?: Maybe<Service_Sections_Aggregate_Fields>;
  nodes: Array<Service_Sections>;
};

/** aggregate fields of "service_sections" */
export type Service_Sections_Aggregate_Fields = {
  __typename?: 'service_sections_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Service_Sections_Max_Fields>;
  min?: Maybe<Service_Sections_Min_Fields>;
};


/** aggregate fields of "service_sections" */
export type Service_Sections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Sections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "service_sections". All fields are combined with a logical 'AND'. */
export type Service_Sections_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Sections_Bool_Exp>>;
  _not?: InputMaybe<Service_Sections_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Sections_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  relationship_service_categories?: InputMaybe<Service_Categories_Bool_Exp>;
  service_categories?: InputMaybe<Service_Categories_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "service_sections" */
export enum Service_Sections_Constraint {
  /** unique or primary key constraint */
  ServiceSectionsPkey = 'service_sections_pkey'
}

/** input type for inserting data into table "service_sections" */
export type Service_Sections_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  relationship_service_categories?: InputMaybe<Service_Categories_Arr_Rel_Insert_Input>;
  service_categories?: InputMaybe<Service_Categories_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Service_Sections_Max_Fields = {
  __typename?: 'service_sections_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Service_Sections_Min_Fields = {
  __typename?: 'service_sections_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "service_sections" */
export type Service_Sections_Mutation_Response = {
  __typename?: 'service_sections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Service_Sections>;
};

/** input type for inserting object relation for remote table "service_sections" */
export type Service_Sections_Obj_Rel_Insert_Input = {
  data: Service_Sections_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Service_Sections_On_Conflict>;
};

/** on conflict condition type for table "service_sections" */
export type Service_Sections_On_Conflict = {
  constraint: Service_Sections_Constraint;
  update_columns?: Array<Service_Sections_Update_Column>;
  where?: InputMaybe<Service_Sections_Bool_Exp>;
};

/** Ordering options when selecting data from "service_sections". */
export type Service_Sections_Order_By = {
  id?: InputMaybe<Order_By>;
  relationship_service_categories_aggregate?: InputMaybe<Service_Categories_Aggregate_Order_By>;
  service_categories_aggregate?: InputMaybe<Service_Categories_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: service_sections */
export type Service_Sections_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "service_sections" */
export enum Service_Sections_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "service_sections" */
export type Service_Sections_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "service_sections" */
export enum Service_Sections_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "service_subcategories" */
export type Service_Subcategories = {
  __typename?: 'service_subcategories';
  category_id: Scalars['uuid']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  price: Scalars['String']['output'];
  /** An object relationship */
  service_category: Service_Categories;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

/** aggregated selection of "service_subcategories" */
export type Service_Subcategories_Aggregate = {
  __typename?: 'service_subcategories_aggregate';
  aggregate?: Maybe<Service_Subcategories_Aggregate_Fields>;
  nodes: Array<Service_Subcategories>;
};

/** aggregate fields of "service_subcategories" */
export type Service_Subcategories_Aggregate_Fields = {
  __typename?: 'service_subcategories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Service_Subcategories_Max_Fields>;
  min?: Maybe<Service_Subcategories_Min_Fields>;
};


/** aggregate fields of "service_subcategories" */
export type Service_Subcategories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Subcategories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "service_subcategories" */
export type Service_Subcategories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Service_Subcategories_Max_Order_By>;
  min?: InputMaybe<Service_Subcategories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "service_subcategories" */
export type Service_Subcategories_Arr_Rel_Insert_Input = {
  data: Array<Service_Subcategories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Service_Subcategories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "service_subcategories". All fields are combined with a logical 'AND'. */
export type Service_Subcategories_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Subcategories_Bool_Exp>>;
  _not?: InputMaybe<Service_Subcategories_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Subcategories_Bool_Exp>>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  service_category?: InputMaybe<Service_Categories_Bool_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "service_subcategories" */
export enum Service_Subcategories_Constraint {
  /** unique or primary key constraint */
  ServiceSubcategoriesPkey = 'service_subcategories_pkey'
}

/** input type for inserting data into table "service_subcategories" */
export type Service_Subcategories_Insert_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  service_category?: InputMaybe<Service_Categories_Obj_Rel_Insert_Input>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Service_Subcategories_Max_Fields = {
  __typename?: 'service_subcategories_max_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "service_subcategories" */
export type Service_Subcategories_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Service_Subcategories_Min_Fields = {
  __typename?: 'service_subcategories_min_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "service_subcategories" */
export type Service_Subcategories_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "service_subcategories" */
export type Service_Subcategories_Mutation_Response = {
  __typename?: 'service_subcategories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Service_Subcategories>;
};

/** on conflict condition type for table "service_subcategories" */
export type Service_Subcategories_On_Conflict = {
  constraint: Service_Subcategories_Constraint;
  update_columns?: Array<Service_Subcategories_Update_Column>;
  where?: InputMaybe<Service_Subcategories_Bool_Exp>;
};

/** Ordering options when selecting data from "service_subcategories". */
export type Service_Subcategories_Order_By = {
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  service_category?: InputMaybe<Service_Categories_Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: service_subcategories */
export type Service_Subcategories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "service_subcategories" */
export enum Service_Subcategories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "service_subcategories" */
export type Service_Subcategories_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "service_subcategories" */
export enum Service_Subcategories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title'
}

/** columns and relationships of "services" */
export type Services = {
  __typename?: 'services';
  category?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "services" */
export type Services_Aggregate = {
  __typename?: 'services_aggregate';
  aggregate?: Maybe<Services_Aggregate_Fields>;
  nodes: Array<Services>;
};

/** aggregate fields of "services" */
export type Services_Aggregate_Fields = {
  __typename?: 'services_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Services_Max_Fields>;
  min?: Maybe<Services_Min_Fields>;
};


/** aggregate fields of "services" */
export type Services_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "services". All fields are combined with a logical 'AND'. */
export type Services_Bool_Exp = {
  _and?: InputMaybe<Array<Services_Bool_Exp>>;
  _not?: InputMaybe<Services_Bool_Exp>;
  _or?: InputMaybe<Array<Services_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "services" */
export enum Services_Constraint {
  /** unique or primary key constraint */
  ServicesPkey = 'services_pkey'
}

/** input type for inserting data into table "services" */
export type Services_Insert_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Services_Max_Fields = {
  __typename?: 'services_max_fields';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Services_Min_Fields = {
  __typename?: 'services_min_fields';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "services" */
export type Services_Mutation_Response = {
  __typename?: 'services_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Services>;
};

/** on conflict condition type for table "services" */
export type Services_On_Conflict = {
  constraint: Services_Constraint;
  update_columns?: Array<Services_Update_Column>;
  where?: InputMaybe<Services_Bool_Exp>;
};

/** Ordering options when selecting data from "services". */
export type Services_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: services */
export type Services_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "services" */
export enum Services_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "services" */
export type Services_Set_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "services" */
export enum Services_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "advantages" */
  advantages: Array<Advantages>;
  /** fetch aggregated fields from the table: "advantages" */
  advantages_aggregate: Advantages_Aggregate;
  /** fetch data from the table: "advantages" using primary key columns */
  advantages_by_pk?: Maybe<Advantages>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "form_services" */
  form_services: Array<Form_Services>;
  /** fetch aggregated fields from the table: "form_services" */
  form_services_aggregate: Form_Services_Aggregate;
  /** fetch data from the table: "form_services" using primary key columns */
  form_services_by_pk?: Maybe<Form_Services>;
  /** fetch data from the table: "last_week_orders" */
  last_week_orders: Array<Last_Week_Orders>;
  /** fetch aggregated fields from the table: "last_week_orders" */
  last_week_orders_aggregate: Last_Week_Orders_Aggregate;
  /** fetch data from the table: "main_services" */
  main_services: Array<Main_Services>;
  /** fetch aggregated fields from the table: "main_services" */
  main_services_aggregate: Main_Services_Aggregate;
  /** fetch data from the table: "main_services" using primary key columns */
  main_services_by_pk?: Maybe<Main_Services>;
  /** fetch data from the table: "order_status" */
  order_status: Array<Order_Status>;
  /** fetch aggregated fields from the table: "order_status" */
  order_status_aggregate: Order_Status_Aggregate;
  /** fetch data from the table: "order_status" using primary key columns */
  order_status_by_pk?: Maybe<Order_Status>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "orders_products" */
  orders_products: Array<Orders_Products>;
  /** fetch aggregated fields from the table: "orders_products" */
  orders_products_aggregate: Orders_Products_Aggregate;
  /** fetch data from the table: "orders_products" using primary key columns */
  orders_products_by_pk?: Maybe<Orders_Products>;
  /** fetch data from the table: "payment_status" */
  payment_status: Array<Payment_Status>;
  /** fetch aggregated fields from the table: "payment_status" */
  payment_status_aggregate: Payment_Status_Aggregate;
  /** fetch data from the table: "payment_status" using primary key columns */
  payment_status_by_pk?: Maybe<Payment_Status>;
  /** fetch data from the table: "payment_types" */
  payment_types: Array<Payment_Types>;
  /** fetch aggregated fields from the table: "payment_types" */
  payment_types_aggregate: Payment_Types_Aggregate;
  /** fetch data from the table: "payment_types" using primary key columns */
  payment_types_by_pk?: Maybe<Payment_Types>;
  /** fetch data from the table: "personnel" */
  personnel: Array<Personnel>;
  /** fetch aggregated fields from the table: "personnel" */
  personnel_aggregate: Personnel_Aggregate;
  /** fetch data from the table: "personnel" using primary key columns */
  personnel_by_pk?: Maybe<Personnel>;
  /** fetch data from the table: "personnel_categories" */
  personnel_categories: Array<Personnel_Categories>;
  /** fetch aggregated fields from the table: "personnel_categories" */
  personnel_categories_aggregate: Personnel_Categories_Aggregate;
  /** fetch data from the table: "personnel_categories" using primary key columns */
  personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** fetch data from the table: "price_list" */
  price_list: Array<Price_List>;
  /** fetch aggregated fields from the table: "price_list" */
  price_list_aggregate: Price_List_Aggregate;
  /** fetch data from the table: "price_list" using primary key columns */
  price_list_by_pk?: Maybe<Price_List>;
  /** fetch data from the table: "price_list_categories" */
  price_list_categories: Array<Price_List_Categories>;
  /** fetch aggregated fields from the table: "price_list_categories" */
  price_list_categories_aggregate: Price_List_Categories_Aggregate;
  /** fetch data from the table: "price_list_categories" using primary key columns */
  price_list_categories_by_pk?: Maybe<Price_List_Categories>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products_categories" */
  products_categories: Array<Products_Categories>;
  /** fetch aggregated fields from the table: "products_categories" */
  products_categories_aggregate: Products_Categories_Aggregate;
  /** fetch data from the table: "products_categories" using primary key columns */
  products_categories_by_pk?: Maybe<Products_Categories>;
  /** fetch data from the table: "service_categories" */
  service_categories: Array<Service_Categories>;
  /** An aggregate relationship */
  service_categories_aggregate: Service_Categories_Aggregate;
  /** fetch data from the table: "service_categories" using primary key columns */
  service_categories_by_pk?: Maybe<Service_Categories>;
  /** fetch data from the table: "service_sections" */
  service_sections: Array<Service_Sections>;
  /** fetch aggregated fields from the table: "service_sections" */
  service_sections_aggregate: Service_Sections_Aggregate;
  /** fetch data from the table: "service_sections" using primary key columns */
  service_sections_by_pk?: Maybe<Service_Sections>;
  /** An array relationship */
  service_subcategories: Array<Service_Subcategories>;
  /** An aggregate relationship */
  service_subcategories_aggregate: Service_Subcategories_Aggregate;
  /** fetch data from the table: "service_subcategories" using primary key columns */
  service_subcategories_by_pk?: Maybe<Service_Subcategories>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAdvantagesArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Subscription_RootAdvantages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Subscription_RootAdvantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootForm_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Form_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Services_Order_By>>;
  where?: InputMaybe<Form_Services_Bool_Exp>;
};


export type Subscription_RootForm_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Form_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Form_Services_Order_By>>;
  where?: InputMaybe<Form_Services_Bool_Exp>;
};


export type Subscription_RootForm_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLast_Week_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Last_Week_Orders_Order_By>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Subscription_RootLast_Week_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Last_Week_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Last_Week_Orders_Order_By>>;
  where?: InputMaybe<Last_Week_Orders_Bool_Exp>;
};


export type Subscription_RootMain_ServicesArgs = {
  distinct_on?: InputMaybe<Array<Main_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Main_Services_Order_By>>;
  where?: InputMaybe<Main_Services_Bool_Exp>;
};


export type Subscription_RootMain_Services_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Main_Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Main_Services_Order_By>>;
  where?: InputMaybe<Main_Services_Bool_Exp>;
};


export type Subscription_RootMain_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrder_StatusArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Status_Order_By>>;
  where?: InputMaybe<Order_Status_Bool_Exp>;
};


export type Subscription_RootOrder_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayment_StatusArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Status_Order_By>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Subscription_RootPayment_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Status_Order_By>>;
  where?: InputMaybe<Payment_Status_Bool_Exp>;
};


export type Subscription_RootPayment_Status_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootPayment_TypesArgs = {
  distinct_on?: InputMaybe<Array<Payment_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Types_Order_By>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Subscription_RootPayment_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payment_Types_Order_By>>;
  where?: InputMaybe<Payment_Types_Bool_Exp>;
};


export type Subscription_RootPayment_Types_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootPersonnelArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Subscription_RootPersonnel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Subscription_RootPersonnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersonnel_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Subscription_RootPersonnel_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Subscription_RootPersonnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrice_ListArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Subscription_RootPrice_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Order_By>>;
  where?: InputMaybe<Price_List_Bool_Exp>;
};


export type Subscription_RootPrice_List_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPrice_List_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Categories_Order_By>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Subscription_RootPrice_List_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Price_List_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Price_List_Categories_Order_By>>;
  where?: InputMaybe<Price_List_Categories_Bool_Exp>;
};


export type Subscription_RootPrice_List_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Subscription_RootProducts_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Subscription_RootProducts_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootService_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Service_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Categories_Order_By>>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};


export type Subscription_RootService_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Categories_Order_By>>;
  where?: InputMaybe<Service_Categories_Bool_Exp>;
};


export type Subscription_RootService_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootService_SectionsArgs = {
  distinct_on?: InputMaybe<Array<Service_Sections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Sections_Order_By>>;
  where?: InputMaybe<Service_Sections_Bool_Exp>;
};


export type Subscription_RootService_Sections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Sections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Sections_Order_By>>;
  where?: InputMaybe<Service_Sections_Bool_Exp>;
};


export type Subscription_RootService_Sections_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootService_SubcategoriesArgs = {
  distinct_on?: InputMaybe<Array<Service_Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Subcategories_Order_By>>;
  where?: InputMaybe<Service_Subcategories_Bool_Exp>;
};


export type Subscription_RootService_Subcategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Subcategories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Subcategories_Order_By>>;
  where?: InputMaybe<Service_Subcategories_Bool_Exp>;
};


export type Subscription_RootService_Subcategories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootServicesArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Subscription_RootServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Subscription_RootServices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type AdimGetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AdimGetMeQuery = { __typename?: 'query_root', adminGetMe?: { __typename?: 'AdminGetMeOutput', id: string, username: string } | null };

export type AdminLoginQueryVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type AdminLoginQuery = { __typename?: 'query_root', adminLogin?: { __typename?: 'adminLoginOutput', accessToken: string } | null };

export type CloudinarySignatureQueryVariables = Exact<{ [key: string]: never; }>;


export type CloudinarySignatureQuery = { __typename?: 'query_root', cloudinarySignature?: { __typename?: 'CloudinarySignatureOutput', apiKey: string, cloudName: string, publicId: string, signature: string, timestamp: number } | null };

export type GetLastWeekOrdersStatisticQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastWeekOrdersStatisticQuery = { __typename?: 'query_root', last_week_orders: Array<{ __typename?: 'last_week_orders', count?: any | null, date?: any | null, sum?: any | null }> };


export const AdimGetMeDocument = gql`
    query AdimGetMe {
  adminGetMe {
    id
    username
  }
}
    `;

/**
 * __useAdimGetMeQuery__
 *
 * To run a query within a React component, call `useAdimGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdimGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdimGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdimGetMeQuery(baseOptions?: Apollo.QueryHookOptions<AdimGetMeQuery, AdimGetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdimGetMeQuery, AdimGetMeQueryVariables>(AdimGetMeDocument, options);
      }
export function useAdimGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdimGetMeQuery, AdimGetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdimGetMeQuery, AdimGetMeQueryVariables>(AdimGetMeDocument, options);
        }
export function useAdimGetMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdimGetMeQuery, AdimGetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdimGetMeQuery, AdimGetMeQueryVariables>(AdimGetMeDocument, options);
        }
export type AdimGetMeQueryHookResult = ReturnType<typeof useAdimGetMeQuery>;
export type AdimGetMeLazyQueryHookResult = ReturnType<typeof useAdimGetMeLazyQuery>;
export type AdimGetMeSuspenseQueryHookResult = ReturnType<typeof useAdimGetMeSuspenseQuery>;
export type AdimGetMeQueryResult = Apollo.QueryResult<AdimGetMeQuery, AdimGetMeQueryVariables>;
export const AdminLoginDocument = gql`
    query AdminLogin($password: String!, $username: String!) {
  adminLogin(admin: {password: $password, username: $username}) {
    accessToken
  }
}
    `;

/**
 * __useAdminLoginQuery__
 *
 * To run a query within a React component, call `useAdminLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminLoginQuery({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useAdminLoginQuery(baseOptions: Apollo.QueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
      }
export function useAdminLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
        }
export function useAdminLoginSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
        }
export type AdminLoginQueryHookResult = ReturnType<typeof useAdminLoginQuery>;
export type AdminLoginLazyQueryHookResult = ReturnType<typeof useAdminLoginLazyQuery>;
export type AdminLoginSuspenseQueryHookResult = ReturnType<typeof useAdminLoginSuspenseQuery>;
export type AdminLoginQueryResult = Apollo.QueryResult<AdminLoginQuery, AdminLoginQueryVariables>;
export const CloudinarySignatureDocument = gql`
    query CloudinarySignature {
  cloudinarySignature {
    apiKey
    cloudName
    publicId
    signature
    timestamp
  }
}
    `;

/**
 * __useCloudinarySignatureQuery__
 *
 * To run a query within a React component, call `useCloudinarySignatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useCloudinarySignatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCloudinarySignatureQuery({
 *   variables: {
 *   },
 * });
 */
export function useCloudinarySignatureQuery(baseOptions?: Apollo.QueryHookOptions<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>(CloudinarySignatureDocument, options);
      }
export function useCloudinarySignatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>(CloudinarySignatureDocument, options);
        }
export function useCloudinarySignatureSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>(CloudinarySignatureDocument, options);
        }
export type CloudinarySignatureQueryHookResult = ReturnType<typeof useCloudinarySignatureQuery>;
export type CloudinarySignatureLazyQueryHookResult = ReturnType<typeof useCloudinarySignatureLazyQuery>;
export type CloudinarySignatureSuspenseQueryHookResult = ReturnType<typeof useCloudinarySignatureSuspenseQuery>;
export type CloudinarySignatureQueryResult = Apollo.QueryResult<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>;
export const GetLastWeekOrdersStatisticDocument = gql`
    query GetLastWeekOrdersStatistic {
  last_week_orders {
    count
    date
    sum
  }
}
    `;

/**
 * __useGetLastWeekOrdersStatisticQuery__
 *
 * To run a query within a React component, call `useGetLastWeekOrdersStatisticQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLastWeekOrdersStatisticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLastWeekOrdersStatisticQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLastWeekOrdersStatisticQuery(baseOptions?: Apollo.QueryHookOptions<GetLastWeekOrdersStatisticQuery, GetLastWeekOrdersStatisticQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLastWeekOrdersStatisticQuery, GetLastWeekOrdersStatisticQueryVariables>(GetLastWeekOrdersStatisticDocument, options);
      }
export function useGetLastWeekOrdersStatisticLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLastWeekOrdersStatisticQuery, GetLastWeekOrdersStatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLastWeekOrdersStatisticQuery, GetLastWeekOrdersStatisticQueryVariables>(GetLastWeekOrdersStatisticDocument, options);
        }
export function useGetLastWeekOrdersStatisticSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLastWeekOrdersStatisticQuery, GetLastWeekOrdersStatisticQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLastWeekOrdersStatisticQuery, GetLastWeekOrdersStatisticQueryVariables>(GetLastWeekOrdersStatisticDocument, options);
        }
export type GetLastWeekOrdersStatisticQueryHookResult = ReturnType<typeof useGetLastWeekOrdersStatisticQuery>;
export type GetLastWeekOrdersStatisticLazyQueryHookResult = ReturnType<typeof useGetLastWeekOrdersStatisticLazyQuery>;
export type GetLastWeekOrdersStatisticSuspenseQueryHookResult = ReturnType<typeof useGetLastWeekOrdersStatisticSuspenseQuery>;
export type GetLastWeekOrdersStatisticQueryResult = Apollo.QueryResult<GetLastWeekOrdersStatisticQuery, GetLastWeekOrdersStatisticQueryVariables>;