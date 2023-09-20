export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never;
      };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string | number; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: any; output: any };
    EmailAddress: { input: any; output: any };
    JSON: { input: any; output: any };
    JSONObject: { input: any; output: any };
};

export type Access = {
    __typename?: 'Access';
    accordions?: Maybe<AccordionsAccess>;
    buttons?: Maybe<ButtonsAccess>;
    canAccessAdmin: Scalars['Boolean']['output'];
    conversion_panels?: Maybe<Conversion_PanelsAccess>;
    cta_tiles?: Maybe<Cta_TilesAccess>;
    feature_grids?: Maybe<Feature_GridsAccess>;
    feature_tiles?: Maybe<Feature_TilesAccess>;
    featured_media?: Maybe<Featured_MediaAccess>;
    footer?: Maybe<FooterAccess>;
    header?: Maybe<HeaderAccess>;
    heroes?: Maybe<HeroesAccess>;
    icon_tiles?: Maybe<Icon_TilesAccess>;
    icons?: Maybe<IconsAccess>;
    images?: Maybe<ImagesAccess>;
    pages?: Maybe<PagesAccess>;
    switchbacks?: Maybe<SwitchbacksAccess>;
    tile_grids?: Maybe<Tile_GridsAccess>;
    users?: Maybe<UsersAccess>;
    videos?: Maybe<VideosAccess>;
};

export type Accordion = {
    __typename?: 'Accordion';
    accordionItems?: Maybe<Array<Accordion_AccordionItems>>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    heading: Scalars['String']['output'];
    headingTag: Scalars['String']['output'];
    id?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Accordion_AccordionItems = {
    __typename?: 'Accordion_AccordionItems';
    content?: Maybe<Scalars['JSON']['output']>;
    heading?: Maybe<Scalars['String']['output']>;
    headingTag?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
};

export type Accordion_AccordionItemsContentArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Accordion_AccordionItems__Content_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Accordion_AccordionItems__HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Accordion_AccordionItems__Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Accordion_AccordionItems__Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Accordion_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Accordion_HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Accordion_Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Accordion_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Accordion_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Accordion_Where = {
    AND?: InputMaybe<Array<InputMaybe<Accordion_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Accordion_Where_Or>>>;
    accordionItems__content?: InputMaybe<Accordion_AccordionItems__Content_Operator>;
    accordionItems__heading?: InputMaybe<Accordion_AccordionItems__Heading_Operator>;
    accordionItems__headingTag?: InputMaybe<Accordion_AccordionItems__HeadingTag_Operator>;
    accordionItems__id?: InputMaybe<Accordion_AccordionItems__Id_Operator>;
    createdAt?: InputMaybe<Accordion_CreatedAt_Operator>;
    heading?: InputMaybe<Accordion_Heading_Operator>;
    headingTag?: InputMaybe<Accordion_HeadingTag_Operator>;
    id?: InputMaybe<Accordion_Id_Operator>;
    updatedAt?: InputMaybe<Accordion_UpdatedAt_Operator>;
};

export type Accordion_Where_And = {
    accordionItems__content?: InputMaybe<Accordion_AccordionItems__Content_Operator>;
    accordionItems__heading?: InputMaybe<Accordion_AccordionItems__Heading_Operator>;
    accordionItems__headingTag?: InputMaybe<Accordion_AccordionItems__HeadingTag_Operator>;
    accordionItems__id?: InputMaybe<Accordion_AccordionItems__Id_Operator>;
    createdAt?: InputMaybe<Accordion_CreatedAt_Operator>;
    heading?: InputMaybe<Accordion_Heading_Operator>;
    headingTag?: InputMaybe<Accordion_HeadingTag_Operator>;
    id?: InputMaybe<Accordion_Id_Operator>;
    updatedAt?: InputMaybe<Accordion_UpdatedAt_Operator>;
};

export type Accordion_Where_Or = {
    accordionItems__content?: InputMaybe<Accordion_AccordionItems__Content_Operator>;
    accordionItems__heading?: InputMaybe<Accordion_AccordionItems__Heading_Operator>;
    accordionItems__headingTag?: InputMaybe<Accordion_AccordionItems__HeadingTag_Operator>;
    accordionItems__id?: InputMaybe<Accordion_AccordionItems__Id_Operator>;
    createdAt?: InputMaybe<Accordion_CreatedAt_Operator>;
    heading?: InputMaybe<Accordion_Heading_Operator>;
    headingTag?: InputMaybe<Accordion_HeadingTag_Operator>;
    id?: InputMaybe<Accordion_Id_Operator>;
    updatedAt?: InputMaybe<Accordion_UpdatedAt_Operator>;
};

export type Accordions = {
    __typename?: 'Accordions';
    docs?: Maybe<Array<Maybe<Accordion>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AccordionsCreateAccess = {
    __typename?: 'AccordionsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccordionsCreateDocAccess = {
    __typename?: 'AccordionsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccordionsDeleteAccess = {
    __typename?: 'AccordionsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccordionsDeleteDocAccess = {
    __typename?: 'AccordionsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccordionsDocAccessFields = {
    __typename?: 'AccordionsDocAccessFields';
    accordionItems?: Maybe<AccordionsDocAccessFields_AccordionItems>;
    createdAt?: Maybe<AccordionsDocAccessFields_CreatedAt>;
    heading?: Maybe<AccordionsDocAccessFields_Heading>;
    headingTag?: Maybe<AccordionsDocAccessFields_HeadingTag>;
    updatedAt?: Maybe<AccordionsDocAccessFields_UpdatedAt>;
};

export type AccordionsDocAccessFields_AccordionItems = {
    __typename?: 'AccordionsDocAccessFields_accordionItems';
    create?: Maybe<AccordionsDocAccessFields_AccordionItems_Create>;
    delete?: Maybe<AccordionsDocAccessFields_AccordionItems_Delete>;
    fields?: Maybe<AccordionsDocAccessFields_AccordionItems_Fields>;
    read?: Maybe<AccordionsDocAccessFields_AccordionItems_Read>;
    update?: Maybe<AccordionsDocAccessFields_AccordionItems_Update>;
};

export type AccordionsDocAccessFields_AccordionItems_Create = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Delete = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Fields = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_Fields';
    content?: Maybe<AccordionsDocAccessFields_AccordionItems_Content>;
    heading?: Maybe<AccordionsDocAccessFields_AccordionItems_Heading>;
    headingTag?: Maybe<AccordionsDocAccessFields_AccordionItems_HeadingTag>;
    id?: Maybe<AccordionsDocAccessFields_AccordionItems_Id>;
};

export type AccordionsDocAccessFields_AccordionItems_Read = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Update = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Content = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_content';
    create?: Maybe<AccordionsDocAccessFields_AccordionItems_Content_Create>;
    delete?: Maybe<AccordionsDocAccessFields_AccordionItems_Content_Delete>;
    read?: Maybe<AccordionsDocAccessFields_AccordionItems_Content_Read>;
    update?: Maybe<AccordionsDocAccessFields_AccordionItems_Content_Update>;
};

export type AccordionsDocAccessFields_AccordionItems_Content_Create = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Content_Delete = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Content_Read = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Content_Update = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Heading = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_heading';
    create?: Maybe<AccordionsDocAccessFields_AccordionItems_Heading_Create>;
    delete?: Maybe<AccordionsDocAccessFields_AccordionItems_Heading_Delete>;
    read?: Maybe<AccordionsDocAccessFields_AccordionItems_Heading_Read>;
    update?: Maybe<AccordionsDocAccessFields_AccordionItems_Heading_Update>;
};

export type AccordionsDocAccessFields_AccordionItems_HeadingTag = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_headingTag';
    create?: Maybe<AccordionsDocAccessFields_AccordionItems_HeadingTag_Create>;
    delete?: Maybe<AccordionsDocAccessFields_AccordionItems_HeadingTag_Delete>;
    read?: Maybe<AccordionsDocAccessFields_AccordionItems_HeadingTag_Read>;
    update?: Maybe<AccordionsDocAccessFields_AccordionItems_HeadingTag_Update>;
};

export type AccordionsDocAccessFields_AccordionItems_HeadingTag_Create = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_HeadingTag_Delete = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_HeadingTag_Read = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_HeadingTag_Update = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Heading_Create = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Heading_Delete = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Heading_Read = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Heading_Update = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Id = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_id';
    create?: Maybe<AccordionsDocAccessFields_AccordionItems_Id_Create>;
    delete?: Maybe<AccordionsDocAccessFields_AccordionItems_Id_Delete>;
    read?: Maybe<AccordionsDocAccessFields_AccordionItems_Id_Read>;
    update?: Maybe<AccordionsDocAccessFields_AccordionItems_Id_Update>;
};

export type AccordionsDocAccessFields_AccordionItems_Id_Create = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Id_Delete = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Id_Read = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_AccordionItems_Id_Update = {
    __typename?: 'AccordionsDocAccessFields_accordionItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_CreatedAt = {
    __typename?: 'AccordionsDocAccessFields_createdAt';
    create?: Maybe<AccordionsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<AccordionsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<AccordionsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<AccordionsDocAccessFields_CreatedAt_Update>;
};

export type AccordionsDocAccessFields_CreatedAt_Create = {
    __typename?: 'AccordionsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'AccordionsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_CreatedAt_Read = {
    __typename?: 'AccordionsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_CreatedAt_Update = {
    __typename?: 'AccordionsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_Heading = {
    __typename?: 'AccordionsDocAccessFields_heading';
    create?: Maybe<AccordionsDocAccessFields_Heading_Create>;
    delete?: Maybe<AccordionsDocAccessFields_Heading_Delete>;
    read?: Maybe<AccordionsDocAccessFields_Heading_Read>;
    update?: Maybe<AccordionsDocAccessFields_Heading_Update>;
};

export type AccordionsDocAccessFields_HeadingTag = {
    __typename?: 'AccordionsDocAccessFields_headingTag';
    create?: Maybe<AccordionsDocAccessFields_HeadingTag_Create>;
    delete?: Maybe<AccordionsDocAccessFields_HeadingTag_Delete>;
    read?: Maybe<AccordionsDocAccessFields_HeadingTag_Read>;
    update?: Maybe<AccordionsDocAccessFields_HeadingTag_Update>;
};

export type AccordionsDocAccessFields_HeadingTag_Create = {
    __typename?: 'AccordionsDocAccessFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_HeadingTag_Delete = {
    __typename?: 'AccordionsDocAccessFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_HeadingTag_Read = {
    __typename?: 'AccordionsDocAccessFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_HeadingTag_Update = {
    __typename?: 'AccordionsDocAccessFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_Heading_Create = {
    __typename?: 'AccordionsDocAccessFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_Heading_Delete = {
    __typename?: 'AccordionsDocAccessFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_Heading_Read = {
    __typename?: 'AccordionsDocAccessFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_Heading_Update = {
    __typename?: 'AccordionsDocAccessFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_UpdatedAt = {
    __typename?: 'AccordionsDocAccessFields_updatedAt';
    create?: Maybe<AccordionsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<AccordionsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<AccordionsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<AccordionsDocAccessFields_UpdatedAt_Update>;
};

export type AccordionsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'AccordionsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'AccordionsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'AccordionsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'AccordionsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields = {
    __typename?: 'AccordionsFields';
    accordionItems?: Maybe<AccordionsFields_AccordionItems>;
    createdAt?: Maybe<AccordionsFields_CreatedAt>;
    heading?: Maybe<AccordionsFields_Heading>;
    headingTag?: Maybe<AccordionsFields_HeadingTag>;
    updatedAt?: Maybe<AccordionsFields_UpdatedAt>;
};

export type AccordionsFields_AccordionItems = {
    __typename?: 'AccordionsFields_accordionItems';
    create?: Maybe<AccordionsFields_AccordionItems_Create>;
    delete?: Maybe<AccordionsFields_AccordionItems_Delete>;
    fields?: Maybe<AccordionsFields_AccordionItems_Fields>;
    read?: Maybe<AccordionsFields_AccordionItems_Read>;
    update?: Maybe<AccordionsFields_AccordionItems_Update>;
};

export type AccordionsFields_AccordionItems_Create = {
    __typename?: 'AccordionsFields_accordionItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Delete = {
    __typename?: 'AccordionsFields_accordionItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Fields = {
    __typename?: 'AccordionsFields_accordionItems_Fields';
    content?: Maybe<AccordionsFields_AccordionItems_Content>;
    heading?: Maybe<AccordionsFields_AccordionItems_Heading>;
    headingTag?: Maybe<AccordionsFields_AccordionItems_HeadingTag>;
    id?: Maybe<AccordionsFields_AccordionItems_Id>;
};

export type AccordionsFields_AccordionItems_Read = {
    __typename?: 'AccordionsFields_accordionItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Update = {
    __typename?: 'AccordionsFields_accordionItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Content = {
    __typename?: 'AccordionsFields_accordionItems_content';
    create?: Maybe<AccordionsFields_AccordionItems_Content_Create>;
    delete?: Maybe<AccordionsFields_AccordionItems_Content_Delete>;
    read?: Maybe<AccordionsFields_AccordionItems_Content_Read>;
    update?: Maybe<AccordionsFields_AccordionItems_Content_Update>;
};

export type AccordionsFields_AccordionItems_Content_Create = {
    __typename?: 'AccordionsFields_accordionItems_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Content_Delete = {
    __typename?: 'AccordionsFields_accordionItems_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Content_Read = {
    __typename?: 'AccordionsFields_accordionItems_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Content_Update = {
    __typename?: 'AccordionsFields_accordionItems_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Heading = {
    __typename?: 'AccordionsFields_accordionItems_heading';
    create?: Maybe<AccordionsFields_AccordionItems_Heading_Create>;
    delete?: Maybe<AccordionsFields_AccordionItems_Heading_Delete>;
    read?: Maybe<AccordionsFields_AccordionItems_Heading_Read>;
    update?: Maybe<AccordionsFields_AccordionItems_Heading_Update>;
};

export type AccordionsFields_AccordionItems_HeadingTag = {
    __typename?: 'AccordionsFields_accordionItems_headingTag';
    create?: Maybe<AccordionsFields_AccordionItems_HeadingTag_Create>;
    delete?: Maybe<AccordionsFields_AccordionItems_HeadingTag_Delete>;
    read?: Maybe<AccordionsFields_AccordionItems_HeadingTag_Read>;
    update?: Maybe<AccordionsFields_AccordionItems_HeadingTag_Update>;
};

export type AccordionsFields_AccordionItems_HeadingTag_Create = {
    __typename?: 'AccordionsFields_accordionItems_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_HeadingTag_Delete = {
    __typename?: 'AccordionsFields_accordionItems_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_HeadingTag_Read = {
    __typename?: 'AccordionsFields_accordionItems_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_HeadingTag_Update = {
    __typename?: 'AccordionsFields_accordionItems_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Heading_Create = {
    __typename?: 'AccordionsFields_accordionItems_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Heading_Delete = {
    __typename?: 'AccordionsFields_accordionItems_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Heading_Read = {
    __typename?: 'AccordionsFields_accordionItems_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Heading_Update = {
    __typename?: 'AccordionsFields_accordionItems_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Id = {
    __typename?: 'AccordionsFields_accordionItems_id';
    create?: Maybe<AccordionsFields_AccordionItems_Id_Create>;
    delete?: Maybe<AccordionsFields_AccordionItems_Id_Delete>;
    read?: Maybe<AccordionsFields_AccordionItems_Id_Read>;
    update?: Maybe<AccordionsFields_AccordionItems_Id_Update>;
};

export type AccordionsFields_AccordionItems_Id_Create = {
    __typename?: 'AccordionsFields_accordionItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Id_Delete = {
    __typename?: 'AccordionsFields_accordionItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Id_Read = {
    __typename?: 'AccordionsFields_accordionItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_AccordionItems_Id_Update = {
    __typename?: 'AccordionsFields_accordionItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_CreatedAt = {
    __typename?: 'AccordionsFields_createdAt';
    create?: Maybe<AccordionsFields_CreatedAt_Create>;
    delete?: Maybe<AccordionsFields_CreatedAt_Delete>;
    read?: Maybe<AccordionsFields_CreatedAt_Read>;
    update?: Maybe<AccordionsFields_CreatedAt_Update>;
};

export type AccordionsFields_CreatedAt_Create = {
    __typename?: 'AccordionsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_CreatedAt_Delete = {
    __typename?: 'AccordionsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_CreatedAt_Read = {
    __typename?: 'AccordionsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_CreatedAt_Update = {
    __typename?: 'AccordionsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_Heading = {
    __typename?: 'AccordionsFields_heading';
    create?: Maybe<AccordionsFields_Heading_Create>;
    delete?: Maybe<AccordionsFields_Heading_Delete>;
    read?: Maybe<AccordionsFields_Heading_Read>;
    update?: Maybe<AccordionsFields_Heading_Update>;
};

export type AccordionsFields_HeadingTag = {
    __typename?: 'AccordionsFields_headingTag';
    create?: Maybe<AccordionsFields_HeadingTag_Create>;
    delete?: Maybe<AccordionsFields_HeadingTag_Delete>;
    read?: Maybe<AccordionsFields_HeadingTag_Read>;
    update?: Maybe<AccordionsFields_HeadingTag_Update>;
};

export type AccordionsFields_HeadingTag_Create = {
    __typename?: 'AccordionsFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_HeadingTag_Delete = {
    __typename?: 'AccordionsFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_HeadingTag_Read = {
    __typename?: 'AccordionsFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_HeadingTag_Update = {
    __typename?: 'AccordionsFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_Heading_Create = {
    __typename?: 'AccordionsFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_Heading_Delete = {
    __typename?: 'AccordionsFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_Heading_Read = {
    __typename?: 'AccordionsFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_Heading_Update = {
    __typename?: 'AccordionsFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_UpdatedAt = {
    __typename?: 'AccordionsFields_updatedAt';
    create?: Maybe<AccordionsFields_UpdatedAt_Create>;
    delete?: Maybe<AccordionsFields_UpdatedAt_Delete>;
    read?: Maybe<AccordionsFields_UpdatedAt_Read>;
    update?: Maybe<AccordionsFields_UpdatedAt_Update>;
};

export type AccordionsFields_UpdatedAt_Create = {
    __typename?: 'AccordionsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_UpdatedAt_Delete = {
    __typename?: 'AccordionsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_UpdatedAt_Read = {
    __typename?: 'AccordionsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsFields_UpdatedAt_Update = {
    __typename?: 'AccordionsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type AccordionsReadAccess = {
    __typename?: 'AccordionsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccordionsReadDocAccess = {
    __typename?: 'AccordionsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccordionsUpdateAccess = {
    __typename?: 'AccordionsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccordionsUpdateDocAccess = {
    __typename?: 'AccordionsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Button = {
    __typename?: 'Button';
    color?: Maybe<Button_Color>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    externalLink?: Maybe<Scalars['String']['output']>;
    fullTitle?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    internalLink?: Maybe<Page>;
    label?: Maybe<Scalars['String']['output']>;
    linkType?: Maybe<Button_LinkType>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Button_Color = 'blue' | 'green' | 'white' | '%future added value';

export type Button_Color_Input =
    | 'blue'
    | 'green'
    | 'white'
    | '%future added value';

export type Button_Color_Operator = {
    all?: InputMaybe<Array<InputMaybe<Button_Color_Input>>>;
    equals?: InputMaybe<Button_Color_Input>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Button_Color_Input>>>;
    not_equals?: InputMaybe<Button_Color_Input>;
    not_in?: InputMaybe<Array<InputMaybe<Button_Color_Input>>>;
};

export type Button_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Button_ExternalLink_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Button_FullTitle_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Button_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Button_InternalLink_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Button_Label_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Button_LinkType = 'external' | 'internal' | '%future added value';

export type Button_LinkType_Input =
    | 'external'
    | 'internal'
    | '%future added value';

export type Button_LinkType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Button_LinkType_Input>>>;
    equals?: InputMaybe<Button_LinkType_Input>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Button_LinkType_Input>>>;
    not_equals?: InputMaybe<Button_LinkType_Input>;
    not_in?: InputMaybe<Array<InputMaybe<Button_LinkType_Input>>>;
};

export type Button_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Button_Where = {
    AND?: InputMaybe<Array<InputMaybe<Button_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Button_Where_Or>>>;
    color?: InputMaybe<Button_Color_Operator>;
    createdAt?: InputMaybe<Button_CreatedAt_Operator>;
    externalLink?: InputMaybe<Button_ExternalLink_Operator>;
    fullTitle?: InputMaybe<Button_FullTitle_Operator>;
    id?: InputMaybe<Button_Id_Operator>;
    internalLink?: InputMaybe<Button_InternalLink_Operator>;
    label?: InputMaybe<Button_Label_Operator>;
    linkType?: InputMaybe<Button_LinkType_Operator>;
    updatedAt?: InputMaybe<Button_UpdatedAt_Operator>;
};

export type Button_Where_And = {
    color?: InputMaybe<Button_Color_Operator>;
    createdAt?: InputMaybe<Button_CreatedAt_Operator>;
    externalLink?: InputMaybe<Button_ExternalLink_Operator>;
    fullTitle?: InputMaybe<Button_FullTitle_Operator>;
    id?: InputMaybe<Button_Id_Operator>;
    internalLink?: InputMaybe<Button_InternalLink_Operator>;
    label?: InputMaybe<Button_Label_Operator>;
    linkType?: InputMaybe<Button_LinkType_Operator>;
    updatedAt?: InputMaybe<Button_UpdatedAt_Operator>;
};

export type Button_Where_Or = {
    color?: InputMaybe<Button_Color_Operator>;
    createdAt?: InputMaybe<Button_CreatedAt_Operator>;
    externalLink?: InputMaybe<Button_ExternalLink_Operator>;
    fullTitle?: InputMaybe<Button_FullTitle_Operator>;
    id?: InputMaybe<Button_Id_Operator>;
    internalLink?: InputMaybe<Button_InternalLink_Operator>;
    label?: InputMaybe<Button_Label_Operator>;
    linkType?: InputMaybe<Button_LinkType_Operator>;
    updatedAt?: InputMaybe<Button_UpdatedAt_Operator>;
};

export type Buttons = {
    __typename?: 'Buttons';
    docs?: Maybe<Array<Maybe<Button>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ButtonsCreateAccess = {
    __typename?: 'ButtonsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ButtonsCreateDocAccess = {
    __typename?: 'ButtonsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ButtonsDeleteAccess = {
    __typename?: 'ButtonsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ButtonsDeleteDocAccess = {
    __typename?: 'ButtonsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ButtonsDocAccessFields = {
    __typename?: 'ButtonsDocAccessFields';
    color?: Maybe<ButtonsDocAccessFields_Color>;
    createdAt?: Maybe<ButtonsDocAccessFields_CreatedAt>;
    externalLink?: Maybe<ButtonsDocAccessFields_ExternalLink>;
    fullTitle?: Maybe<ButtonsDocAccessFields_FullTitle>;
    internalLink?: Maybe<ButtonsDocAccessFields_InternalLink>;
    label?: Maybe<ButtonsDocAccessFields_Label>;
    linkType?: Maybe<ButtonsDocAccessFields_LinkType>;
    linksTo?: Maybe<ButtonsDocAccessFields_LinksTo>;
    updatedAt?: Maybe<ButtonsDocAccessFields_UpdatedAt>;
};

export type ButtonsDocAccessFields_Color = {
    __typename?: 'ButtonsDocAccessFields_color';
    create?: Maybe<ButtonsDocAccessFields_Color_Create>;
    delete?: Maybe<ButtonsDocAccessFields_Color_Delete>;
    read?: Maybe<ButtonsDocAccessFields_Color_Read>;
    update?: Maybe<ButtonsDocAccessFields_Color_Update>;
};

export type ButtonsDocAccessFields_Color_Create = {
    __typename?: 'ButtonsDocAccessFields_color_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_Color_Delete = {
    __typename?: 'ButtonsDocAccessFields_color_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_Color_Read = {
    __typename?: 'ButtonsDocAccessFields_color_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_Color_Update = {
    __typename?: 'ButtonsDocAccessFields_color_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_CreatedAt = {
    __typename?: 'ButtonsDocAccessFields_createdAt';
    create?: Maybe<ButtonsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<ButtonsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<ButtonsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<ButtonsDocAccessFields_CreatedAt_Update>;
};

export type ButtonsDocAccessFields_CreatedAt_Create = {
    __typename?: 'ButtonsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'ButtonsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_CreatedAt_Read = {
    __typename?: 'ButtonsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_CreatedAt_Update = {
    __typename?: 'ButtonsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_ExternalLink = {
    __typename?: 'ButtonsDocAccessFields_externalLink';
    create?: Maybe<ButtonsDocAccessFields_ExternalLink_Create>;
    delete?: Maybe<ButtonsDocAccessFields_ExternalLink_Delete>;
    read?: Maybe<ButtonsDocAccessFields_ExternalLink_Read>;
    update?: Maybe<ButtonsDocAccessFields_ExternalLink_Update>;
};

export type ButtonsDocAccessFields_ExternalLink_Create = {
    __typename?: 'ButtonsDocAccessFields_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_ExternalLink_Delete = {
    __typename?: 'ButtonsDocAccessFields_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_ExternalLink_Read = {
    __typename?: 'ButtonsDocAccessFields_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_ExternalLink_Update = {
    __typename?: 'ButtonsDocAccessFields_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_FullTitle = {
    __typename?: 'ButtonsDocAccessFields_fullTitle';
    create?: Maybe<ButtonsDocAccessFields_FullTitle_Create>;
    delete?: Maybe<ButtonsDocAccessFields_FullTitle_Delete>;
    read?: Maybe<ButtonsDocAccessFields_FullTitle_Read>;
    update?: Maybe<ButtonsDocAccessFields_FullTitle_Update>;
};

export type ButtonsDocAccessFields_FullTitle_Create = {
    __typename?: 'ButtonsDocAccessFields_fullTitle_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_FullTitle_Delete = {
    __typename?: 'ButtonsDocAccessFields_fullTitle_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_FullTitle_Read = {
    __typename?: 'ButtonsDocAccessFields_fullTitle_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_FullTitle_Update = {
    __typename?: 'ButtonsDocAccessFields_fullTitle_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_InternalLink = {
    __typename?: 'ButtonsDocAccessFields_internalLink';
    create?: Maybe<ButtonsDocAccessFields_InternalLink_Create>;
    delete?: Maybe<ButtonsDocAccessFields_InternalLink_Delete>;
    read?: Maybe<ButtonsDocAccessFields_InternalLink_Read>;
    update?: Maybe<ButtonsDocAccessFields_InternalLink_Update>;
};

export type ButtonsDocAccessFields_InternalLink_Create = {
    __typename?: 'ButtonsDocAccessFields_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_InternalLink_Delete = {
    __typename?: 'ButtonsDocAccessFields_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_InternalLink_Read = {
    __typename?: 'ButtonsDocAccessFields_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_InternalLink_Update = {
    __typename?: 'ButtonsDocAccessFields_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_Label = {
    __typename?: 'ButtonsDocAccessFields_label';
    create?: Maybe<ButtonsDocAccessFields_Label_Create>;
    delete?: Maybe<ButtonsDocAccessFields_Label_Delete>;
    read?: Maybe<ButtonsDocAccessFields_Label_Read>;
    update?: Maybe<ButtonsDocAccessFields_Label_Update>;
};

export type ButtonsDocAccessFields_Label_Create = {
    __typename?: 'ButtonsDocAccessFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_Label_Delete = {
    __typename?: 'ButtonsDocAccessFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_Label_Read = {
    __typename?: 'ButtonsDocAccessFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_Label_Update = {
    __typename?: 'ButtonsDocAccessFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_LinkType = {
    __typename?: 'ButtonsDocAccessFields_linkType';
    create?: Maybe<ButtonsDocAccessFields_LinkType_Create>;
    delete?: Maybe<ButtonsDocAccessFields_LinkType_Delete>;
    read?: Maybe<ButtonsDocAccessFields_LinkType_Read>;
    update?: Maybe<ButtonsDocAccessFields_LinkType_Update>;
};

export type ButtonsDocAccessFields_LinkType_Create = {
    __typename?: 'ButtonsDocAccessFields_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_LinkType_Delete = {
    __typename?: 'ButtonsDocAccessFields_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_LinkType_Read = {
    __typename?: 'ButtonsDocAccessFields_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_LinkType_Update = {
    __typename?: 'ButtonsDocAccessFields_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_LinksTo = {
    __typename?: 'ButtonsDocAccessFields_linksTo';
    create?: Maybe<ButtonsDocAccessFields_LinksTo_Create>;
    delete?: Maybe<ButtonsDocAccessFields_LinksTo_Delete>;
    read?: Maybe<ButtonsDocAccessFields_LinksTo_Read>;
    update?: Maybe<ButtonsDocAccessFields_LinksTo_Update>;
};

export type ButtonsDocAccessFields_LinksTo_Create = {
    __typename?: 'ButtonsDocAccessFields_linksTo_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_LinksTo_Delete = {
    __typename?: 'ButtonsDocAccessFields_linksTo_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_LinksTo_Read = {
    __typename?: 'ButtonsDocAccessFields_linksTo_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_LinksTo_Update = {
    __typename?: 'ButtonsDocAccessFields_linksTo_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_UpdatedAt = {
    __typename?: 'ButtonsDocAccessFields_updatedAt';
    create?: Maybe<ButtonsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<ButtonsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<ButtonsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<ButtonsDocAccessFields_UpdatedAt_Update>;
};

export type ButtonsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'ButtonsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'ButtonsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'ButtonsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'ButtonsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields = {
    __typename?: 'ButtonsFields';
    color?: Maybe<ButtonsFields_Color>;
    createdAt?: Maybe<ButtonsFields_CreatedAt>;
    externalLink?: Maybe<ButtonsFields_ExternalLink>;
    fullTitle?: Maybe<ButtonsFields_FullTitle>;
    internalLink?: Maybe<ButtonsFields_InternalLink>;
    label?: Maybe<ButtonsFields_Label>;
    linkType?: Maybe<ButtonsFields_LinkType>;
    linksTo?: Maybe<ButtonsFields_LinksTo>;
    updatedAt?: Maybe<ButtonsFields_UpdatedAt>;
};

export type ButtonsFields_Color = {
    __typename?: 'ButtonsFields_color';
    create?: Maybe<ButtonsFields_Color_Create>;
    delete?: Maybe<ButtonsFields_Color_Delete>;
    read?: Maybe<ButtonsFields_Color_Read>;
    update?: Maybe<ButtonsFields_Color_Update>;
};

export type ButtonsFields_Color_Create = {
    __typename?: 'ButtonsFields_color_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_Color_Delete = {
    __typename?: 'ButtonsFields_color_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_Color_Read = {
    __typename?: 'ButtonsFields_color_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_Color_Update = {
    __typename?: 'ButtonsFields_color_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_CreatedAt = {
    __typename?: 'ButtonsFields_createdAt';
    create?: Maybe<ButtonsFields_CreatedAt_Create>;
    delete?: Maybe<ButtonsFields_CreatedAt_Delete>;
    read?: Maybe<ButtonsFields_CreatedAt_Read>;
    update?: Maybe<ButtonsFields_CreatedAt_Update>;
};

export type ButtonsFields_CreatedAt_Create = {
    __typename?: 'ButtonsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_CreatedAt_Delete = {
    __typename?: 'ButtonsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_CreatedAt_Read = {
    __typename?: 'ButtonsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_CreatedAt_Update = {
    __typename?: 'ButtonsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_ExternalLink = {
    __typename?: 'ButtonsFields_externalLink';
    create?: Maybe<ButtonsFields_ExternalLink_Create>;
    delete?: Maybe<ButtonsFields_ExternalLink_Delete>;
    read?: Maybe<ButtonsFields_ExternalLink_Read>;
    update?: Maybe<ButtonsFields_ExternalLink_Update>;
};

export type ButtonsFields_ExternalLink_Create = {
    __typename?: 'ButtonsFields_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_ExternalLink_Delete = {
    __typename?: 'ButtonsFields_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_ExternalLink_Read = {
    __typename?: 'ButtonsFields_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_ExternalLink_Update = {
    __typename?: 'ButtonsFields_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_FullTitle = {
    __typename?: 'ButtonsFields_fullTitle';
    create?: Maybe<ButtonsFields_FullTitle_Create>;
    delete?: Maybe<ButtonsFields_FullTitle_Delete>;
    read?: Maybe<ButtonsFields_FullTitle_Read>;
    update?: Maybe<ButtonsFields_FullTitle_Update>;
};

export type ButtonsFields_FullTitle_Create = {
    __typename?: 'ButtonsFields_fullTitle_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_FullTitle_Delete = {
    __typename?: 'ButtonsFields_fullTitle_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_FullTitle_Read = {
    __typename?: 'ButtonsFields_fullTitle_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_FullTitle_Update = {
    __typename?: 'ButtonsFields_fullTitle_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_InternalLink = {
    __typename?: 'ButtonsFields_internalLink';
    create?: Maybe<ButtonsFields_InternalLink_Create>;
    delete?: Maybe<ButtonsFields_InternalLink_Delete>;
    read?: Maybe<ButtonsFields_InternalLink_Read>;
    update?: Maybe<ButtonsFields_InternalLink_Update>;
};

export type ButtonsFields_InternalLink_Create = {
    __typename?: 'ButtonsFields_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_InternalLink_Delete = {
    __typename?: 'ButtonsFields_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_InternalLink_Read = {
    __typename?: 'ButtonsFields_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_InternalLink_Update = {
    __typename?: 'ButtonsFields_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_Label = {
    __typename?: 'ButtonsFields_label';
    create?: Maybe<ButtonsFields_Label_Create>;
    delete?: Maybe<ButtonsFields_Label_Delete>;
    read?: Maybe<ButtonsFields_Label_Read>;
    update?: Maybe<ButtonsFields_Label_Update>;
};

export type ButtonsFields_Label_Create = {
    __typename?: 'ButtonsFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_Label_Delete = {
    __typename?: 'ButtonsFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_Label_Read = {
    __typename?: 'ButtonsFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_Label_Update = {
    __typename?: 'ButtonsFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_LinkType = {
    __typename?: 'ButtonsFields_linkType';
    create?: Maybe<ButtonsFields_LinkType_Create>;
    delete?: Maybe<ButtonsFields_LinkType_Delete>;
    read?: Maybe<ButtonsFields_LinkType_Read>;
    update?: Maybe<ButtonsFields_LinkType_Update>;
};

export type ButtonsFields_LinkType_Create = {
    __typename?: 'ButtonsFields_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_LinkType_Delete = {
    __typename?: 'ButtonsFields_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_LinkType_Read = {
    __typename?: 'ButtonsFields_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_LinkType_Update = {
    __typename?: 'ButtonsFields_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_LinksTo = {
    __typename?: 'ButtonsFields_linksTo';
    create?: Maybe<ButtonsFields_LinksTo_Create>;
    delete?: Maybe<ButtonsFields_LinksTo_Delete>;
    read?: Maybe<ButtonsFields_LinksTo_Read>;
    update?: Maybe<ButtonsFields_LinksTo_Update>;
};

export type ButtonsFields_LinksTo_Create = {
    __typename?: 'ButtonsFields_linksTo_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_LinksTo_Delete = {
    __typename?: 'ButtonsFields_linksTo_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_LinksTo_Read = {
    __typename?: 'ButtonsFields_linksTo_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_LinksTo_Update = {
    __typename?: 'ButtonsFields_linksTo_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_UpdatedAt = {
    __typename?: 'ButtonsFields_updatedAt';
    create?: Maybe<ButtonsFields_UpdatedAt_Create>;
    delete?: Maybe<ButtonsFields_UpdatedAt_Delete>;
    read?: Maybe<ButtonsFields_UpdatedAt_Read>;
    update?: Maybe<ButtonsFields_UpdatedAt_Update>;
};

export type ButtonsFields_UpdatedAt_Create = {
    __typename?: 'ButtonsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_UpdatedAt_Delete = {
    __typename?: 'ButtonsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_UpdatedAt_Read = {
    __typename?: 'ButtonsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsFields_UpdatedAt_Update = {
    __typename?: 'ButtonsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ButtonsReadAccess = {
    __typename?: 'ButtonsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ButtonsReadDocAccess = {
    __typename?: 'ButtonsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ButtonsUpdateAccess = {
    __typename?: 'ButtonsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ButtonsUpdateDocAccess = {
    __typename?: 'ButtonsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConversionPanel = {
    __typename?: 'ConversionPanel';
    callToAction: Button;
    content?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    heading: Scalars['String']['output'];
    headingTag: Scalars['String']['output'];
    id?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ConversionPanelContentArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type ConversionPanel_CallToAction_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ConversionPanel_Content_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type ConversionPanel_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConversionPanel_HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ConversionPanel_Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ConversionPanel_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ConversionPanel_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConversionPanel_Where = {
    AND?: InputMaybe<Array<InputMaybe<ConversionPanel_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<ConversionPanel_Where_Or>>>;
    callToAction?: InputMaybe<ConversionPanel_CallToAction_Operator>;
    content?: InputMaybe<ConversionPanel_Content_Operator>;
    createdAt?: InputMaybe<ConversionPanel_CreatedAt_Operator>;
    heading?: InputMaybe<ConversionPanel_Heading_Operator>;
    headingTag?: InputMaybe<ConversionPanel_HeadingTag_Operator>;
    id?: InputMaybe<ConversionPanel_Id_Operator>;
    updatedAt?: InputMaybe<ConversionPanel_UpdatedAt_Operator>;
};

export type ConversionPanel_Where_And = {
    callToAction?: InputMaybe<ConversionPanel_CallToAction_Operator>;
    content?: InputMaybe<ConversionPanel_Content_Operator>;
    createdAt?: InputMaybe<ConversionPanel_CreatedAt_Operator>;
    heading?: InputMaybe<ConversionPanel_Heading_Operator>;
    headingTag?: InputMaybe<ConversionPanel_HeadingTag_Operator>;
    id?: InputMaybe<ConversionPanel_Id_Operator>;
    updatedAt?: InputMaybe<ConversionPanel_UpdatedAt_Operator>;
};

export type ConversionPanel_Where_Or = {
    callToAction?: InputMaybe<ConversionPanel_CallToAction_Operator>;
    content?: InputMaybe<ConversionPanel_Content_Operator>;
    createdAt?: InputMaybe<ConversionPanel_CreatedAt_Operator>;
    heading?: InputMaybe<ConversionPanel_Heading_Operator>;
    headingTag?: InputMaybe<ConversionPanel_HeadingTag_Operator>;
    id?: InputMaybe<ConversionPanel_Id_Operator>;
    updatedAt?: InputMaybe<ConversionPanel_UpdatedAt_Operator>;
};

export type ConversionPanels = {
    __typename?: 'ConversionPanels';
    docs?: Maybe<Array<Maybe<ConversionPanel>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ConversionPanelsCreateAccess = {
    __typename?: 'ConversionPanelsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConversionPanelsCreateDocAccess = {
    __typename?: 'ConversionPanelsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConversionPanelsDeleteAccess = {
    __typename?: 'ConversionPanelsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConversionPanelsDeleteDocAccess = {
    __typename?: 'ConversionPanelsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConversionPanelsDocAccessFields = {
    __typename?: 'ConversionPanelsDocAccessFields';
    callToAction?: Maybe<ConversionPanelsDocAccessFields_CallToAction>;
    content?: Maybe<ConversionPanelsDocAccessFields_Content>;
    createdAt?: Maybe<ConversionPanelsDocAccessFields_CreatedAt>;
    heading?: Maybe<ConversionPanelsDocAccessFields_Heading>;
    headingTag?: Maybe<ConversionPanelsDocAccessFields_HeadingTag>;
    updatedAt?: Maybe<ConversionPanelsDocAccessFields_UpdatedAt>;
};

export type ConversionPanelsDocAccessFields_CallToAction = {
    __typename?: 'ConversionPanelsDocAccessFields_callToAction';
    create?: Maybe<ConversionPanelsDocAccessFields_CallToAction_Create>;
    delete?: Maybe<ConversionPanelsDocAccessFields_CallToAction_Delete>;
    read?: Maybe<ConversionPanelsDocAccessFields_CallToAction_Read>;
    update?: Maybe<ConversionPanelsDocAccessFields_CallToAction_Update>;
};

export type ConversionPanelsDocAccessFields_CallToAction_Create = {
    __typename?: 'ConversionPanelsDocAccessFields_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_CallToAction_Delete = {
    __typename?: 'ConversionPanelsDocAccessFields_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_CallToAction_Read = {
    __typename?: 'ConversionPanelsDocAccessFields_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_CallToAction_Update = {
    __typename?: 'ConversionPanelsDocAccessFields_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Content = {
    __typename?: 'ConversionPanelsDocAccessFields_content';
    create?: Maybe<ConversionPanelsDocAccessFields_Content_Create>;
    delete?: Maybe<ConversionPanelsDocAccessFields_Content_Delete>;
    read?: Maybe<ConversionPanelsDocAccessFields_Content_Read>;
    update?: Maybe<ConversionPanelsDocAccessFields_Content_Update>;
};

export type ConversionPanelsDocAccessFields_Content_Create = {
    __typename?: 'ConversionPanelsDocAccessFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Content_Delete = {
    __typename?: 'ConversionPanelsDocAccessFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Content_Read = {
    __typename?: 'ConversionPanelsDocAccessFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Content_Update = {
    __typename?: 'ConversionPanelsDocAccessFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_CreatedAt = {
    __typename?: 'ConversionPanelsDocAccessFields_createdAt';
    create?: Maybe<ConversionPanelsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<ConversionPanelsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<ConversionPanelsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<ConversionPanelsDocAccessFields_CreatedAt_Update>;
};

export type ConversionPanelsDocAccessFields_CreatedAt_Create = {
    __typename?: 'ConversionPanelsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'ConversionPanelsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_CreatedAt_Read = {
    __typename?: 'ConversionPanelsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_CreatedAt_Update = {
    __typename?: 'ConversionPanelsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Heading = {
    __typename?: 'ConversionPanelsDocAccessFields_heading';
    create?: Maybe<ConversionPanelsDocAccessFields_Heading_Create>;
    delete?: Maybe<ConversionPanelsDocAccessFields_Heading_Delete>;
    read?: Maybe<ConversionPanelsDocAccessFields_Heading_Read>;
    update?: Maybe<ConversionPanelsDocAccessFields_Heading_Update>;
};

export type ConversionPanelsDocAccessFields_HeadingTag = {
    __typename?: 'ConversionPanelsDocAccessFields_headingTag';
    create?: Maybe<ConversionPanelsDocAccessFields_HeadingTag_Create>;
    delete?: Maybe<ConversionPanelsDocAccessFields_HeadingTag_Delete>;
    read?: Maybe<ConversionPanelsDocAccessFields_HeadingTag_Read>;
    update?: Maybe<ConversionPanelsDocAccessFields_HeadingTag_Update>;
};

export type ConversionPanelsDocAccessFields_HeadingTag_Create = {
    __typename?: 'ConversionPanelsDocAccessFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_HeadingTag_Delete = {
    __typename?: 'ConversionPanelsDocAccessFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_HeadingTag_Read = {
    __typename?: 'ConversionPanelsDocAccessFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_HeadingTag_Update = {
    __typename?: 'ConversionPanelsDocAccessFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Heading_Create = {
    __typename?: 'ConversionPanelsDocAccessFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Heading_Delete = {
    __typename?: 'ConversionPanelsDocAccessFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Heading_Read = {
    __typename?: 'ConversionPanelsDocAccessFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_Heading_Update = {
    __typename?: 'ConversionPanelsDocAccessFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_UpdatedAt = {
    __typename?: 'ConversionPanelsDocAccessFields_updatedAt';
    create?: Maybe<ConversionPanelsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<ConversionPanelsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<ConversionPanelsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<ConversionPanelsDocAccessFields_UpdatedAt_Update>;
};

export type ConversionPanelsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'ConversionPanelsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'ConversionPanelsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'ConversionPanelsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'ConversionPanelsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields = {
    __typename?: 'ConversionPanelsFields';
    callToAction?: Maybe<ConversionPanelsFields_CallToAction>;
    content?: Maybe<ConversionPanelsFields_Content>;
    createdAt?: Maybe<ConversionPanelsFields_CreatedAt>;
    heading?: Maybe<ConversionPanelsFields_Heading>;
    headingTag?: Maybe<ConversionPanelsFields_HeadingTag>;
    updatedAt?: Maybe<ConversionPanelsFields_UpdatedAt>;
};

export type ConversionPanelsFields_CallToAction = {
    __typename?: 'ConversionPanelsFields_callToAction';
    create?: Maybe<ConversionPanelsFields_CallToAction_Create>;
    delete?: Maybe<ConversionPanelsFields_CallToAction_Delete>;
    read?: Maybe<ConversionPanelsFields_CallToAction_Read>;
    update?: Maybe<ConversionPanelsFields_CallToAction_Update>;
};

export type ConversionPanelsFields_CallToAction_Create = {
    __typename?: 'ConversionPanelsFields_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_CallToAction_Delete = {
    __typename?: 'ConversionPanelsFields_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_CallToAction_Read = {
    __typename?: 'ConversionPanelsFields_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_CallToAction_Update = {
    __typename?: 'ConversionPanelsFields_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Content = {
    __typename?: 'ConversionPanelsFields_content';
    create?: Maybe<ConversionPanelsFields_Content_Create>;
    delete?: Maybe<ConversionPanelsFields_Content_Delete>;
    read?: Maybe<ConversionPanelsFields_Content_Read>;
    update?: Maybe<ConversionPanelsFields_Content_Update>;
};

export type ConversionPanelsFields_Content_Create = {
    __typename?: 'ConversionPanelsFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Content_Delete = {
    __typename?: 'ConversionPanelsFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Content_Read = {
    __typename?: 'ConversionPanelsFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Content_Update = {
    __typename?: 'ConversionPanelsFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_CreatedAt = {
    __typename?: 'ConversionPanelsFields_createdAt';
    create?: Maybe<ConversionPanelsFields_CreatedAt_Create>;
    delete?: Maybe<ConversionPanelsFields_CreatedAt_Delete>;
    read?: Maybe<ConversionPanelsFields_CreatedAt_Read>;
    update?: Maybe<ConversionPanelsFields_CreatedAt_Update>;
};

export type ConversionPanelsFields_CreatedAt_Create = {
    __typename?: 'ConversionPanelsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_CreatedAt_Delete = {
    __typename?: 'ConversionPanelsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_CreatedAt_Read = {
    __typename?: 'ConversionPanelsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_CreatedAt_Update = {
    __typename?: 'ConversionPanelsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Heading = {
    __typename?: 'ConversionPanelsFields_heading';
    create?: Maybe<ConversionPanelsFields_Heading_Create>;
    delete?: Maybe<ConversionPanelsFields_Heading_Delete>;
    read?: Maybe<ConversionPanelsFields_Heading_Read>;
    update?: Maybe<ConversionPanelsFields_Heading_Update>;
};

export type ConversionPanelsFields_HeadingTag = {
    __typename?: 'ConversionPanelsFields_headingTag';
    create?: Maybe<ConversionPanelsFields_HeadingTag_Create>;
    delete?: Maybe<ConversionPanelsFields_HeadingTag_Delete>;
    read?: Maybe<ConversionPanelsFields_HeadingTag_Read>;
    update?: Maybe<ConversionPanelsFields_HeadingTag_Update>;
};

export type ConversionPanelsFields_HeadingTag_Create = {
    __typename?: 'ConversionPanelsFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_HeadingTag_Delete = {
    __typename?: 'ConversionPanelsFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_HeadingTag_Read = {
    __typename?: 'ConversionPanelsFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_HeadingTag_Update = {
    __typename?: 'ConversionPanelsFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Heading_Create = {
    __typename?: 'ConversionPanelsFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Heading_Delete = {
    __typename?: 'ConversionPanelsFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Heading_Read = {
    __typename?: 'ConversionPanelsFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_Heading_Update = {
    __typename?: 'ConversionPanelsFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_UpdatedAt = {
    __typename?: 'ConversionPanelsFields_updatedAt';
    create?: Maybe<ConversionPanelsFields_UpdatedAt_Create>;
    delete?: Maybe<ConversionPanelsFields_UpdatedAt_Delete>;
    read?: Maybe<ConversionPanelsFields_UpdatedAt_Read>;
    update?: Maybe<ConversionPanelsFields_UpdatedAt_Update>;
};

export type ConversionPanelsFields_UpdatedAt_Create = {
    __typename?: 'ConversionPanelsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_UpdatedAt_Delete = {
    __typename?: 'ConversionPanelsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_UpdatedAt_Read = {
    __typename?: 'ConversionPanelsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsFields_UpdatedAt_Update = {
    __typename?: 'ConversionPanelsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ConversionPanelsReadAccess = {
    __typename?: 'ConversionPanelsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConversionPanelsReadDocAccess = {
    __typename?: 'ConversionPanelsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConversionPanelsUpdateAccess = {
    __typename?: 'ConversionPanelsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConversionPanelsUpdateDocAccess = {
    __typename?: 'ConversionPanelsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtaTile = {
    __typename?: 'CtaTile';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    externalLink?: Maybe<Scalars['String']['output']>;
    icon: Icon;
    id?: Maybe<Scalars['String']['output']>;
    internalLink?: Maybe<Page>;
    internalName: Scalars['String']['output'];
    label: Scalars['String']['output'];
    linkType: CtaTile_LinkType;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CtaTileIconArgs = {
    where?: InputMaybe<CtaTile_Icon_Where>;
};

export type CtaTile_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CtaTile_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type CtaTile_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type CtaTile_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type CtaTile_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type CtaTile_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type CtaTile_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CtaTile_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<CtaTile_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<CtaTile_Icon_Where_Or>>>;
    alt?: InputMaybe<CtaTile_Icon_Alt_Operator>;
    createdAt?: InputMaybe<CtaTile_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<CtaTile_Icon_Filename_Operator>;
    filesize?: InputMaybe<CtaTile_Icon_Filesize_Operator>;
    height?: InputMaybe<CtaTile_Icon_Height_Operator>;
    id?: InputMaybe<CtaTile_Icon_Id_Operator>;
    mimeType?: InputMaybe<CtaTile_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CtaTile_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<CtaTile_Icon_Url_Operator>;
    width?: InputMaybe<CtaTile_Icon_Width_Operator>;
};

export type CtaTile_Icon_Where_And = {
    alt?: InputMaybe<CtaTile_Icon_Alt_Operator>;
    createdAt?: InputMaybe<CtaTile_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<CtaTile_Icon_Filename_Operator>;
    filesize?: InputMaybe<CtaTile_Icon_Filesize_Operator>;
    height?: InputMaybe<CtaTile_Icon_Height_Operator>;
    id?: InputMaybe<CtaTile_Icon_Id_Operator>;
    mimeType?: InputMaybe<CtaTile_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CtaTile_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<CtaTile_Icon_Url_Operator>;
    width?: InputMaybe<CtaTile_Icon_Width_Operator>;
};

export type CtaTile_Icon_Where_Or = {
    alt?: InputMaybe<CtaTile_Icon_Alt_Operator>;
    createdAt?: InputMaybe<CtaTile_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<CtaTile_Icon_Filename_Operator>;
    filesize?: InputMaybe<CtaTile_Icon_Filesize_Operator>;
    height?: InputMaybe<CtaTile_Icon_Height_Operator>;
    id?: InputMaybe<CtaTile_Icon_Id_Operator>;
    mimeType?: InputMaybe<CtaTile_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CtaTile_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CtaTile_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<CtaTile_Icon_Url_Operator>;
    width?: InputMaybe<CtaTile_Icon_Width_Operator>;
};

export type CtaTile_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type CtaTile_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CtaTile_ExternalLink_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Icon_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type CtaTile_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_InternalLink_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_InternalName_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_Label_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaTile_LinkType = 'external' | 'internal' | '%future added value';

export type CtaTile_LinkType_Input =
    | 'external'
    | 'internal'
    | '%future added value';

export type CtaTile_LinkType_Operator = {
    all?: InputMaybe<Array<InputMaybe<CtaTile_LinkType_Input>>>;
    equals?: InputMaybe<CtaTile_LinkType_Input>;
    in?: InputMaybe<Array<InputMaybe<CtaTile_LinkType_Input>>>;
    not_equals?: InputMaybe<CtaTile_LinkType_Input>;
    not_in?: InputMaybe<Array<InputMaybe<CtaTile_LinkType_Input>>>;
};

export type CtaTile_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CtaTile_Where = {
    AND?: InputMaybe<Array<InputMaybe<CtaTile_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<CtaTile_Where_Or>>>;
    createdAt?: InputMaybe<CtaTile_CreatedAt_Operator>;
    externalLink?: InputMaybe<CtaTile_ExternalLink_Operator>;
    icon?: InputMaybe<CtaTile_Icon_Operator>;
    id?: InputMaybe<CtaTile_Id_Operator>;
    internalLink?: InputMaybe<CtaTile_InternalLink_Operator>;
    internalName?: InputMaybe<CtaTile_InternalName_Operator>;
    label?: InputMaybe<CtaTile_Label_Operator>;
    linkType?: InputMaybe<CtaTile_LinkType_Operator>;
    updatedAt?: InputMaybe<CtaTile_UpdatedAt_Operator>;
};

export type CtaTile_Where_And = {
    createdAt?: InputMaybe<CtaTile_CreatedAt_Operator>;
    externalLink?: InputMaybe<CtaTile_ExternalLink_Operator>;
    icon?: InputMaybe<CtaTile_Icon_Operator>;
    id?: InputMaybe<CtaTile_Id_Operator>;
    internalLink?: InputMaybe<CtaTile_InternalLink_Operator>;
    internalName?: InputMaybe<CtaTile_InternalName_Operator>;
    label?: InputMaybe<CtaTile_Label_Operator>;
    linkType?: InputMaybe<CtaTile_LinkType_Operator>;
    updatedAt?: InputMaybe<CtaTile_UpdatedAt_Operator>;
};

export type CtaTile_Where_Or = {
    createdAt?: InputMaybe<CtaTile_CreatedAt_Operator>;
    externalLink?: InputMaybe<CtaTile_ExternalLink_Operator>;
    icon?: InputMaybe<CtaTile_Icon_Operator>;
    id?: InputMaybe<CtaTile_Id_Operator>;
    internalLink?: InputMaybe<CtaTile_InternalLink_Operator>;
    internalName?: InputMaybe<CtaTile_InternalName_Operator>;
    label?: InputMaybe<CtaTile_Label_Operator>;
    linkType?: InputMaybe<CtaTile_LinkType_Operator>;
    updatedAt?: InputMaybe<CtaTile_UpdatedAt_Operator>;
};

export type CtaTiles = {
    __typename?: 'CtaTiles';
    docs?: Maybe<Array<Maybe<CtaTile>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CtaTilesCreateAccess = {
    __typename?: 'CtaTilesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtaTilesCreateDocAccess = {
    __typename?: 'CtaTilesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtaTilesDeleteAccess = {
    __typename?: 'CtaTilesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtaTilesDeleteDocAccess = {
    __typename?: 'CtaTilesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtaTilesDocAccessFields = {
    __typename?: 'CtaTilesDocAccessFields';
    createdAt?: Maybe<CtaTilesDocAccessFields_CreatedAt>;
    externalLink?: Maybe<CtaTilesDocAccessFields_ExternalLink>;
    icon?: Maybe<CtaTilesDocAccessFields_Icon>;
    internalLink?: Maybe<CtaTilesDocAccessFields_InternalLink>;
    internalName?: Maybe<CtaTilesDocAccessFields_InternalName>;
    label?: Maybe<CtaTilesDocAccessFields_Label>;
    linkType?: Maybe<CtaTilesDocAccessFields_LinkType>;
    updatedAt?: Maybe<CtaTilesDocAccessFields_UpdatedAt>;
};

export type CtaTilesDocAccessFields_CreatedAt = {
    __typename?: 'CtaTilesDocAccessFields_createdAt';
    create?: Maybe<CtaTilesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<CtaTilesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<CtaTilesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<CtaTilesDocAccessFields_CreatedAt_Update>;
};

export type CtaTilesDocAccessFields_CreatedAt_Create = {
    __typename?: 'CtaTilesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'CtaTilesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_CreatedAt_Read = {
    __typename?: 'CtaTilesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_CreatedAt_Update = {
    __typename?: 'CtaTilesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_ExternalLink = {
    __typename?: 'CtaTilesDocAccessFields_externalLink';
    create?: Maybe<CtaTilesDocAccessFields_ExternalLink_Create>;
    delete?: Maybe<CtaTilesDocAccessFields_ExternalLink_Delete>;
    read?: Maybe<CtaTilesDocAccessFields_ExternalLink_Read>;
    update?: Maybe<CtaTilesDocAccessFields_ExternalLink_Update>;
};

export type CtaTilesDocAccessFields_ExternalLink_Create = {
    __typename?: 'CtaTilesDocAccessFields_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_ExternalLink_Delete = {
    __typename?: 'CtaTilesDocAccessFields_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_ExternalLink_Read = {
    __typename?: 'CtaTilesDocAccessFields_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_ExternalLink_Update = {
    __typename?: 'CtaTilesDocAccessFields_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_Icon = {
    __typename?: 'CtaTilesDocAccessFields_icon';
    create?: Maybe<CtaTilesDocAccessFields_Icon_Create>;
    delete?: Maybe<CtaTilesDocAccessFields_Icon_Delete>;
    read?: Maybe<CtaTilesDocAccessFields_Icon_Read>;
    update?: Maybe<CtaTilesDocAccessFields_Icon_Update>;
};

export type CtaTilesDocAccessFields_Icon_Create = {
    __typename?: 'CtaTilesDocAccessFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_Icon_Delete = {
    __typename?: 'CtaTilesDocAccessFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_Icon_Read = {
    __typename?: 'CtaTilesDocAccessFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_Icon_Update = {
    __typename?: 'CtaTilesDocAccessFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_InternalLink = {
    __typename?: 'CtaTilesDocAccessFields_internalLink';
    create?: Maybe<CtaTilesDocAccessFields_InternalLink_Create>;
    delete?: Maybe<CtaTilesDocAccessFields_InternalLink_Delete>;
    read?: Maybe<CtaTilesDocAccessFields_InternalLink_Read>;
    update?: Maybe<CtaTilesDocAccessFields_InternalLink_Update>;
};

export type CtaTilesDocAccessFields_InternalLink_Create = {
    __typename?: 'CtaTilesDocAccessFields_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_InternalLink_Delete = {
    __typename?: 'CtaTilesDocAccessFields_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_InternalLink_Read = {
    __typename?: 'CtaTilesDocAccessFields_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_InternalLink_Update = {
    __typename?: 'CtaTilesDocAccessFields_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_InternalName = {
    __typename?: 'CtaTilesDocAccessFields_internalName';
    create?: Maybe<CtaTilesDocAccessFields_InternalName_Create>;
    delete?: Maybe<CtaTilesDocAccessFields_InternalName_Delete>;
    read?: Maybe<CtaTilesDocAccessFields_InternalName_Read>;
    update?: Maybe<CtaTilesDocAccessFields_InternalName_Update>;
};

export type CtaTilesDocAccessFields_InternalName_Create = {
    __typename?: 'CtaTilesDocAccessFields_internalName_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_InternalName_Delete = {
    __typename?: 'CtaTilesDocAccessFields_internalName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_InternalName_Read = {
    __typename?: 'CtaTilesDocAccessFields_internalName_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_InternalName_Update = {
    __typename?: 'CtaTilesDocAccessFields_internalName_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_Label = {
    __typename?: 'CtaTilesDocAccessFields_label';
    create?: Maybe<CtaTilesDocAccessFields_Label_Create>;
    delete?: Maybe<CtaTilesDocAccessFields_Label_Delete>;
    read?: Maybe<CtaTilesDocAccessFields_Label_Read>;
    update?: Maybe<CtaTilesDocAccessFields_Label_Update>;
};

export type CtaTilesDocAccessFields_Label_Create = {
    __typename?: 'CtaTilesDocAccessFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_Label_Delete = {
    __typename?: 'CtaTilesDocAccessFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_Label_Read = {
    __typename?: 'CtaTilesDocAccessFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_Label_Update = {
    __typename?: 'CtaTilesDocAccessFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_LinkType = {
    __typename?: 'CtaTilesDocAccessFields_linkType';
    create?: Maybe<CtaTilesDocAccessFields_LinkType_Create>;
    delete?: Maybe<CtaTilesDocAccessFields_LinkType_Delete>;
    read?: Maybe<CtaTilesDocAccessFields_LinkType_Read>;
    update?: Maybe<CtaTilesDocAccessFields_LinkType_Update>;
};

export type CtaTilesDocAccessFields_LinkType_Create = {
    __typename?: 'CtaTilesDocAccessFields_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_LinkType_Delete = {
    __typename?: 'CtaTilesDocAccessFields_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_LinkType_Read = {
    __typename?: 'CtaTilesDocAccessFields_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_LinkType_Update = {
    __typename?: 'CtaTilesDocAccessFields_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_UpdatedAt = {
    __typename?: 'CtaTilesDocAccessFields_updatedAt';
    create?: Maybe<CtaTilesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<CtaTilesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<CtaTilesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<CtaTilesDocAccessFields_UpdatedAt_Update>;
};

export type CtaTilesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'CtaTilesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'CtaTilesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'CtaTilesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'CtaTilesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields = {
    __typename?: 'CtaTilesFields';
    createdAt?: Maybe<CtaTilesFields_CreatedAt>;
    externalLink?: Maybe<CtaTilesFields_ExternalLink>;
    icon?: Maybe<CtaTilesFields_Icon>;
    internalLink?: Maybe<CtaTilesFields_InternalLink>;
    internalName?: Maybe<CtaTilesFields_InternalName>;
    label?: Maybe<CtaTilesFields_Label>;
    linkType?: Maybe<CtaTilesFields_LinkType>;
    updatedAt?: Maybe<CtaTilesFields_UpdatedAt>;
};

export type CtaTilesFields_CreatedAt = {
    __typename?: 'CtaTilesFields_createdAt';
    create?: Maybe<CtaTilesFields_CreatedAt_Create>;
    delete?: Maybe<CtaTilesFields_CreatedAt_Delete>;
    read?: Maybe<CtaTilesFields_CreatedAt_Read>;
    update?: Maybe<CtaTilesFields_CreatedAt_Update>;
};

export type CtaTilesFields_CreatedAt_Create = {
    __typename?: 'CtaTilesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_CreatedAt_Delete = {
    __typename?: 'CtaTilesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_CreatedAt_Read = {
    __typename?: 'CtaTilesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_CreatedAt_Update = {
    __typename?: 'CtaTilesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_ExternalLink = {
    __typename?: 'CtaTilesFields_externalLink';
    create?: Maybe<CtaTilesFields_ExternalLink_Create>;
    delete?: Maybe<CtaTilesFields_ExternalLink_Delete>;
    read?: Maybe<CtaTilesFields_ExternalLink_Read>;
    update?: Maybe<CtaTilesFields_ExternalLink_Update>;
};

export type CtaTilesFields_ExternalLink_Create = {
    __typename?: 'CtaTilesFields_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_ExternalLink_Delete = {
    __typename?: 'CtaTilesFields_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_ExternalLink_Read = {
    __typename?: 'CtaTilesFields_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_ExternalLink_Update = {
    __typename?: 'CtaTilesFields_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_Icon = {
    __typename?: 'CtaTilesFields_icon';
    create?: Maybe<CtaTilesFields_Icon_Create>;
    delete?: Maybe<CtaTilesFields_Icon_Delete>;
    read?: Maybe<CtaTilesFields_Icon_Read>;
    update?: Maybe<CtaTilesFields_Icon_Update>;
};

export type CtaTilesFields_Icon_Create = {
    __typename?: 'CtaTilesFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_Icon_Delete = {
    __typename?: 'CtaTilesFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_Icon_Read = {
    __typename?: 'CtaTilesFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_Icon_Update = {
    __typename?: 'CtaTilesFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_InternalLink = {
    __typename?: 'CtaTilesFields_internalLink';
    create?: Maybe<CtaTilesFields_InternalLink_Create>;
    delete?: Maybe<CtaTilesFields_InternalLink_Delete>;
    read?: Maybe<CtaTilesFields_InternalLink_Read>;
    update?: Maybe<CtaTilesFields_InternalLink_Update>;
};

export type CtaTilesFields_InternalLink_Create = {
    __typename?: 'CtaTilesFields_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_InternalLink_Delete = {
    __typename?: 'CtaTilesFields_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_InternalLink_Read = {
    __typename?: 'CtaTilesFields_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_InternalLink_Update = {
    __typename?: 'CtaTilesFields_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_InternalName = {
    __typename?: 'CtaTilesFields_internalName';
    create?: Maybe<CtaTilesFields_InternalName_Create>;
    delete?: Maybe<CtaTilesFields_InternalName_Delete>;
    read?: Maybe<CtaTilesFields_InternalName_Read>;
    update?: Maybe<CtaTilesFields_InternalName_Update>;
};

export type CtaTilesFields_InternalName_Create = {
    __typename?: 'CtaTilesFields_internalName_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_InternalName_Delete = {
    __typename?: 'CtaTilesFields_internalName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_InternalName_Read = {
    __typename?: 'CtaTilesFields_internalName_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_InternalName_Update = {
    __typename?: 'CtaTilesFields_internalName_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_Label = {
    __typename?: 'CtaTilesFields_label';
    create?: Maybe<CtaTilesFields_Label_Create>;
    delete?: Maybe<CtaTilesFields_Label_Delete>;
    read?: Maybe<CtaTilesFields_Label_Read>;
    update?: Maybe<CtaTilesFields_Label_Update>;
};

export type CtaTilesFields_Label_Create = {
    __typename?: 'CtaTilesFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_Label_Delete = {
    __typename?: 'CtaTilesFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_Label_Read = {
    __typename?: 'CtaTilesFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_Label_Update = {
    __typename?: 'CtaTilesFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_LinkType = {
    __typename?: 'CtaTilesFields_linkType';
    create?: Maybe<CtaTilesFields_LinkType_Create>;
    delete?: Maybe<CtaTilesFields_LinkType_Delete>;
    read?: Maybe<CtaTilesFields_LinkType_Read>;
    update?: Maybe<CtaTilesFields_LinkType_Update>;
};

export type CtaTilesFields_LinkType_Create = {
    __typename?: 'CtaTilesFields_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_LinkType_Delete = {
    __typename?: 'CtaTilesFields_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_LinkType_Read = {
    __typename?: 'CtaTilesFields_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_LinkType_Update = {
    __typename?: 'CtaTilesFields_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_UpdatedAt = {
    __typename?: 'CtaTilesFields_updatedAt';
    create?: Maybe<CtaTilesFields_UpdatedAt_Create>;
    delete?: Maybe<CtaTilesFields_UpdatedAt_Delete>;
    read?: Maybe<CtaTilesFields_UpdatedAt_Read>;
    update?: Maybe<CtaTilesFields_UpdatedAt_Update>;
};

export type CtaTilesFields_UpdatedAt_Create = {
    __typename?: 'CtaTilesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_UpdatedAt_Delete = {
    __typename?: 'CtaTilesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_UpdatedAt_Read = {
    __typename?: 'CtaTilesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesFields_UpdatedAt_Update = {
    __typename?: 'CtaTilesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtaTilesReadAccess = {
    __typename?: 'CtaTilesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtaTilesReadDocAccess = {
    __typename?: 'CtaTilesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtaTilesUpdateAccess = {
    __typename?: 'CtaTilesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtaTilesUpdateDocAccess = {
    __typename?: 'CtaTilesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureGrid = {
    __typename?: 'FeatureGrid';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    featureTiles?: Maybe<Array<FeatureGrid_FeatureTiles>>;
    id?: Maybe<Scalars['String']['output']>;
    internalName: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeatureGrid_FeatureTiles = {
    __typename?: 'FeatureGrid_FeatureTiles';
    featureTile?: Maybe<FeatureTile>;
    id?: Maybe<Scalars['String']['output']>;
};

export type FeatureGrid_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureGrid_FeatureTiles__FeatureTile_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureGrid_FeatureTiles__Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureGrid_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureGrid_InternalName_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureGrid_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureGrid_Where = {
    AND?: InputMaybe<Array<InputMaybe<FeatureGrid_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<FeatureGrid_Where_Or>>>;
    createdAt?: InputMaybe<FeatureGrid_CreatedAt_Operator>;
    featureTiles__featureTile?: InputMaybe<FeatureGrid_FeatureTiles__FeatureTile_Operator>;
    featureTiles__id?: InputMaybe<FeatureGrid_FeatureTiles__Id_Operator>;
    id?: InputMaybe<FeatureGrid_Id_Operator>;
    internalName?: InputMaybe<FeatureGrid_InternalName_Operator>;
    updatedAt?: InputMaybe<FeatureGrid_UpdatedAt_Operator>;
};

export type FeatureGrid_Where_And = {
    createdAt?: InputMaybe<FeatureGrid_CreatedAt_Operator>;
    featureTiles__featureTile?: InputMaybe<FeatureGrid_FeatureTiles__FeatureTile_Operator>;
    featureTiles__id?: InputMaybe<FeatureGrid_FeatureTiles__Id_Operator>;
    id?: InputMaybe<FeatureGrid_Id_Operator>;
    internalName?: InputMaybe<FeatureGrid_InternalName_Operator>;
    updatedAt?: InputMaybe<FeatureGrid_UpdatedAt_Operator>;
};

export type FeatureGrid_Where_Or = {
    createdAt?: InputMaybe<FeatureGrid_CreatedAt_Operator>;
    featureTiles__featureTile?: InputMaybe<FeatureGrid_FeatureTiles__FeatureTile_Operator>;
    featureTiles__id?: InputMaybe<FeatureGrid_FeatureTiles__Id_Operator>;
    id?: InputMaybe<FeatureGrid_Id_Operator>;
    internalName?: InputMaybe<FeatureGrid_InternalName_Operator>;
    updatedAt?: InputMaybe<FeatureGrid_UpdatedAt_Operator>;
};

export type FeatureGrids = {
    __typename?: 'FeatureGrids';
    docs?: Maybe<Array<Maybe<FeatureGrid>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FeatureGridsCreateAccess = {
    __typename?: 'FeatureGridsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureGridsCreateDocAccess = {
    __typename?: 'FeatureGridsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureGridsDeleteAccess = {
    __typename?: 'FeatureGridsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureGridsDeleteDocAccess = {
    __typename?: 'FeatureGridsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureGridsDocAccessFields = {
    __typename?: 'FeatureGridsDocAccessFields';
    createdAt?: Maybe<FeatureGridsDocAccessFields_CreatedAt>;
    featureTiles?: Maybe<FeatureGridsDocAccessFields_FeatureTiles>;
    internalName?: Maybe<FeatureGridsDocAccessFields_InternalName>;
    updatedAt?: Maybe<FeatureGridsDocAccessFields_UpdatedAt>;
};

export type FeatureGridsDocAccessFields_CreatedAt = {
    __typename?: 'FeatureGridsDocAccessFields_createdAt';
    create?: Maybe<FeatureGridsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<FeatureGridsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<FeatureGridsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<FeatureGridsDocAccessFields_CreatedAt_Update>;
};

export type FeatureGridsDocAccessFields_CreatedAt_Create = {
    __typename?: 'FeatureGridsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'FeatureGridsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_CreatedAt_Read = {
    __typename?: 'FeatureGridsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_CreatedAt_Update = {
    __typename?: 'FeatureGridsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles';
    create?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Create>;
    delete?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Delete>;
    fields?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Fields>;
    read?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Read>;
    update?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Update>;
};

export type FeatureGridsDocAccessFields_FeatureTiles_Create = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_Delete = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_Fields = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_Fields';
    featureTile?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_FeatureTile>;
    id?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Id>;
};

export type FeatureGridsDocAccessFields_FeatureTiles_Read = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_Update = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_FeatureTile = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_featureTile';
    create?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_FeatureTile_Create>;
    delete?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_FeatureTile_Delete>;
    read?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_FeatureTile_Read>;
    update?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_FeatureTile_Update>;
};

export type FeatureGridsDocAccessFields_FeatureTiles_FeatureTile_Create = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_featureTile_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_FeatureTile_Delete = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_featureTile_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_FeatureTile_Read = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_featureTile_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_FeatureTile_Update = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_featureTile_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_Id = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_id';
    create?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Id_Create>;
    delete?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Id_Delete>;
    read?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Id_Read>;
    update?: Maybe<FeatureGridsDocAccessFields_FeatureTiles_Id_Update>;
};

export type FeatureGridsDocAccessFields_FeatureTiles_Id_Create = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_Id_Delete = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_Id_Read = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_FeatureTiles_Id_Update = {
    __typename?: 'FeatureGridsDocAccessFields_featureTiles_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_InternalName = {
    __typename?: 'FeatureGridsDocAccessFields_internalName';
    create?: Maybe<FeatureGridsDocAccessFields_InternalName_Create>;
    delete?: Maybe<FeatureGridsDocAccessFields_InternalName_Delete>;
    read?: Maybe<FeatureGridsDocAccessFields_InternalName_Read>;
    update?: Maybe<FeatureGridsDocAccessFields_InternalName_Update>;
};

export type FeatureGridsDocAccessFields_InternalName_Create = {
    __typename?: 'FeatureGridsDocAccessFields_internalName_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_InternalName_Delete = {
    __typename?: 'FeatureGridsDocAccessFields_internalName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_InternalName_Read = {
    __typename?: 'FeatureGridsDocAccessFields_internalName_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_InternalName_Update = {
    __typename?: 'FeatureGridsDocAccessFields_internalName_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_UpdatedAt = {
    __typename?: 'FeatureGridsDocAccessFields_updatedAt';
    create?: Maybe<FeatureGridsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<FeatureGridsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<FeatureGridsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<FeatureGridsDocAccessFields_UpdatedAt_Update>;
};

export type FeatureGridsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'FeatureGridsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'FeatureGridsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'FeatureGridsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'FeatureGridsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields = {
    __typename?: 'FeatureGridsFields';
    createdAt?: Maybe<FeatureGridsFields_CreatedAt>;
    featureTiles?: Maybe<FeatureGridsFields_FeatureTiles>;
    internalName?: Maybe<FeatureGridsFields_InternalName>;
    updatedAt?: Maybe<FeatureGridsFields_UpdatedAt>;
};

export type FeatureGridsFields_CreatedAt = {
    __typename?: 'FeatureGridsFields_createdAt';
    create?: Maybe<FeatureGridsFields_CreatedAt_Create>;
    delete?: Maybe<FeatureGridsFields_CreatedAt_Delete>;
    read?: Maybe<FeatureGridsFields_CreatedAt_Read>;
    update?: Maybe<FeatureGridsFields_CreatedAt_Update>;
};

export type FeatureGridsFields_CreatedAt_Create = {
    __typename?: 'FeatureGridsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_CreatedAt_Delete = {
    __typename?: 'FeatureGridsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_CreatedAt_Read = {
    __typename?: 'FeatureGridsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_CreatedAt_Update = {
    __typename?: 'FeatureGridsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles = {
    __typename?: 'FeatureGridsFields_featureTiles';
    create?: Maybe<FeatureGridsFields_FeatureTiles_Create>;
    delete?: Maybe<FeatureGridsFields_FeatureTiles_Delete>;
    fields?: Maybe<FeatureGridsFields_FeatureTiles_Fields>;
    read?: Maybe<FeatureGridsFields_FeatureTiles_Read>;
    update?: Maybe<FeatureGridsFields_FeatureTiles_Update>;
};

export type FeatureGridsFields_FeatureTiles_Create = {
    __typename?: 'FeatureGridsFields_featureTiles_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_Delete = {
    __typename?: 'FeatureGridsFields_featureTiles_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_Fields = {
    __typename?: 'FeatureGridsFields_featureTiles_Fields';
    featureTile?: Maybe<FeatureGridsFields_FeatureTiles_FeatureTile>;
    id?: Maybe<FeatureGridsFields_FeatureTiles_Id>;
};

export type FeatureGridsFields_FeatureTiles_Read = {
    __typename?: 'FeatureGridsFields_featureTiles_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_Update = {
    __typename?: 'FeatureGridsFields_featureTiles_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_FeatureTile = {
    __typename?: 'FeatureGridsFields_featureTiles_featureTile';
    create?: Maybe<FeatureGridsFields_FeatureTiles_FeatureTile_Create>;
    delete?: Maybe<FeatureGridsFields_FeatureTiles_FeatureTile_Delete>;
    read?: Maybe<FeatureGridsFields_FeatureTiles_FeatureTile_Read>;
    update?: Maybe<FeatureGridsFields_FeatureTiles_FeatureTile_Update>;
};

export type FeatureGridsFields_FeatureTiles_FeatureTile_Create = {
    __typename?: 'FeatureGridsFields_featureTiles_featureTile_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_FeatureTile_Delete = {
    __typename?: 'FeatureGridsFields_featureTiles_featureTile_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_FeatureTile_Read = {
    __typename?: 'FeatureGridsFields_featureTiles_featureTile_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_FeatureTile_Update = {
    __typename?: 'FeatureGridsFields_featureTiles_featureTile_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_Id = {
    __typename?: 'FeatureGridsFields_featureTiles_id';
    create?: Maybe<FeatureGridsFields_FeatureTiles_Id_Create>;
    delete?: Maybe<FeatureGridsFields_FeatureTiles_Id_Delete>;
    read?: Maybe<FeatureGridsFields_FeatureTiles_Id_Read>;
    update?: Maybe<FeatureGridsFields_FeatureTiles_Id_Update>;
};

export type FeatureGridsFields_FeatureTiles_Id_Create = {
    __typename?: 'FeatureGridsFields_featureTiles_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_Id_Delete = {
    __typename?: 'FeatureGridsFields_featureTiles_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_Id_Read = {
    __typename?: 'FeatureGridsFields_featureTiles_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_FeatureTiles_Id_Update = {
    __typename?: 'FeatureGridsFields_featureTiles_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_InternalName = {
    __typename?: 'FeatureGridsFields_internalName';
    create?: Maybe<FeatureGridsFields_InternalName_Create>;
    delete?: Maybe<FeatureGridsFields_InternalName_Delete>;
    read?: Maybe<FeatureGridsFields_InternalName_Read>;
    update?: Maybe<FeatureGridsFields_InternalName_Update>;
};

export type FeatureGridsFields_InternalName_Create = {
    __typename?: 'FeatureGridsFields_internalName_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_InternalName_Delete = {
    __typename?: 'FeatureGridsFields_internalName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_InternalName_Read = {
    __typename?: 'FeatureGridsFields_internalName_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_InternalName_Update = {
    __typename?: 'FeatureGridsFields_internalName_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_UpdatedAt = {
    __typename?: 'FeatureGridsFields_updatedAt';
    create?: Maybe<FeatureGridsFields_UpdatedAt_Create>;
    delete?: Maybe<FeatureGridsFields_UpdatedAt_Delete>;
    read?: Maybe<FeatureGridsFields_UpdatedAt_Read>;
    update?: Maybe<FeatureGridsFields_UpdatedAt_Update>;
};

export type FeatureGridsFields_UpdatedAt_Create = {
    __typename?: 'FeatureGridsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_UpdatedAt_Delete = {
    __typename?: 'FeatureGridsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_UpdatedAt_Read = {
    __typename?: 'FeatureGridsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsFields_UpdatedAt_Update = {
    __typename?: 'FeatureGridsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureGridsReadAccess = {
    __typename?: 'FeatureGridsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureGridsReadDocAccess = {
    __typename?: 'FeatureGridsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureGridsUpdateAccess = {
    __typename?: 'FeatureGridsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureGridsUpdateDocAccess = {
    __typename?: 'FeatureGridsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureTile = {
    __typename?: 'FeatureTile';
    content?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    heading: Scalars['String']['output'];
    headingTag: Scalars['String']['output'];
    id?: Maybe<Scalars['String']['output']>;
    image: Image;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeatureTileContentArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type FeatureTileImageArgs = {
    where?: InputMaybe<FeatureTile_Image_Where>;
};

export type FeatureTile_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureTile_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeatureTile_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeatureTile_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeatureTile_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeatureTile_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeatureTile_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureTile_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<FeatureTile_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<FeatureTile_Image_Where_Or>>>;
    alt?: InputMaybe<FeatureTile_Image_Alt_Operator>;
    createdAt?: InputMaybe<FeatureTile_Image_CreatedAt_Operator>;
    filename?: InputMaybe<FeatureTile_Image_Filename_Operator>;
    filesize?: InputMaybe<FeatureTile_Image_Filesize_Operator>;
    height?: InputMaybe<FeatureTile_Image_Height_Operator>;
    id?: InputMaybe<FeatureTile_Image_Id_Operator>;
    mimeType?: InputMaybe<FeatureTile_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<FeatureTile_Image_UpdatedAt_Operator>;
    url?: InputMaybe<FeatureTile_Image_Url_Operator>;
    width?: InputMaybe<FeatureTile_Image_Width_Operator>;
};

export type FeatureTile_Image_Where_And = {
    alt?: InputMaybe<FeatureTile_Image_Alt_Operator>;
    createdAt?: InputMaybe<FeatureTile_Image_CreatedAt_Operator>;
    filename?: InputMaybe<FeatureTile_Image_Filename_Operator>;
    filesize?: InputMaybe<FeatureTile_Image_Filesize_Operator>;
    height?: InputMaybe<FeatureTile_Image_Height_Operator>;
    id?: InputMaybe<FeatureTile_Image_Id_Operator>;
    mimeType?: InputMaybe<FeatureTile_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<FeatureTile_Image_UpdatedAt_Operator>;
    url?: InputMaybe<FeatureTile_Image_Url_Operator>;
    width?: InputMaybe<FeatureTile_Image_Width_Operator>;
};

export type FeatureTile_Image_Where_Or = {
    alt?: InputMaybe<FeatureTile_Image_Alt_Operator>;
    createdAt?: InputMaybe<FeatureTile_Image_CreatedAt_Operator>;
    filename?: InputMaybe<FeatureTile_Image_Filename_Operator>;
    filesize?: InputMaybe<FeatureTile_Image_Filesize_Operator>;
    height?: InputMaybe<FeatureTile_Image_Height_Operator>;
    id?: InputMaybe<FeatureTile_Image_Id_Operator>;
    mimeType?: InputMaybe<FeatureTile_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<FeatureTile_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<FeatureTile_Image_UpdatedAt_Operator>;
    url?: InputMaybe<FeatureTile_Image_Url_Operator>;
    width?: InputMaybe<FeatureTile_Image_Width_Operator>;
};

export type FeatureTile_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeatureTile_Content_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type FeatureTile_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureTile_HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureTile_Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureTile_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeatureTile_Where = {
    AND?: InputMaybe<Array<InputMaybe<FeatureTile_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<FeatureTile_Where_Or>>>;
    content?: InputMaybe<FeatureTile_Content_Operator>;
    createdAt?: InputMaybe<FeatureTile_CreatedAt_Operator>;
    heading?: InputMaybe<FeatureTile_Heading_Operator>;
    headingTag?: InputMaybe<FeatureTile_HeadingTag_Operator>;
    id?: InputMaybe<FeatureTile_Id_Operator>;
    image?: InputMaybe<FeatureTile_Image_Operator>;
    updatedAt?: InputMaybe<FeatureTile_UpdatedAt_Operator>;
};

export type FeatureTile_Where_And = {
    content?: InputMaybe<FeatureTile_Content_Operator>;
    createdAt?: InputMaybe<FeatureTile_CreatedAt_Operator>;
    heading?: InputMaybe<FeatureTile_Heading_Operator>;
    headingTag?: InputMaybe<FeatureTile_HeadingTag_Operator>;
    id?: InputMaybe<FeatureTile_Id_Operator>;
    image?: InputMaybe<FeatureTile_Image_Operator>;
    updatedAt?: InputMaybe<FeatureTile_UpdatedAt_Operator>;
};

export type FeatureTile_Where_Or = {
    content?: InputMaybe<FeatureTile_Content_Operator>;
    createdAt?: InputMaybe<FeatureTile_CreatedAt_Operator>;
    heading?: InputMaybe<FeatureTile_Heading_Operator>;
    headingTag?: InputMaybe<FeatureTile_HeadingTag_Operator>;
    id?: InputMaybe<FeatureTile_Id_Operator>;
    image?: InputMaybe<FeatureTile_Image_Operator>;
    updatedAt?: InputMaybe<FeatureTile_UpdatedAt_Operator>;
};

export type FeatureTiles = {
    __typename?: 'FeatureTiles';
    docs?: Maybe<Array<Maybe<FeatureTile>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FeatureTilesCreateAccess = {
    __typename?: 'FeatureTilesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureTilesCreateDocAccess = {
    __typename?: 'FeatureTilesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureTilesDeleteAccess = {
    __typename?: 'FeatureTilesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureTilesDeleteDocAccess = {
    __typename?: 'FeatureTilesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureTilesDocAccessFields = {
    __typename?: 'FeatureTilesDocAccessFields';
    content?: Maybe<FeatureTilesDocAccessFields_Content>;
    createdAt?: Maybe<FeatureTilesDocAccessFields_CreatedAt>;
    heading?: Maybe<FeatureTilesDocAccessFields_Heading>;
    headingTag?: Maybe<FeatureTilesDocAccessFields_HeadingTag>;
    image?: Maybe<FeatureTilesDocAccessFields_Image>;
    updatedAt?: Maybe<FeatureTilesDocAccessFields_UpdatedAt>;
};

export type FeatureTilesDocAccessFields_Content = {
    __typename?: 'FeatureTilesDocAccessFields_content';
    create?: Maybe<FeatureTilesDocAccessFields_Content_Create>;
    delete?: Maybe<FeatureTilesDocAccessFields_Content_Delete>;
    read?: Maybe<FeatureTilesDocAccessFields_Content_Read>;
    update?: Maybe<FeatureTilesDocAccessFields_Content_Update>;
};

export type FeatureTilesDocAccessFields_Content_Create = {
    __typename?: 'FeatureTilesDocAccessFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Content_Delete = {
    __typename?: 'FeatureTilesDocAccessFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Content_Read = {
    __typename?: 'FeatureTilesDocAccessFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Content_Update = {
    __typename?: 'FeatureTilesDocAccessFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_CreatedAt = {
    __typename?: 'FeatureTilesDocAccessFields_createdAt';
    create?: Maybe<FeatureTilesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<FeatureTilesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<FeatureTilesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<FeatureTilesDocAccessFields_CreatedAt_Update>;
};

export type FeatureTilesDocAccessFields_CreatedAt_Create = {
    __typename?: 'FeatureTilesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'FeatureTilesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_CreatedAt_Read = {
    __typename?: 'FeatureTilesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_CreatedAt_Update = {
    __typename?: 'FeatureTilesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Heading = {
    __typename?: 'FeatureTilesDocAccessFields_heading';
    create?: Maybe<FeatureTilesDocAccessFields_Heading_Create>;
    delete?: Maybe<FeatureTilesDocAccessFields_Heading_Delete>;
    read?: Maybe<FeatureTilesDocAccessFields_Heading_Read>;
    update?: Maybe<FeatureTilesDocAccessFields_Heading_Update>;
};

export type FeatureTilesDocAccessFields_HeadingTag = {
    __typename?: 'FeatureTilesDocAccessFields_headingTag';
    create?: Maybe<FeatureTilesDocAccessFields_HeadingTag_Create>;
    delete?: Maybe<FeatureTilesDocAccessFields_HeadingTag_Delete>;
    read?: Maybe<FeatureTilesDocAccessFields_HeadingTag_Read>;
    update?: Maybe<FeatureTilesDocAccessFields_HeadingTag_Update>;
};

export type FeatureTilesDocAccessFields_HeadingTag_Create = {
    __typename?: 'FeatureTilesDocAccessFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_HeadingTag_Delete = {
    __typename?: 'FeatureTilesDocAccessFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_HeadingTag_Read = {
    __typename?: 'FeatureTilesDocAccessFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_HeadingTag_Update = {
    __typename?: 'FeatureTilesDocAccessFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Heading_Create = {
    __typename?: 'FeatureTilesDocAccessFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Heading_Delete = {
    __typename?: 'FeatureTilesDocAccessFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Heading_Read = {
    __typename?: 'FeatureTilesDocAccessFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Heading_Update = {
    __typename?: 'FeatureTilesDocAccessFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Image = {
    __typename?: 'FeatureTilesDocAccessFields_image';
    create?: Maybe<FeatureTilesDocAccessFields_Image_Create>;
    delete?: Maybe<FeatureTilesDocAccessFields_Image_Delete>;
    read?: Maybe<FeatureTilesDocAccessFields_Image_Read>;
    update?: Maybe<FeatureTilesDocAccessFields_Image_Update>;
};

export type FeatureTilesDocAccessFields_Image_Create = {
    __typename?: 'FeatureTilesDocAccessFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Image_Delete = {
    __typename?: 'FeatureTilesDocAccessFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Image_Read = {
    __typename?: 'FeatureTilesDocAccessFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_Image_Update = {
    __typename?: 'FeatureTilesDocAccessFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_UpdatedAt = {
    __typename?: 'FeatureTilesDocAccessFields_updatedAt';
    create?: Maybe<FeatureTilesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<FeatureTilesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<FeatureTilesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<FeatureTilesDocAccessFields_UpdatedAt_Update>;
};

export type FeatureTilesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'FeatureTilesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'FeatureTilesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'FeatureTilesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'FeatureTilesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields = {
    __typename?: 'FeatureTilesFields';
    content?: Maybe<FeatureTilesFields_Content>;
    createdAt?: Maybe<FeatureTilesFields_CreatedAt>;
    heading?: Maybe<FeatureTilesFields_Heading>;
    headingTag?: Maybe<FeatureTilesFields_HeadingTag>;
    image?: Maybe<FeatureTilesFields_Image>;
    updatedAt?: Maybe<FeatureTilesFields_UpdatedAt>;
};

export type FeatureTilesFields_Content = {
    __typename?: 'FeatureTilesFields_content';
    create?: Maybe<FeatureTilesFields_Content_Create>;
    delete?: Maybe<FeatureTilesFields_Content_Delete>;
    read?: Maybe<FeatureTilesFields_Content_Read>;
    update?: Maybe<FeatureTilesFields_Content_Update>;
};

export type FeatureTilesFields_Content_Create = {
    __typename?: 'FeatureTilesFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Content_Delete = {
    __typename?: 'FeatureTilesFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Content_Read = {
    __typename?: 'FeatureTilesFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Content_Update = {
    __typename?: 'FeatureTilesFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_CreatedAt = {
    __typename?: 'FeatureTilesFields_createdAt';
    create?: Maybe<FeatureTilesFields_CreatedAt_Create>;
    delete?: Maybe<FeatureTilesFields_CreatedAt_Delete>;
    read?: Maybe<FeatureTilesFields_CreatedAt_Read>;
    update?: Maybe<FeatureTilesFields_CreatedAt_Update>;
};

export type FeatureTilesFields_CreatedAt_Create = {
    __typename?: 'FeatureTilesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_CreatedAt_Delete = {
    __typename?: 'FeatureTilesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_CreatedAt_Read = {
    __typename?: 'FeatureTilesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_CreatedAt_Update = {
    __typename?: 'FeatureTilesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Heading = {
    __typename?: 'FeatureTilesFields_heading';
    create?: Maybe<FeatureTilesFields_Heading_Create>;
    delete?: Maybe<FeatureTilesFields_Heading_Delete>;
    read?: Maybe<FeatureTilesFields_Heading_Read>;
    update?: Maybe<FeatureTilesFields_Heading_Update>;
};

export type FeatureTilesFields_HeadingTag = {
    __typename?: 'FeatureTilesFields_headingTag';
    create?: Maybe<FeatureTilesFields_HeadingTag_Create>;
    delete?: Maybe<FeatureTilesFields_HeadingTag_Delete>;
    read?: Maybe<FeatureTilesFields_HeadingTag_Read>;
    update?: Maybe<FeatureTilesFields_HeadingTag_Update>;
};

export type FeatureTilesFields_HeadingTag_Create = {
    __typename?: 'FeatureTilesFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_HeadingTag_Delete = {
    __typename?: 'FeatureTilesFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_HeadingTag_Read = {
    __typename?: 'FeatureTilesFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_HeadingTag_Update = {
    __typename?: 'FeatureTilesFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Heading_Create = {
    __typename?: 'FeatureTilesFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Heading_Delete = {
    __typename?: 'FeatureTilesFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Heading_Read = {
    __typename?: 'FeatureTilesFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Heading_Update = {
    __typename?: 'FeatureTilesFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Image = {
    __typename?: 'FeatureTilesFields_image';
    create?: Maybe<FeatureTilesFields_Image_Create>;
    delete?: Maybe<FeatureTilesFields_Image_Delete>;
    read?: Maybe<FeatureTilesFields_Image_Read>;
    update?: Maybe<FeatureTilesFields_Image_Update>;
};

export type FeatureTilesFields_Image_Create = {
    __typename?: 'FeatureTilesFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Image_Delete = {
    __typename?: 'FeatureTilesFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Image_Read = {
    __typename?: 'FeatureTilesFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_Image_Update = {
    __typename?: 'FeatureTilesFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_UpdatedAt = {
    __typename?: 'FeatureTilesFields_updatedAt';
    create?: Maybe<FeatureTilesFields_UpdatedAt_Create>;
    delete?: Maybe<FeatureTilesFields_UpdatedAt_Delete>;
    read?: Maybe<FeatureTilesFields_UpdatedAt_Read>;
    update?: Maybe<FeatureTilesFields_UpdatedAt_Update>;
};

export type FeatureTilesFields_UpdatedAt_Create = {
    __typename?: 'FeatureTilesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_UpdatedAt_Delete = {
    __typename?: 'FeatureTilesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_UpdatedAt_Read = {
    __typename?: 'FeatureTilesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesFields_UpdatedAt_Update = {
    __typename?: 'FeatureTilesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeatureTilesReadAccess = {
    __typename?: 'FeatureTilesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureTilesReadDocAccess = {
    __typename?: 'FeatureTilesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureTilesUpdateAccess = {
    __typename?: 'FeatureTilesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeatureTilesUpdateDocAccess = {
    __typename?: 'FeatureTilesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMedia = {
    __typename?: 'FeaturedMedia';
    assetType?: Maybe<FeaturedMedia_AssetType>;
    callToAction?: Maybe<Button>;
    content?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    heading: Scalars['String']['output'];
    headingTag: Scalars['String']['output'];
    id?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Image>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    video?: Maybe<Video>;
};

export type FeaturedMediaContentArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedMediaImageArgs = {
    where?: InputMaybe<FeaturedMedia_Image_Where>;
};

export type FeaturedMediaCreateAccess = {
    __typename?: 'FeaturedMediaCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMediaCreateDocAccess = {
    __typename?: 'FeaturedMediaCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMediaDeleteAccess = {
    __typename?: 'FeaturedMediaDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMediaDeleteDocAccess = {
    __typename?: 'FeaturedMediaDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMediaDocAccessFields = {
    __typename?: 'FeaturedMediaDocAccessFields';
    assetType?: Maybe<FeaturedMediaDocAccessFields_AssetType>;
    callToAction?: Maybe<FeaturedMediaDocAccessFields_CallToAction>;
    content?: Maybe<FeaturedMediaDocAccessFields_Content>;
    createdAt?: Maybe<FeaturedMediaDocAccessFields_CreatedAt>;
    heading?: Maybe<FeaturedMediaDocAccessFields_Heading>;
    headingTag?: Maybe<FeaturedMediaDocAccessFields_HeadingTag>;
    image?: Maybe<FeaturedMediaDocAccessFields_Image>;
    updatedAt?: Maybe<FeaturedMediaDocAccessFields_UpdatedAt>;
    video?: Maybe<FeaturedMediaDocAccessFields_Video>;
};

export type FeaturedMediaDocAccessFields_AssetType = {
    __typename?: 'FeaturedMediaDocAccessFields_assetType';
    create?: Maybe<FeaturedMediaDocAccessFields_AssetType_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_AssetType_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_AssetType_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_AssetType_Update>;
};

export type FeaturedMediaDocAccessFields_AssetType_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_assetType_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_AssetType_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_assetType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_AssetType_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_assetType_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_AssetType_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_assetType_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_CallToAction = {
    __typename?: 'FeaturedMediaDocAccessFields_callToAction';
    create?: Maybe<FeaturedMediaDocAccessFields_CallToAction_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_CallToAction_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_CallToAction_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_CallToAction_Update>;
};

export type FeaturedMediaDocAccessFields_CallToAction_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_CallToAction_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_CallToAction_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_CallToAction_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Content = {
    __typename?: 'FeaturedMediaDocAccessFields_content';
    create?: Maybe<FeaturedMediaDocAccessFields_Content_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_Content_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_Content_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_Content_Update>;
};

export type FeaturedMediaDocAccessFields_Content_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Content_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Content_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Content_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_CreatedAt = {
    __typename?: 'FeaturedMediaDocAccessFields_createdAt';
    create?: Maybe<FeaturedMediaDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_CreatedAt_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_CreatedAt_Update>;
};

export type FeaturedMediaDocAccessFields_CreatedAt_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_CreatedAt_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_CreatedAt_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_CreatedAt_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Heading = {
    __typename?: 'FeaturedMediaDocAccessFields_heading';
    create?: Maybe<FeaturedMediaDocAccessFields_Heading_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_Heading_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_Heading_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_Heading_Update>;
};

export type FeaturedMediaDocAccessFields_HeadingTag = {
    __typename?: 'FeaturedMediaDocAccessFields_headingTag';
    create?: Maybe<FeaturedMediaDocAccessFields_HeadingTag_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_HeadingTag_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_HeadingTag_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_HeadingTag_Update>;
};

export type FeaturedMediaDocAccessFields_HeadingTag_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_HeadingTag_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_HeadingTag_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_HeadingTag_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Heading_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Heading_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Heading_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Heading_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Image = {
    __typename?: 'FeaturedMediaDocAccessFields_image';
    create?: Maybe<FeaturedMediaDocAccessFields_Image_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_Image_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_Image_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_Image_Update>;
};

export type FeaturedMediaDocAccessFields_Image_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Image_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Image_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Image_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_UpdatedAt = {
    __typename?: 'FeaturedMediaDocAccessFields_updatedAt';
    create?: Maybe<FeaturedMediaDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_UpdatedAt_Update>;
};

export type FeaturedMediaDocAccessFields_UpdatedAt_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_UpdatedAt_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_UpdatedAt_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Video = {
    __typename?: 'FeaturedMediaDocAccessFields_video';
    create?: Maybe<FeaturedMediaDocAccessFields_Video_Create>;
    delete?: Maybe<FeaturedMediaDocAccessFields_Video_Delete>;
    read?: Maybe<FeaturedMediaDocAccessFields_Video_Read>;
    update?: Maybe<FeaturedMediaDocAccessFields_Video_Update>;
};

export type FeaturedMediaDocAccessFields_Video_Create = {
    __typename?: 'FeaturedMediaDocAccessFields_video_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Video_Delete = {
    __typename?: 'FeaturedMediaDocAccessFields_video_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Video_Read = {
    __typename?: 'FeaturedMediaDocAccessFields_video_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaDocAccessFields_Video_Update = {
    __typename?: 'FeaturedMediaDocAccessFields_video_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields = {
    __typename?: 'FeaturedMediaFields';
    assetType?: Maybe<FeaturedMediaFields_AssetType>;
    callToAction?: Maybe<FeaturedMediaFields_CallToAction>;
    content?: Maybe<FeaturedMediaFields_Content>;
    createdAt?: Maybe<FeaturedMediaFields_CreatedAt>;
    heading?: Maybe<FeaturedMediaFields_Heading>;
    headingTag?: Maybe<FeaturedMediaFields_HeadingTag>;
    image?: Maybe<FeaturedMediaFields_Image>;
    updatedAt?: Maybe<FeaturedMediaFields_UpdatedAt>;
    video?: Maybe<FeaturedMediaFields_Video>;
};

export type FeaturedMediaFields_AssetType = {
    __typename?: 'FeaturedMediaFields_assetType';
    create?: Maybe<FeaturedMediaFields_AssetType_Create>;
    delete?: Maybe<FeaturedMediaFields_AssetType_Delete>;
    read?: Maybe<FeaturedMediaFields_AssetType_Read>;
    update?: Maybe<FeaturedMediaFields_AssetType_Update>;
};

export type FeaturedMediaFields_AssetType_Create = {
    __typename?: 'FeaturedMediaFields_assetType_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_AssetType_Delete = {
    __typename?: 'FeaturedMediaFields_assetType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_AssetType_Read = {
    __typename?: 'FeaturedMediaFields_assetType_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_AssetType_Update = {
    __typename?: 'FeaturedMediaFields_assetType_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_CallToAction = {
    __typename?: 'FeaturedMediaFields_callToAction';
    create?: Maybe<FeaturedMediaFields_CallToAction_Create>;
    delete?: Maybe<FeaturedMediaFields_CallToAction_Delete>;
    read?: Maybe<FeaturedMediaFields_CallToAction_Read>;
    update?: Maybe<FeaturedMediaFields_CallToAction_Update>;
};

export type FeaturedMediaFields_CallToAction_Create = {
    __typename?: 'FeaturedMediaFields_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_CallToAction_Delete = {
    __typename?: 'FeaturedMediaFields_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_CallToAction_Read = {
    __typename?: 'FeaturedMediaFields_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_CallToAction_Update = {
    __typename?: 'FeaturedMediaFields_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Content = {
    __typename?: 'FeaturedMediaFields_content';
    create?: Maybe<FeaturedMediaFields_Content_Create>;
    delete?: Maybe<FeaturedMediaFields_Content_Delete>;
    read?: Maybe<FeaturedMediaFields_Content_Read>;
    update?: Maybe<FeaturedMediaFields_Content_Update>;
};

export type FeaturedMediaFields_Content_Create = {
    __typename?: 'FeaturedMediaFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Content_Delete = {
    __typename?: 'FeaturedMediaFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Content_Read = {
    __typename?: 'FeaturedMediaFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Content_Update = {
    __typename?: 'FeaturedMediaFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_CreatedAt = {
    __typename?: 'FeaturedMediaFields_createdAt';
    create?: Maybe<FeaturedMediaFields_CreatedAt_Create>;
    delete?: Maybe<FeaturedMediaFields_CreatedAt_Delete>;
    read?: Maybe<FeaturedMediaFields_CreatedAt_Read>;
    update?: Maybe<FeaturedMediaFields_CreatedAt_Update>;
};

export type FeaturedMediaFields_CreatedAt_Create = {
    __typename?: 'FeaturedMediaFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_CreatedAt_Delete = {
    __typename?: 'FeaturedMediaFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_CreatedAt_Read = {
    __typename?: 'FeaturedMediaFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_CreatedAt_Update = {
    __typename?: 'FeaturedMediaFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Heading = {
    __typename?: 'FeaturedMediaFields_heading';
    create?: Maybe<FeaturedMediaFields_Heading_Create>;
    delete?: Maybe<FeaturedMediaFields_Heading_Delete>;
    read?: Maybe<FeaturedMediaFields_Heading_Read>;
    update?: Maybe<FeaturedMediaFields_Heading_Update>;
};

export type FeaturedMediaFields_HeadingTag = {
    __typename?: 'FeaturedMediaFields_headingTag';
    create?: Maybe<FeaturedMediaFields_HeadingTag_Create>;
    delete?: Maybe<FeaturedMediaFields_HeadingTag_Delete>;
    read?: Maybe<FeaturedMediaFields_HeadingTag_Read>;
    update?: Maybe<FeaturedMediaFields_HeadingTag_Update>;
};

export type FeaturedMediaFields_HeadingTag_Create = {
    __typename?: 'FeaturedMediaFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_HeadingTag_Delete = {
    __typename?: 'FeaturedMediaFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_HeadingTag_Read = {
    __typename?: 'FeaturedMediaFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_HeadingTag_Update = {
    __typename?: 'FeaturedMediaFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Heading_Create = {
    __typename?: 'FeaturedMediaFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Heading_Delete = {
    __typename?: 'FeaturedMediaFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Heading_Read = {
    __typename?: 'FeaturedMediaFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Heading_Update = {
    __typename?: 'FeaturedMediaFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Image = {
    __typename?: 'FeaturedMediaFields_image';
    create?: Maybe<FeaturedMediaFields_Image_Create>;
    delete?: Maybe<FeaturedMediaFields_Image_Delete>;
    read?: Maybe<FeaturedMediaFields_Image_Read>;
    update?: Maybe<FeaturedMediaFields_Image_Update>;
};

export type FeaturedMediaFields_Image_Create = {
    __typename?: 'FeaturedMediaFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Image_Delete = {
    __typename?: 'FeaturedMediaFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Image_Read = {
    __typename?: 'FeaturedMediaFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Image_Update = {
    __typename?: 'FeaturedMediaFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_UpdatedAt = {
    __typename?: 'FeaturedMediaFields_updatedAt';
    create?: Maybe<FeaturedMediaFields_UpdatedAt_Create>;
    delete?: Maybe<FeaturedMediaFields_UpdatedAt_Delete>;
    read?: Maybe<FeaturedMediaFields_UpdatedAt_Read>;
    update?: Maybe<FeaturedMediaFields_UpdatedAt_Update>;
};

export type FeaturedMediaFields_UpdatedAt_Create = {
    __typename?: 'FeaturedMediaFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_UpdatedAt_Delete = {
    __typename?: 'FeaturedMediaFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_UpdatedAt_Read = {
    __typename?: 'FeaturedMediaFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_UpdatedAt_Update = {
    __typename?: 'FeaturedMediaFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Video = {
    __typename?: 'FeaturedMediaFields_video';
    create?: Maybe<FeaturedMediaFields_Video_Create>;
    delete?: Maybe<FeaturedMediaFields_Video_Delete>;
    read?: Maybe<FeaturedMediaFields_Video_Read>;
    update?: Maybe<FeaturedMediaFields_Video_Update>;
};

export type FeaturedMediaFields_Video_Create = {
    __typename?: 'FeaturedMediaFields_video_Create';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Video_Delete = {
    __typename?: 'FeaturedMediaFields_video_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Video_Read = {
    __typename?: 'FeaturedMediaFields_video_Read';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaFields_Video_Update = {
    __typename?: 'FeaturedMediaFields_video_Update';
    permission: Scalars['Boolean']['output'];
};

export type FeaturedMediaReadAccess = {
    __typename?: 'FeaturedMediaReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMediaReadDocAccess = {
    __typename?: 'FeaturedMediaReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMediaUpdateAccess = {
    __typename?: 'FeaturedMediaUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMediaUpdateDocAccess = {
    __typename?: 'FeaturedMediaUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FeaturedMedia_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeaturedMedia_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedMedia_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedMedia_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedMedia_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedMedia_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedMedia_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeaturedMedia_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<FeaturedMedia_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<FeaturedMedia_Image_Where_Or>>>;
    alt?: InputMaybe<FeaturedMedia_Image_Alt_Operator>;
    createdAt?: InputMaybe<FeaturedMedia_Image_CreatedAt_Operator>;
    filename?: InputMaybe<FeaturedMedia_Image_Filename_Operator>;
    filesize?: InputMaybe<FeaturedMedia_Image_Filesize_Operator>;
    height?: InputMaybe<FeaturedMedia_Image_Height_Operator>;
    id?: InputMaybe<FeaturedMedia_Image_Id_Operator>;
    mimeType?: InputMaybe<FeaturedMedia_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<FeaturedMedia_Image_UpdatedAt_Operator>;
    url?: InputMaybe<FeaturedMedia_Image_Url_Operator>;
    width?: InputMaybe<FeaturedMedia_Image_Width_Operator>;
};

export type FeaturedMedia_Image_Where_And = {
    alt?: InputMaybe<FeaturedMedia_Image_Alt_Operator>;
    createdAt?: InputMaybe<FeaturedMedia_Image_CreatedAt_Operator>;
    filename?: InputMaybe<FeaturedMedia_Image_Filename_Operator>;
    filesize?: InputMaybe<FeaturedMedia_Image_Filesize_Operator>;
    height?: InputMaybe<FeaturedMedia_Image_Height_Operator>;
    id?: InputMaybe<FeaturedMedia_Image_Id_Operator>;
    mimeType?: InputMaybe<FeaturedMedia_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<FeaturedMedia_Image_UpdatedAt_Operator>;
    url?: InputMaybe<FeaturedMedia_Image_Url_Operator>;
    width?: InputMaybe<FeaturedMedia_Image_Width_Operator>;
};

export type FeaturedMedia_Image_Where_Or = {
    alt?: InputMaybe<FeaturedMedia_Image_Alt_Operator>;
    createdAt?: InputMaybe<FeaturedMedia_Image_CreatedAt_Operator>;
    filename?: InputMaybe<FeaturedMedia_Image_Filename_Operator>;
    filesize?: InputMaybe<FeaturedMedia_Image_Filesize_Operator>;
    height?: InputMaybe<FeaturedMedia_Image_Height_Operator>;
    id?: InputMaybe<FeaturedMedia_Image_Id_Operator>;
    mimeType?: InputMaybe<FeaturedMedia_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<FeaturedMedia_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<FeaturedMedia_Image_UpdatedAt_Operator>;
    url?: InputMaybe<FeaturedMedia_Image_Url_Operator>;
    width?: InputMaybe<FeaturedMedia_Image_Width_Operator>;
};

export type FeaturedMedia_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type FeaturedMedia_AssetType = 'image' | 'video' | '%future added value';

export type FeaturedMedia_AssetType_Input =
    | 'image'
    | 'video'
    | '%future added value';

export type FeaturedMedia_AssetType_Operator = {
    all?: InputMaybe<Array<InputMaybe<FeaturedMedia_AssetType_Input>>>;
    equals?: InputMaybe<FeaturedMedia_AssetType_Input>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<FeaturedMedia_AssetType_Input>>>;
    not_equals?: InputMaybe<FeaturedMedia_AssetType_Input>;
    not_in?: InputMaybe<Array<InputMaybe<FeaturedMedia_AssetType_Input>>>;
};

export type FeaturedMedia_CallToAction_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Content_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type FeaturedMedia_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeaturedMedia_HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type FeaturedMedia_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FeaturedMedia_Video_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedMedia_Where = {
    AND?: InputMaybe<Array<InputMaybe<FeaturedMedia_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<FeaturedMedia_Where_Or>>>;
    assetType?: InputMaybe<FeaturedMedia_AssetType_Operator>;
    callToAction?: InputMaybe<FeaturedMedia_CallToAction_Operator>;
    content?: InputMaybe<FeaturedMedia_Content_Operator>;
    createdAt?: InputMaybe<FeaturedMedia_CreatedAt_Operator>;
    heading?: InputMaybe<FeaturedMedia_Heading_Operator>;
    headingTag?: InputMaybe<FeaturedMedia_HeadingTag_Operator>;
    id?: InputMaybe<FeaturedMedia_Id_Operator>;
    image?: InputMaybe<FeaturedMedia_Image_Operator>;
    updatedAt?: InputMaybe<FeaturedMedia_UpdatedAt_Operator>;
    video?: InputMaybe<FeaturedMedia_Video_Operator>;
};

export type FeaturedMedia_Where_And = {
    assetType?: InputMaybe<FeaturedMedia_AssetType_Operator>;
    callToAction?: InputMaybe<FeaturedMedia_CallToAction_Operator>;
    content?: InputMaybe<FeaturedMedia_Content_Operator>;
    createdAt?: InputMaybe<FeaturedMedia_CreatedAt_Operator>;
    heading?: InputMaybe<FeaturedMedia_Heading_Operator>;
    headingTag?: InputMaybe<FeaturedMedia_HeadingTag_Operator>;
    id?: InputMaybe<FeaturedMedia_Id_Operator>;
    image?: InputMaybe<FeaturedMedia_Image_Operator>;
    updatedAt?: InputMaybe<FeaturedMedia_UpdatedAt_Operator>;
    video?: InputMaybe<FeaturedMedia_Video_Operator>;
};

export type FeaturedMedia_Where_Or = {
    assetType?: InputMaybe<FeaturedMedia_AssetType_Operator>;
    callToAction?: InputMaybe<FeaturedMedia_CallToAction_Operator>;
    content?: InputMaybe<FeaturedMedia_Content_Operator>;
    createdAt?: InputMaybe<FeaturedMedia_CreatedAt_Operator>;
    heading?: InputMaybe<FeaturedMedia_Heading_Operator>;
    headingTag?: InputMaybe<FeaturedMedia_HeadingTag_Operator>;
    id?: InputMaybe<FeaturedMedia_Id_Operator>;
    image?: InputMaybe<FeaturedMedia_Image_Operator>;
    updatedAt?: InputMaybe<FeaturedMedia_UpdatedAt_Operator>;
    video?: InputMaybe<FeaturedMedia_Video_Operator>;
};

export type FeaturedMedias = {
    __typename?: 'FeaturedMedias';
    docs?: Maybe<Array<Maybe<FeaturedMedia>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Footer = {
    __typename?: 'Footer';
    copyrightText?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    menuItems?: Maybe<Array<Footer_MenuItems>>;
    socialLinks?: Maybe<Array<Footer_SocialLinks>>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FooterDocAccessFields = {
    __typename?: 'FooterDocAccessFields';
    copyrightText?: Maybe<FooterDocAccessFields_CopyrightText>;
    createdAt?: Maybe<FooterDocAccessFields_CreatedAt>;
    menuItems?: Maybe<FooterDocAccessFields_MenuItems>;
    socialLinks?: Maybe<FooterDocAccessFields_SocialLinks>;
    updatedAt?: Maybe<FooterDocAccessFields_UpdatedAt>;
};

export type FooterDocAccessFields_CopyrightText = {
    __typename?: 'FooterDocAccessFields_copyrightText';
    create?: Maybe<FooterDocAccessFields_CopyrightText_Create>;
    delete?: Maybe<FooterDocAccessFields_CopyrightText_Delete>;
    read?: Maybe<FooterDocAccessFields_CopyrightText_Read>;
    update?: Maybe<FooterDocAccessFields_CopyrightText_Update>;
};

export type FooterDocAccessFields_CopyrightText_Create = {
    __typename?: 'FooterDocAccessFields_copyrightText_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CopyrightText_Delete = {
    __typename?: 'FooterDocAccessFields_copyrightText_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CopyrightText_Read = {
    __typename?: 'FooterDocAccessFields_copyrightText_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CopyrightText_Update = {
    __typename?: 'FooterDocAccessFields_copyrightText_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt = {
    __typename?: 'FooterDocAccessFields_createdAt';
    create?: Maybe<FooterDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<FooterDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<FooterDocAccessFields_CreatedAt_Read>;
    update?: Maybe<FooterDocAccessFields_CreatedAt_Update>;
};

export type FooterDocAccessFields_CreatedAt_Create = {
    __typename?: 'FooterDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Delete = {
    __typename?: 'FooterDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Read = {
    __typename?: 'FooterDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_CreatedAt_Update = {
    __typename?: 'FooterDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems = {
    __typename?: 'FooterDocAccessFields_menuItems';
    create?: Maybe<FooterDocAccessFields_MenuItems_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_Delete>;
    fields?: Maybe<FooterDocAccessFields_MenuItems_Fields>;
    read?: Maybe<FooterDocAccessFields_MenuItems_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_Update>;
};

export type FooterDocAccessFields_MenuItems_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Fields = {
    __typename?: 'FooterDocAccessFields_menuItems_Fields';
    externalLink?: Maybe<FooterDocAccessFields_MenuItems_ExternalLink>;
    id?: Maybe<FooterDocAccessFields_MenuItems_Id>;
    internalCustomLabel?: Maybe<FooterDocAccessFields_MenuItems_InternalCustomLabel>;
    internalLink?: Maybe<FooterDocAccessFields_MenuItems_InternalLink>;
    label?: Maybe<FooterDocAccessFields_MenuItems_Label>;
    linkType?: Maybe<FooterDocAccessFields_MenuItems_LinkType>;
    overridePageName?: Maybe<FooterDocAccessFields_MenuItems_OverridePageName>;
    submenuItems?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems>;
};

export type FooterDocAccessFields_MenuItems_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_ExternalLink = {
    __typename?: 'FooterDocAccessFields_menuItems_externalLink';
    create?: Maybe<FooterDocAccessFields_MenuItems_ExternalLink_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_ExternalLink_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_ExternalLink_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_ExternalLink_Update>;
};

export type FooterDocAccessFields_MenuItems_ExternalLink_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_ExternalLink_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_ExternalLink_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_ExternalLink_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Id = {
    __typename?: 'FooterDocAccessFields_menuItems_id';
    create?: Maybe<FooterDocAccessFields_MenuItems_Id_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_Id_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_Id_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_Id_Update>;
};

export type FooterDocAccessFields_MenuItems_Id_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Id_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Id_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Id_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_InternalCustomLabel = {
    __typename?: 'FooterDocAccessFields_menuItems_internalCustomLabel';
    create?: Maybe<FooterDocAccessFields_MenuItems_InternalCustomLabel_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_InternalCustomLabel_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_InternalCustomLabel_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_InternalCustomLabel_Update>;
};

export type FooterDocAccessFields_MenuItems_InternalCustomLabel_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_internalCustomLabel_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_InternalCustomLabel_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_internalCustomLabel_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_InternalCustomLabel_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_internalCustomLabel_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_InternalCustomLabel_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_internalCustomLabel_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_InternalLink = {
    __typename?: 'FooterDocAccessFields_menuItems_internalLink';
    create?: Maybe<FooterDocAccessFields_MenuItems_InternalLink_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_InternalLink_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_InternalLink_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_InternalLink_Update>;
};

export type FooterDocAccessFields_MenuItems_InternalLink_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_InternalLink_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_InternalLink_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_InternalLink_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Label = {
    __typename?: 'FooterDocAccessFields_menuItems_label';
    create?: Maybe<FooterDocAccessFields_MenuItems_Label_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_Label_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_Label_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_Label_Update>;
};

export type FooterDocAccessFields_MenuItems_Label_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Label_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Label_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_Label_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_LinkType = {
    __typename?: 'FooterDocAccessFields_menuItems_linkType';
    create?: Maybe<FooterDocAccessFields_MenuItems_LinkType_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_LinkType_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_LinkType_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_LinkType_Update>;
};

export type FooterDocAccessFields_MenuItems_LinkType_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_LinkType_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_LinkType_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_LinkType_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_OverridePageName = {
    __typename?: 'FooterDocAccessFields_menuItems_overridePageName';
    create?: Maybe<FooterDocAccessFields_MenuItems_OverridePageName_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_OverridePageName_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_OverridePageName_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_OverridePageName_Update>;
};

export type FooterDocAccessFields_MenuItems_OverridePageName_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_overridePageName_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_OverridePageName_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_overridePageName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_OverridePageName_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_overridePageName_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_OverridePageName_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_overridePageName_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems';
    create?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Delete>;
    fields?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Fields>;
    read?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Update>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Fields = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_Fields';
    externalLink?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink>;
    id?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Id>;
    internalCustomLabel?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel>;
    internalLink?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink>;
    label?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Label>;
    linkType?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_LinkType>;
    overridePageName?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_externalLink';
    create?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Update>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Id = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_id';
    create?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Id_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Id_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Id_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Id_Update>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Id_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Id_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Id_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Id_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalCustomLabel';
    create?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Update>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Create =
    {
        __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalCustomLabel_Create';
        permission: Scalars['Boolean']['output'];
    };

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Delete =
    {
        __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalCustomLabel_Delete';
        permission: Scalars['Boolean']['output'];
    };

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Read =
    {
        __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalCustomLabel_Read';
        permission: Scalars['Boolean']['output'];
    };

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Update =
    {
        __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalCustomLabel_Update';
        permission: Scalars['Boolean']['output'];
    };

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalLink';
    create?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink_Update>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_InternalLink_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Label = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_label';
    create?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Label_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Label_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Label_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_Label_Update>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Label_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Label_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Label_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_Label_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_LinkType = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_linkType';
    create?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_LinkType_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_LinkType_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_LinkType_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_LinkType_Update>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_LinkType_Create = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_LinkType_Delete = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_LinkType_Read = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_LinkType_Update = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName = {
    __typename?: 'FooterDocAccessFields_menuItems_submenuItems_overridePageName';
    create?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Create>;
    delete?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Delete>;
    read?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Read>;
    update?: Maybe<FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Update>;
};

export type FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Create =
    {
        __typename?: 'FooterDocAccessFields_menuItems_submenuItems_overridePageName_Create';
        permission: Scalars['Boolean']['output'];
    };

export type FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Delete =
    {
        __typename?: 'FooterDocAccessFields_menuItems_submenuItems_overridePageName_Delete';
        permission: Scalars['Boolean']['output'];
    };

export type FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Read =
    {
        __typename?: 'FooterDocAccessFields_menuItems_submenuItems_overridePageName_Read';
        permission: Scalars['Boolean']['output'];
    };

export type FooterDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Update =
    {
        __typename?: 'FooterDocAccessFields_menuItems_submenuItems_overridePageName_Update';
        permission: Scalars['Boolean']['output'];
    };

export type FooterDocAccessFields_SocialLinks = {
    __typename?: 'FooterDocAccessFields_socialLinks';
    create?: Maybe<FooterDocAccessFields_SocialLinks_Create>;
    delete?: Maybe<FooterDocAccessFields_SocialLinks_Delete>;
    fields?: Maybe<FooterDocAccessFields_SocialLinks_Fields>;
    read?: Maybe<FooterDocAccessFields_SocialLinks_Read>;
    update?: Maybe<FooterDocAccessFields_SocialLinks_Update>;
};

export type FooterDocAccessFields_SocialLinks_Create = {
    __typename?: 'FooterDocAccessFields_socialLinks_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Delete = {
    __typename?: 'FooterDocAccessFields_socialLinks_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Fields = {
    __typename?: 'FooterDocAccessFields_socialLinks_Fields';
    icon?: Maybe<FooterDocAccessFields_SocialLinks_Icon>;
    id?: Maybe<FooterDocAccessFields_SocialLinks_Id>;
    url?: Maybe<FooterDocAccessFields_SocialLinks_Url>;
};

export type FooterDocAccessFields_SocialLinks_Read = {
    __typename?: 'FooterDocAccessFields_socialLinks_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Update = {
    __typename?: 'FooterDocAccessFields_socialLinks_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Icon = {
    __typename?: 'FooterDocAccessFields_socialLinks_icon';
    create?: Maybe<FooterDocAccessFields_SocialLinks_Icon_Create>;
    delete?: Maybe<FooterDocAccessFields_SocialLinks_Icon_Delete>;
    read?: Maybe<FooterDocAccessFields_SocialLinks_Icon_Read>;
    update?: Maybe<FooterDocAccessFields_SocialLinks_Icon_Update>;
};

export type FooterDocAccessFields_SocialLinks_Icon_Create = {
    __typename?: 'FooterDocAccessFields_socialLinks_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Icon_Delete = {
    __typename?: 'FooterDocAccessFields_socialLinks_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Icon_Read = {
    __typename?: 'FooterDocAccessFields_socialLinks_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Icon_Update = {
    __typename?: 'FooterDocAccessFields_socialLinks_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Id = {
    __typename?: 'FooterDocAccessFields_socialLinks_id';
    create?: Maybe<FooterDocAccessFields_SocialLinks_Id_Create>;
    delete?: Maybe<FooterDocAccessFields_SocialLinks_Id_Delete>;
    read?: Maybe<FooterDocAccessFields_SocialLinks_Id_Read>;
    update?: Maybe<FooterDocAccessFields_SocialLinks_Id_Update>;
};

export type FooterDocAccessFields_SocialLinks_Id_Create = {
    __typename?: 'FooterDocAccessFields_socialLinks_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Id_Delete = {
    __typename?: 'FooterDocAccessFields_socialLinks_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Id_Read = {
    __typename?: 'FooterDocAccessFields_socialLinks_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Id_Update = {
    __typename?: 'FooterDocAccessFields_socialLinks_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Url = {
    __typename?: 'FooterDocAccessFields_socialLinks_url';
    create?: Maybe<FooterDocAccessFields_SocialLinks_Url_Create>;
    delete?: Maybe<FooterDocAccessFields_SocialLinks_Url_Delete>;
    read?: Maybe<FooterDocAccessFields_SocialLinks_Url_Read>;
    update?: Maybe<FooterDocAccessFields_SocialLinks_Url_Update>;
};

export type FooterDocAccessFields_SocialLinks_Url_Create = {
    __typename?: 'FooterDocAccessFields_socialLinks_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Url_Delete = {
    __typename?: 'FooterDocAccessFields_socialLinks_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Url_Read = {
    __typename?: 'FooterDocAccessFields_socialLinks_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_SocialLinks_Url_Update = {
    __typename?: 'FooterDocAccessFields_socialLinks_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt = {
    __typename?: 'FooterDocAccessFields_updatedAt';
    create?: Maybe<FooterDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<FooterDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<FooterDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<FooterDocAccessFields_UpdatedAt_Update>;
};

export type FooterDocAccessFields_UpdatedAt_Create = {
    __typename?: 'FooterDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'FooterDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Read = {
    __typename?: 'FooterDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterDocAccessFields_UpdatedAt_Update = {
    __typename?: 'FooterDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields = {
    __typename?: 'FooterFields';
    copyrightText?: Maybe<FooterFields_CopyrightText>;
    createdAt?: Maybe<FooterFields_CreatedAt>;
    menuItems?: Maybe<FooterFields_MenuItems>;
    socialLinks?: Maybe<FooterFields_SocialLinks>;
    updatedAt?: Maybe<FooterFields_UpdatedAt>;
};

export type FooterFields_CopyrightText = {
    __typename?: 'FooterFields_copyrightText';
    create?: Maybe<FooterFields_CopyrightText_Create>;
    delete?: Maybe<FooterFields_CopyrightText_Delete>;
    read?: Maybe<FooterFields_CopyrightText_Read>;
    update?: Maybe<FooterFields_CopyrightText_Update>;
};

export type FooterFields_CopyrightText_Create = {
    __typename?: 'FooterFields_copyrightText_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_CopyrightText_Delete = {
    __typename?: 'FooterFields_copyrightText_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_CopyrightText_Read = {
    __typename?: 'FooterFields_copyrightText_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_CopyrightText_Update = {
    __typename?: 'FooterFields_copyrightText_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt = {
    __typename?: 'FooterFields_createdAt';
    create?: Maybe<FooterFields_CreatedAt_Create>;
    delete?: Maybe<FooterFields_CreatedAt_Delete>;
    read?: Maybe<FooterFields_CreatedAt_Read>;
    update?: Maybe<FooterFields_CreatedAt_Update>;
};

export type FooterFields_CreatedAt_Create = {
    __typename?: 'FooterFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Delete = {
    __typename?: 'FooterFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Read = {
    __typename?: 'FooterFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_CreatedAt_Update = {
    __typename?: 'FooterFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems = {
    __typename?: 'FooterFields_menuItems';
    create?: Maybe<FooterFields_MenuItems_Create>;
    delete?: Maybe<FooterFields_MenuItems_Delete>;
    fields?: Maybe<FooterFields_MenuItems_Fields>;
    read?: Maybe<FooterFields_MenuItems_Read>;
    update?: Maybe<FooterFields_MenuItems_Update>;
};

export type FooterFields_MenuItems_Create = {
    __typename?: 'FooterFields_menuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Delete = {
    __typename?: 'FooterFields_menuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Fields = {
    __typename?: 'FooterFields_menuItems_Fields';
    externalLink?: Maybe<FooterFields_MenuItems_ExternalLink>;
    id?: Maybe<FooterFields_MenuItems_Id>;
    internalCustomLabel?: Maybe<FooterFields_MenuItems_InternalCustomLabel>;
    internalLink?: Maybe<FooterFields_MenuItems_InternalLink>;
    label?: Maybe<FooterFields_MenuItems_Label>;
    linkType?: Maybe<FooterFields_MenuItems_LinkType>;
    overridePageName?: Maybe<FooterFields_MenuItems_OverridePageName>;
    submenuItems?: Maybe<FooterFields_MenuItems_SubmenuItems>;
};

export type FooterFields_MenuItems_Read = {
    __typename?: 'FooterFields_menuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Update = {
    __typename?: 'FooterFields_menuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_ExternalLink = {
    __typename?: 'FooterFields_menuItems_externalLink';
    create?: Maybe<FooterFields_MenuItems_ExternalLink_Create>;
    delete?: Maybe<FooterFields_MenuItems_ExternalLink_Delete>;
    read?: Maybe<FooterFields_MenuItems_ExternalLink_Read>;
    update?: Maybe<FooterFields_MenuItems_ExternalLink_Update>;
};

export type FooterFields_MenuItems_ExternalLink_Create = {
    __typename?: 'FooterFields_menuItems_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_ExternalLink_Delete = {
    __typename?: 'FooterFields_menuItems_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_ExternalLink_Read = {
    __typename?: 'FooterFields_menuItems_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_ExternalLink_Update = {
    __typename?: 'FooterFields_menuItems_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Id = {
    __typename?: 'FooterFields_menuItems_id';
    create?: Maybe<FooterFields_MenuItems_Id_Create>;
    delete?: Maybe<FooterFields_MenuItems_Id_Delete>;
    read?: Maybe<FooterFields_MenuItems_Id_Read>;
    update?: Maybe<FooterFields_MenuItems_Id_Update>;
};

export type FooterFields_MenuItems_Id_Create = {
    __typename?: 'FooterFields_menuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Id_Delete = {
    __typename?: 'FooterFields_menuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Id_Read = {
    __typename?: 'FooterFields_menuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Id_Update = {
    __typename?: 'FooterFields_menuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_InternalCustomLabel = {
    __typename?: 'FooterFields_menuItems_internalCustomLabel';
    create?: Maybe<FooterFields_MenuItems_InternalCustomLabel_Create>;
    delete?: Maybe<FooterFields_MenuItems_InternalCustomLabel_Delete>;
    read?: Maybe<FooterFields_MenuItems_InternalCustomLabel_Read>;
    update?: Maybe<FooterFields_MenuItems_InternalCustomLabel_Update>;
};

export type FooterFields_MenuItems_InternalCustomLabel_Create = {
    __typename?: 'FooterFields_menuItems_internalCustomLabel_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_InternalCustomLabel_Delete = {
    __typename?: 'FooterFields_menuItems_internalCustomLabel_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_InternalCustomLabel_Read = {
    __typename?: 'FooterFields_menuItems_internalCustomLabel_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_InternalCustomLabel_Update = {
    __typename?: 'FooterFields_menuItems_internalCustomLabel_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_InternalLink = {
    __typename?: 'FooterFields_menuItems_internalLink';
    create?: Maybe<FooterFields_MenuItems_InternalLink_Create>;
    delete?: Maybe<FooterFields_MenuItems_InternalLink_Delete>;
    read?: Maybe<FooterFields_MenuItems_InternalLink_Read>;
    update?: Maybe<FooterFields_MenuItems_InternalLink_Update>;
};

export type FooterFields_MenuItems_InternalLink_Create = {
    __typename?: 'FooterFields_menuItems_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_InternalLink_Delete = {
    __typename?: 'FooterFields_menuItems_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_InternalLink_Read = {
    __typename?: 'FooterFields_menuItems_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_InternalLink_Update = {
    __typename?: 'FooterFields_menuItems_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Label = {
    __typename?: 'FooterFields_menuItems_label';
    create?: Maybe<FooterFields_MenuItems_Label_Create>;
    delete?: Maybe<FooterFields_MenuItems_Label_Delete>;
    read?: Maybe<FooterFields_MenuItems_Label_Read>;
    update?: Maybe<FooterFields_MenuItems_Label_Update>;
};

export type FooterFields_MenuItems_Label_Create = {
    __typename?: 'FooterFields_menuItems_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Label_Delete = {
    __typename?: 'FooterFields_menuItems_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Label_Read = {
    __typename?: 'FooterFields_menuItems_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_Label_Update = {
    __typename?: 'FooterFields_menuItems_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_LinkType = {
    __typename?: 'FooterFields_menuItems_linkType';
    create?: Maybe<FooterFields_MenuItems_LinkType_Create>;
    delete?: Maybe<FooterFields_MenuItems_LinkType_Delete>;
    read?: Maybe<FooterFields_MenuItems_LinkType_Read>;
    update?: Maybe<FooterFields_MenuItems_LinkType_Update>;
};

export type FooterFields_MenuItems_LinkType_Create = {
    __typename?: 'FooterFields_menuItems_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_LinkType_Delete = {
    __typename?: 'FooterFields_menuItems_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_LinkType_Read = {
    __typename?: 'FooterFields_menuItems_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_LinkType_Update = {
    __typename?: 'FooterFields_menuItems_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_OverridePageName = {
    __typename?: 'FooterFields_menuItems_overridePageName';
    create?: Maybe<FooterFields_MenuItems_OverridePageName_Create>;
    delete?: Maybe<FooterFields_MenuItems_OverridePageName_Delete>;
    read?: Maybe<FooterFields_MenuItems_OverridePageName_Read>;
    update?: Maybe<FooterFields_MenuItems_OverridePageName_Update>;
};

export type FooterFields_MenuItems_OverridePageName_Create = {
    __typename?: 'FooterFields_menuItems_overridePageName_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_OverridePageName_Delete = {
    __typename?: 'FooterFields_menuItems_overridePageName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_OverridePageName_Read = {
    __typename?: 'FooterFields_menuItems_overridePageName_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_OverridePageName_Update = {
    __typename?: 'FooterFields_menuItems_overridePageName_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems = {
    __typename?: 'FooterFields_menuItems_submenuItems';
    create?: Maybe<FooterFields_MenuItems_SubmenuItems_Create>;
    delete?: Maybe<FooterFields_MenuItems_SubmenuItems_Delete>;
    fields?: Maybe<FooterFields_MenuItems_SubmenuItems_Fields>;
    read?: Maybe<FooterFields_MenuItems_SubmenuItems_Read>;
    update?: Maybe<FooterFields_MenuItems_SubmenuItems_Update>;
};

export type FooterFields_MenuItems_SubmenuItems_Create = {
    __typename?: 'FooterFields_menuItems_submenuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Delete = {
    __typename?: 'FooterFields_menuItems_submenuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Fields = {
    __typename?: 'FooterFields_menuItems_submenuItems_Fields';
    externalLink?: Maybe<FooterFields_MenuItems_SubmenuItems_ExternalLink>;
    id?: Maybe<FooterFields_MenuItems_SubmenuItems_Id>;
    internalCustomLabel?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalCustomLabel>;
    internalLink?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalLink>;
    label?: Maybe<FooterFields_MenuItems_SubmenuItems_Label>;
    linkType?: Maybe<FooterFields_MenuItems_SubmenuItems_LinkType>;
    overridePageName?: Maybe<FooterFields_MenuItems_SubmenuItems_OverridePageName>;
};

export type FooterFields_MenuItems_SubmenuItems_Read = {
    __typename?: 'FooterFields_menuItems_submenuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Update = {
    __typename?: 'FooterFields_menuItems_submenuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_ExternalLink = {
    __typename?: 'FooterFields_menuItems_submenuItems_externalLink';
    create?: Maybe<FooterFields_MenuItems_SubmenuItems_ExternalLink_Create>;
    delete?: Maybe<FooterFields_MenuItems_SubmenuItems_ExternalLink_Delete>;
    read?: Maybe<FooterFields_MenuItems_SubmenuItems_ExternalLink_Read>;
    update?: Maybe<FooterFields_MenuItems_SubmenuItems_ExternalLink_Update>;
};

export type FooterFields_MenuItems_SubmenuItems_ExternalLink_Create = {
    __typename?: 'FooterFields_menuItems_submenuItems_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_ExternalLink_Delete = {
    __typename?: 'FooterFields_menuItems_submenuItems_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_ExternalLink_Read = {
    __typename?: 'FooterFields_menuItems_submenuItems_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_ExternalLink_Update = {
    __typename?: 'FooterFields_menuItems_submenuItems_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Id = {
    __typename?: 'FooterFields_menuItems_submenuItems_id';
    create?: Maybe<FooterFields_MenuItems_SubmenuItems_Id_Create>;
    delete?: Maybe<FooterFields_MenuItems_SubmenuItems_Id_Delete>;
    read?: Maybe<FooterFields_MenuItems_SubmenuItems_Id_Read>;
    update?: Maybe<FooterFields_MenuItems_SubmenuItems_Id_Update>;
};

export type FooterFields_MenuItems_SubmenuItems_Id_Create = {
    __typename?: 'FooterFields_menuItems_submenuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Id_Delete = {
    __typename?: 'FooterFields_menuItems_submenuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Id_Read = {
    __typename?: 'FooterFields_menuItems_submenuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Id_Update = {
    __typename?: 'FooterFields_menuItems_submenuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_InternalCustomLabel = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalCustomLabel';
    create?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalCustomLabel_Create>;
    delete?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalCustomLabel_Delete>;
    read?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalCustomLabel_Read>;
    update?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalCustomLabel_Update>;
};

export type FooterFields_MenuItems_SubmenuItems_InternalCustomLabel_Create = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalCustomLabel_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_InternalCustomLabel_Delete = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalCustomLabel_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_InternalCustomLabel_Read = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalCustomLabel_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_InternalCustomLabel_Update = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalCustomLabel_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_InternalLink = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalLink';
    create?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalLink_Create>;
    delete?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalLink_Delete>;
    read?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalLink_Read>;
    update?: Maybe<FooterFields_MenuItems_SubmenuItems_InternalLink_Update>;
};

export type FooterFields_MenuItems_SubmenuItems_InternalLink_Create = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_InternalLink_Delete = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_InternalLink_Read = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_InternalLink_Update = {
    __typename?: 'FooterFields_menuItems_submenuItems_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Label = {
    __typename?: 'FooterFields_menuItems_submenuItems_label';
    create?: Maybe<FooterFields_MenuItems_SubmenuItems_Label_Create>;
    delete?: Maybe<FooterFields_MenuItems_SubmenuItems_Label_Delete>;
    read?: Maybe<FooterFields_MenuItems_SubmenuItems_Label_Read>;
    update?: Maybe<FooterFields_MenuItems_SubmenuItems_Label_Update>;
};

export type FooterFields_MenuItems_SubmenuItems_Label_Create = {
    __typename?: 'FooterFields_menuItems_submenuItems_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Label_Delete = {
    __typename?: 'FooterFields_menuItems_submenuItems_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Label_Read = {
    __typename?: 'FooterFields_menuItems_submenuItems_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_Label_Update = {
    __typename?: 'FooterFields_menuItems_submenuItems_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_LinkType = {
    __typename?: 'FooterFields_menuItems_submenuItems_linkType';
    create?: Maybe<FooterFields_MenuItems_SubmenuItems_LinkType_Create>;
    delete?: Maybe<FooterFields_MenuItems_SubmenuItems_LinkType_Delete>;
    read?: Maybe<FooterFields_MenuItems_SubmenuItems_LinkType_Read>;
    update?: Maybe<FooterFields_MenuItems_SubmenuItems_LinkType_Update>;
};

export type FooterFields_MenuItems_SubmenuItems_LinkType_Create = {
    __typename?: 'FooterFields_menuItems_submenuItems_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_LinkType_Delete = {
    __typename?: 'FooterFields_menuItems_submenuItems_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_LinkType_Read = {
    __typename?: 'FooterFields_menuItems_submenuItems_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_LinkType_Update = {
    __typename?: 'FooterFields_menuItems_submenuItems_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_OverridePageName = {
    __typename?: 'FooterFields_menuItems_submenuItems_overridePageName';
    create?: Maybe<FooterFields_MenuItems_SubmenuItems_OverridePageName_Create>;
    delete?: Maybe<FooterFields_MenuItems_SubmenuItems_OverridePageName_Delete>;
    read?: Maybe<FooterFields_MenuItems_SubmenuItems_OverridePageName_Read>;
    update?: Maybe<FooterFields_MenuItems_SubmenuItems_OverridePageName_Update>;
};

export type FooterFields_MenuItems_SubmenuItems_OverridePageName_Create = {
    __typename?: 'FooterFields_menuItems_submenuItems_overridePageName_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_OverridePageName_Delete = {
    __typename?: 'FooterFields_menuItems_submenuItems_overridePageName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_OverridePageName_Read = {
    __typename?: 'FooterFields_menuItems_submenuItems_overridePageName_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_MenuItems_SubmenuItems_OverridePageName_Update = {
    __typename?: 'FooterFields_menuItems_submenuItems_overridePageName_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks = {
    __typename?: 'FooterFields_socialLinks';
    create?: Maybe<FooterFields_SocialLinks_Create>;
    delete?: Maybe<FooterFields_SocialLinks_Delete>;
    fields?: Maybe<FooterFields_SocialLinks_Fields>;
    read?: Maybe<FooterFields_SocialLinks_Read>;
    update?: Maybe<FooterFields_SocialLinks_Update>;
};

export type FooterFields_SocialLinks_Create = {
    __typename?: 'FooterFields_socialLinks_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Delete = {
    __typename?: 'FooterFields_socialLinks_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Fields = {
    __typename?: 'FooterFields_socialLinks_Fields';
    icon?: Maybe<FooterFields_SocialLinks_Icon>;
    id?: Maybe<FooterFields_SocialLinks_Id>;
    url?: Maybe<FooterFields_SocialLinks_Url>;
};

export type FooterFields_SocialLinks_Read = {
    __typename?: 'FooterFields_socialLinks_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Update = {
    __typename?: 'FooterFields_socialLinks_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Icon = {
    __typename?: 'FooterFields_socialLinks_icon';
    create?: Maybe<FooterFields_SocialLinks_Icon_Create>;
    delete?: Maybe<FooterFields_SocialLinks_Icon_Delete>;
    read?: Maybe<FooterFields_SocialLinks_Icon_Read>;
    update?: Maybe<FooterFields_SocialLinks_Icon_Update>;
};

export type FooterFields_SocialLinks_Icon_Create = {
    __typename?: 'FooterFields_socialLinks_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Icon_Delete = {
    __typename?: 'FooterFields_socialLinks_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Icon_Read = {
    __typename?: 'FooterFields_socialLinks_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Icon_Update = {
    __typename?: 'FooterFields_socialLinks_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Id = {
    __typename?: 'FooterFields_socialLinks_id';
    create?: Maybe<FooterFields_SocialLinks_Id_Create>;
    delete?: Maybe<FooterFields_SocialLinks_Id_Delete>;
    read?: Maybe<FooterFields_SocialLinks_Id_Read>;
    update?: Maybe<FooterFields_SocialLinks_Id_Update>;
};

export type FooterFields_SocialLinks_Id_Create = {
    __typename?: 'FooterFields_socialLinks_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Id_Delete = {
    __typename?: 'FooterFields_socialLinks_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Id_Read = {
    __typename?: 'FooterFields_socialLinks_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Id_Update = {
    __typename?: 'FooterFields_socialLinks_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Url = {
    __typename?: 'FooterFields_socialLinks_url';
    create?: Maybe<FooterFields_SocialLinks_Url_Create>;
    delete?: Maybe<FooterFields_SocialLinks_Url_Delete>;
    read?: Maybe<FooterFields_SocialLinks_Url_Read>;
    update?: Maybe<FooterFields_SocialLinks_Url_Update>;
};

export type FooterFields_SocialLinks_Url_Create = {
    __typename?: 'FooterFields_socialLinks_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Url_Delete = {
    __typename?: 'FooterFields_socialLinks_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Url_Read = {
    __typename?: 'FooterFields_socialLinks_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_SocialLinks_Url_Update = {
    __typename?: 'FooterFields_socialLinks_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt = {
    __typename?: 'FooterFields_updatedAt';
    create?: Maybe<FooterFields_UpdatedAt_Create>;
    delete?: Maybe<FooterFields_UpdatedAt_Delete>;
    read?: Maybe<FooterFields_UpdatedAt_Read>;
    update?: Maybe<FooterFields_UpdatedAt_Update>;
};

export type FooterFields_UpdatedAt_Create = {
    __typename?: 'FooterFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Delete = {
    __typename?: 'FooterFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Read = {
    __typename?: 'FooterFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type FooterFields_UpdatedAt_Update = {
    __typename?: 'FooterFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type FooterReadAccess = {
    __typename?: 'FooterReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterReadDocAccess = {
    __typename?: 'FooterReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateAccess = {
    __typename?: 'FooterUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterUpdateDocAccess = {
    __typename?: 'FooterUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Footer_MenuItems = {
    __typename?: 'Footer_MenuItems';
    externalLink?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    internalCustomLabel?: Maybe<Scalars['String']['output']>;
    internalLink?: Maybe<Page>;
    label?: Maybe<Scalars['String']['output']>;
    linkType?: Maybe<Footer_MenuItems_LinkType>;
    overridePageName?: Maybe<Scalars['Boolean']['output']>;
    submenuItems?: Maybe<Array<Footer_MenuItems_SubmenuItems>>;
};

export type Footer_MenuItems_SubmenuItems = {
    __typename?: 'Footer_MenuItems_SubmenuItems';
    externalLink?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    internalCustomLabel?: Maybe<Scalars['String']['output']>;
    internalLink?: Maybe<Page>;
    label?: Maybe<Scalars['String']['output']>;
    linkType?: Maybe<Footer_MenuItems_SubmenuItems_LinkType>;
    overridePageName?: Maybe<Scalars['Boolean']['output']>;
};

export type Footer_MenuItems_SubmenuItems_LinkType =
    | 'external'
    | 'internal'
    | '%future added value';

export type Footer_MenuItems_LinkType =
    | 'external'
    | 'internal'
    | 'submenu'
    | '%future added value';

export type Footer_SocialLinks = {
    __typename?: 'Footer_SocialLinks';
    icon?: Maybe<Icon>;
    id?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type Footer_SocialLinksIconArgs = {
    where?: InputMaybe<Footer_SocialLinks_Icon_Where>;
};

export type Footer_SocialLinks_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Footer_SocialLinks_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Footer_SocialLinks_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Footer_SocialLinks_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Footer_SocialLinks_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Footer_SocialLinks_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Footer_SocialLinks_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Footer_SocialLinks_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Footer_SocialLinks_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Footer_SocialLinks_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Footer_SocialLinks_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Footer_SocialLinks_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Footer_SocialLinks_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Footer_SocialLinks_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Footer_SocialLinks_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Footer_SocialLinks_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<Footer_SocialLinks_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Footer_SocialLinks_Icon_Where_Or>>>;
    alt?: InputMaybe<Footer_SocialLinks_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Footer_SocialLinks_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Footer_SocialLinks_Icon_Filename_Operator>;
    filesize?: InputMaybe<Footer_SocialLinks_Icon_Filesize_Operator>;
    height?: InputMaybe<Footer_SocialLinks_Icon_Height_Operator>;
    id?: InputMaybe<Footer_SocialLinks_Icon_Id_Operator>;
    mimeType?: InputMaybe<Footer_SocialLinks_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Footer_SocialLinks_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Footer_SocialLinks_Icon_Url_Operator>;
    width?: InputMaybe<Footer_SocialLinks_Icon_Width_Operator>;
};

export type Footer_SocialLinks_Icon_Where_And = {
    alt?: InputMaybe<Footer_SocialLinks_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Footer_SocialLinks_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Footer_SocialLinks_Icon_Filename_Operator>;
    filesize?: InputMaybe<Footer_SocialLinks_Icon_Filesize_Operator>;
    height?: InputMaybe<Footer_SocialLinks_Icon_Height_Operator>;
    id?: InputMaybe<Footer_SocialLinks_Icon_Id_Operator>;
    mimeType?: InputMaybe<Footer_SocialLinks_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Footer_SocialLinks_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Footer_SocialLinks_Icon_Url_Operator>;
    width?: InputMaybe<Footer_SocialLinks_Icon_Width_Operator>;
};

export type Footer_SocialLinks_Icon_Where_Or = {
    alt?: InputMaybe<Footer_SocialLinks_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Footer_SocialLinks_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Footer_SocialLinks_Icon_Filename_Operator>;
    filesize?: InputMaybe<Footer_SocialLinks_Icon_Filesize_Operator>;
    height?: InputMaybe<Footer_SocialLinks_Icon_Height_Operator>;
    id?: InputMaybe<Footer_SocialLinks_Icon_Id_Operator>;
    mimeType?: InputMaybe<Footer_SocialLinks_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Footer_SocialLinks_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Footer_SocialLinks_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Footer_SocialLinks_Icon_Url_Operator>;
    width?: InputMaybe<Footer_SocialLinks_Icon_Width_Operator>;
};

export type Footer_SocialLinks_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Header = {
    __typename?: 'Header';
    callToAction?: Maybe<Button>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    menuItems?: Maybe<Array<Header_MenuItems>>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HeaderDocAccessFields = {
    __typename?: 'HeaderDocAccessFields';
    callToAction?: Maybe<HeaderDocAccessFields_CallToAction>;
    createdAt?: Maybe<HeaderDocAccessFields_CreatedAt>;
    menuItems?: Maybe<HeaderDocAccessFields_MenuItems>;
    updatedAt?: Maybe<HeaderDocAccessFields_UpdatedAt>;
};

export type HeaderDocAccessFields_CallToAction = {
    __typename?: 'HeaderDocAccessFields_callToAction';
    create?: Maybe<HeaderDocAccessFields_CallToAction_Create>;
    delete?: Maybe<HeaderDocAccessFields_CallToAction_Delete>;
    read?: Maybe<HeaderDocAccessFields_CallToAction_Read>;
    update?: Maybe<HeaderDocAccessFields_CallToAction_Update>;
};

export type HeaderDocAccessFields_CallToAction_Create = {
    __typename?: 'HeaderDocAccessFields_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CallToAction_Delete = {
    __typename?: 'HeaderDocAccessFields_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CallToAction_Read = {
    __typename?: 'HeaderDocAccessFields_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CallToAction_Update = {
    __typename?: 'HeaderDocAccessFields_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt = {
    __typename?: 'HeaderDocAccessFields_createdAt';
    create?: Maybe<HeaderDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<HeaderDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<HeaderDocAccessFields_CreatedAt_Read>;
    update?: Maybe<HeaderDocAccessFields_CreatedAt_Update>;
};

export type HeaderDocAccessFields_CreatedAt_Create = {
    __typename?: 'HeaderDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Delete = {
    __typename?: 'HeaderDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Read = {
    __typename?: 'HeaderDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_CreatedAt_Update = {
    __typename?: 'HeaderDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems = {
    __typename?: 'HeaderDocAccessFields_menuItems';
    create?: Maybe<HeaderDocAccessFields_MenuItems_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_Delete>;
    fields?: Maybe<HeaderDocAccessFields_MenuItems_Fields>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_Update>;
};

export type HeaderDocAccessFields_MenuItems_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Fields = {
    __typename?: 'HeaderDocAccessFields_menuItems_Fields';
    externalLink?: Maybe<HeaderDocAccessFields_MenuItems_ExternalLink>;
    id?: Maybe<HeaderDocAccessFields_MenuItems_Id>;
    internalCustomLabel?: Maybe<HeaderDocAccessFields_MenuItems_InternalCustomLabel>;
    internalLink?: Maybe<HeaderDocAccessFields_MenuItems_InternalLink>;
    label?: Maybe<HeaderDocAccessFields_MenuItems_Label>;
    linkType?: Maybe<HeaderDocAccessFields_MenuItems_LinkType>;
    overridePageName?: Maybe<HeaderDocAccessFields_MenuItems_OverridePageName>;
    submenuItems?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems>;
};

export type HeaderDocAccessFields_MenuItems_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_ExternalLink = {
    __typename?: 'HeaderDocAccessFields_menuItems_externalLink';
    create?: Maybe<HeaderDocAccessFields_MenuItems_ExternalLink_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_ExternalLink_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_ExternalLink_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_ExternalLink_Update>;
};

export type HeaderDocAccessFields_MenuItems_ExternalLink_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_ExternalLink_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_ExternalLink_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_ExternalLink_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Id = {
    __typename?: 'HeaderDocAccessFields_menuItems_id';
    create?: Maybe<HeaderDocAccessFields_MenuItems_Id_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_Id_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_Id_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_Id_Update>;
};

export type HeaderDocAccessFields_MenuItems_Id_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Id_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Id_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Id_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_InternalCustomLabel = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalCustomLabel';
    create?: Maybe<HeaderDocAccessFields_MenuItems_InternalCustomLabel_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_InternalCustomLabel_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_InternalCustomLabel_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_InternalCustomLabel_Update>;
};

export type HeaderDocAccessFields_MenuItems_InternalCustomLabel_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalCustomLabel_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_InternalCustomLabel_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalCustomLabel_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_InternalCustomLabel_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalCustomLabel_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_InternalCustomLabel_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalCustomLabel_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_InternalLink = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalLink';
    create?: Maybe<HeaderDocAccessFields_MenuItems_InternalLink_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_InternalLink_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_InternalLink_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_InternalLink_Update>;
};

export type HeaderDocAccessFields_MenuItems_InternalLink_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_InternalLink_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_InternalLink_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_InternalLink_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Label = {
    __typename?: 'HeaderDocAccessFields_menuItems_label';
    create?: Maybe<HeaderDocAccessFields_MenuItems_Label_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_Label_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_Label_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_Label_Update>;
};

export type HeaderDocAccessFields_MenuItems_Label_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Label_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Label_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_Label_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_LinkType = {
    __typename?: 'HeaderDocAccessFields_menuItems_linkType';
    create?: Maybe<HeaderDocAccessFields_MenuItems_LinkType_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_LinkType_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_LinkType_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_LinkType_Update>;
};

export type HeaderDocAccessFields_MenuItems_LinkType_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_LinkType_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_LinkType_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_LinkType_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_OverridePageName = {
    __typename?: 'HeaderDocAccessFields_menuItems_overridePageName';
    create?: Maybe<HeaderDocAccessFields_MenuItems_OverridePageName_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_OverridePageName_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_OverridePageName_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_OverridePageName_Update>;
};

export type HeaderDocAccessFields_MenuItems_OverridePageName_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_overridePageName_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_OverridePageName_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_overridePageName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_OverridePageName_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_overridePageName_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_OverridePageName_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_overridePageName_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems';
    create?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Delete>;
    fields?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Fields>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Update>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Fields = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_Fields';
    externalLink?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink>;
    id?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Id>;
    internalCustomLabel?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel>;
    internalLink?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink>;
    label?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Label>;
    linkType?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType>;
    overridePageName?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_externalLink';
    create?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Update>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_ExternalLink_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Id = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_id';
    create?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Id_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Id_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Id_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Id_Update>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Id_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Id_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Id_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Id_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalCustomLabel';
    create?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Update>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Create =
    {
        __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalCustomLabel_Create';
        permission: Scalars['Boolean']['output'];
    };

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Delete =
    {
        __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalCustomLabel_Delete';
        permission: Scalars['Boolean']['output'];
    };

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Read =
    {
        __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalCustomLabel_Read';
        permission: Scalars['Boolean']['output'];
    };

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalCustomLabel_Update =
    {
        __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalCustomLabel_Update';
        permission: Scalars['Boolean']['output'];
    };

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalLink';
    create?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink_Update>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_InternalLink_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Label = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_label';
    create?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Label_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Label_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Label_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_Label_Update>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Label_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Label_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Label_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_Label_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_linkType';
    create?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType_Update>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType_Create = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType_Delete = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType_Read = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_LinkType_Update = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName = {
    __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_overridePageName';
    create?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Create>;
    delete?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Delete>;
    read?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Read>;
    update?: Maybe<HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Update>;
};

export type HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Create =
    {
        __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_overridePageName_Create';
        permission: Scalars['Boolean']['output'];
    };

export type HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Delete =
    {
        __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_overridePageName_Delete';
        permission: Scalars['Boolean']['output'];
    };

export type HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Read =
    {
        __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_overridePageName_Read';
        permission: Scalars['Boolean']['output'];
    };

export type HeaderDocAccessFields_MenuItems_SubmenuItems_OverridePageName_Update =
    {
        __typename?: 'HeaderDocAccessFields_menuItems_submenuItems_overridePageName_Update';
        permission: Scalars['Boolean']['output'];
    };

export type HeaderDocAccessFields_UpdatedAt = {
    __typename?: 'HeaderDocAccessFields_updatedAt';
    create?: Maybe<HeaderDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<HeaderDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<HeaderDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<HeaderDocAccessFields_UpdatedAt_Update>;
};

export type HeaderDocAccessFields_UpdatedAt_Create = {
    __typename?: 'HeaderDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'HeaderDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Read = {
    __typename?: 'HeaderDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderDocAccessFields_UpdatedAt_Update = {
    __typename?: 'HeaderDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields = {
    __typename?: 'HeaderFields';
    callToAction?: Maybe<HeaderFields_CallToAction>;
    createdAt?: Maybe<HeaderFields_CreatedAt>;
    menuItems?: Maybe<HeaderFields_MenuItems>;
    updatedAt?: Maybe<HeaderFields_UpdatedAt>;
};

export type HeaderFields_CallToAction = {
    __typename?: 'HeaderFields_callToAction';
    create?: Maybe<HeaderFields_CallToAction_Create>;
    delete?: Maybe<HeaderFields_CallToAction_Delete>;
    read?: Maybe<HeaderFields_CallToAction_Read>;
    update?: Maybe<HeaderFields_CallToAction_Update>;
};

export type HeaderFields_CallToAction_Create = {
    __typename?: 'HeaderFields_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CallToAction_Delete = {
    __typename?: 'HeaderFields_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CallToAction_Read = {
    __typename?: 'HeaderFields_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CallToAction_Update = {
    __typename?: 'HeaderFields_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt = {
    __typename?: 'HeaderFields_createdAt';
    create?: Maybe<HeaderFields_CreatedAt_Create>;
    delete?: Maybe<HeaderFields_CreatedAt_Delete>;
    read?: Maybe<HeaderFields_CreatedAt_Read>;
    update?: Maybe<HeaderFields_CreatedAt_Update>;
};

export type HeaderFields_CreatedAt_Create = {
    __typename?: 'HeaderFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Delete = {
    __typename?: 'HeaderFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Read = {
    __typename?: 'HeaderFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_CreatedAt_Update = {
    __typename?: 'HeaderFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems = {
    __typename?: 'HeaderFields_menuItems';
    create?: Maybe<HeaderFields_MenuItems_Create>;
    delete?: Maybe<HeaderFields_MenuItems_Delete>;
    fields?: Maybe<HeaderFields_MenuItems_Fields>;
    read?: Maybe<HeaderFields_MenuItems_Read>;
    update?: Maybe<HeaderFields_MenuItems_Update>;
};

export type HeaderFields_MenuItems_Create = {
    __typename?: 'HeaderFields_menuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Delete = {
    __typename?: 'HeaderFields_menuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Fields = {
    __typename?: 'HeaderFields_menuItems_Fields';
    externalLink?: Maybe<HeaderFields_MenuItems_ExternalLink>;
    id?: Maybe<HeaderFields_MenuItems_Id>;
    internalCustomLabel?: Maybe<HeaderFields_MenuItems_InternalCustomLabel>;
    internalLink?: Maybe<HeaderFields_MenuItems_InternalLink>;
    label?: Maybe<HeaderFields_MenuItems_Label>;
    linkType?: Maybe<HeaderFields_MenuItems_LinkType>;
    overridePageName?: Maybe<HeaderFields_MenuItems_OverridePageName>;
    submenuItems?: Maybe<HeaderFields_MenuItems_SubmenuItems>;
};

export type HeaderFields_MenuItems_Read = {
    __typename?: 'HeaderFields_menuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Update = {
    __typename?: 'HeaderFields_menuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_ExternalLink = {
    __typename?: 'HeaderFields_menuItems_externalLink';
    create?: Maybe<HeaderFields_MenuItems_ExternalLink_Create>;
    delete?: Maybe<HeaderFields_MenuItems_ExternalLink_Delete>;
    read?: Maybe<HeaderFields_MenuItems_ExternalLink_Read>;
    update?: Maybe<HeaderFields_MenuItems_ExternalLink_Update>;
};

export type HeaderFields_MenuItems_ExternalLink_Create = {
    __typename?: 'HeaderFields_menuItems_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_ExternalLink_Delete = {
    __typename?: 'HeaderFields_menuItems_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_ExternalLink_Read = {
    __typename?: 'HeaderFields_menuItems_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_ExternalLink_Update = {
    __typename?: 'HeaderFields_menuItems_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Id = {
    __typename?: 'HeaderFields_menuItems_id';
    create?: Maybe<HeaderFields_MenuItems_Id_Create>;
    delete?: Maybe<HeaderFields_MenuItems_Id_Delete>;
    read?: Maybe<HeaderFields_MenuItems_Id_Read>;
    update?: Maybe<HeaderFields_MenuItems_Id_Update>;
};

export type HeaderFields_MenuItems_Id_Create = {
    __typename?: 'HeaderFields_menuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Id_Delete = {
    __typename?: 'HeaderFields_menuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Id_Read = {
    __typename?: 'HeaderFields_menuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Id_Update = {
    __typename?: 'HeaderFields_menuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_InternalCustomLabel = {
    __typename?: 'HeaderFields_menuItems_internalCustomLabel';
    create?: Maybe<HeaderFields_MenuItems_InternalCustomLabel_Create>;
    delete?: Maybe<HeaderFields_MenuItems_InternalCustomLabel_Delete>;
    read?: Maybe<HeaderFields_MenuItems_InternalCustomLabel_Read>;
    update?: Maybe<HeaderFields_MenuItems_InternalCustomLabel_Update>;
};

export type HeaderFields_MenuItems_InternalCustomLabel_Create = {
    __typename?: 'HeaderFields_menuItems_internalCustomLabel_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_InternalCustomLabel_Delete = {
    __typename?: 'HeaderFields_menuItems_internalCustomLabel_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_InternalCustomLabel_Read = {
    __typename?: 'HeaderFields_menuItems_internalCustomLabel_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_InternalCustomLabel_Update = {
    __typename?: 'HeaderFields_menuItems_internalCustomLabel_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_InternalLink = {
    __typename?: 'HeaderFields_menuItems_internalLink';
    create?: Maybe<HeaderFields_MenuItems_InternalLink_Create>;
    delete?: Maybe<HeaderFields_MenuItems_InternalLink_Delete>;
    read?: Maybe<HeaderFields_MenuItems_InternalLink_Read>;
    update?: Maybe<HeaderFields_MenuItems_InternalLink_Update>;
};

export type HeaderFields_MenuItems_InternalLink_Create = {
    __typename?: 'HeaderFields_menuItems_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_InternalLink_Delete = {
    __typename?: 'HeaderFields_menuItems_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_InternalLink_Read = {
    __typename?: 'HeaderFields_menuItems_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_InternalLink_Update = {
    __typename?: 'HeaderFields_menuItems_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Label = {
    __typename?: 'HeaderFields_menuItems_label';
    create?: Maybe<HeaderFields_MenuItems_Label_Create>;
    delete?: Maybe<HeaderFields_MenuItems_Label_Delete>;
    read?: Maybe<HeaderFields_MenuItems_Label_Read>;
    update?: Maybe<HeaderFields_MenuItems_Label_Update>;
};

export type HeaderFields_MenuItems_Label_Create = {
    __typename?: 'HeaderFields_menuItems_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Label_Delete = {
    __typename?: 'HeaderFields_menuItems_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Label_Read = {
    __typename?: 'HeaderFields_menuItems_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_Label_Update = {
    __typename?: 'HeaderFields_menuItems_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_LinkType = {
    __typename?: 'HeaderFields_menuItems_linkType';
    create?: Maybe<HeaderFields_MenuItems_LinkType_Create>;
    delete?: Maybe<HeaderFields_MenuItems_LinkType_Delete>;
    read?: Maybe<HeaderFields_MenuItems_LinkType_Read>;
    update?: Maybe<HeaderFields_MenuItems_LinkType_Update>;
};

export type HeaderFields_MenuItems_LinkType_Create = {
    __typename?: 'HeaderFields_menuItems_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_LinkType_Delete = {
    __typename?: 'HeaderFields_menuItems_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_LinkType_Read = {
    __typename?: 'HeaderFields_menuItems_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_LinkType_Update = {
    __typename?: 'HeaderFields_menuItems_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_OverridePageName = {
    __typename?: 'HeaderFields_menuItems_overridePageName';
    create?: Maybe<HeaderFields_MenuItems_OverridePageName_Create>;
    delete?: Maybe<HeaderFields_MenuItems_OverridePageName_Delete>;
    read?: Maybe<HeaderFields_MenuItems_OverridePageName_Read>;
    update?: Maybe<HeaderFields_MenuItems_OverridePageName_Update>;
};

export type HeaderFields_MenuItems_OverridePageName_Create = {
    __typename?: 'HeaderFields_menuItems_overridePageName_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_OverridePageName_Delete = {
    __typename?: 'HeaderFields_menuItems_overridePageName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_OverridePageName_Read = {
    __typename?: 'HeaderFields_menuItems_overridePageName_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_OverridePageName_Update = {
    __typename?: 'HeaderFields_menuItems_overridePageName_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems = {
    __typename?: 'HeaderFields_menuItems_submenuItems';
    create?: Maybe<HeaderFields_MenuItems_SubmenuItems_Create>;
    delete?: Maybe<HeaderFields_MenuItems_SubmenuItems_Delete>;
    fields?: Maybe<HeaderFields_MenuItems_SubmenuItems_Fields>;
    read?: Maybe<HeaderFields_MenuItems_SubmenuItems_Read>;
    update?: Maybe<HeaderFields_MenuItems_SubmenuItems_Update>;
};

export type HeaderFields_MenuItems_SubmenuItems_Create = {
    __typename?: 'HeaderFields_menuItems_submenuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Delete = {
    __typename?: 'HeaderFields_menuItems_submenuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Fields = {
    __typename?: 'HeaderFields_menuItems_submenuItems_Fields';
    externalLink?: Maybe<HeaderFields_MenuItems_SubmenuItems_ExternalLink>;
    id?: Maybe<HeaderFields_MenuItems_SubmenuItems_Id>;
    internalCustomLabel?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel>;
    internalLink?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalLink>;
    label?: Maybe<HeaderFields_MenuItems_SubmenuItems_Label>;
    linkType?: Maybe<HeaderFields_MenuItems_SubmenuItems_LinkType>;
    overridePageName?: Maybe<HeaderFields_MenuItems_SubmenuItems_OverridePageName>;
};

export type HeaderFields_MenuItems_SubmenuItems_Read = {
    __typename?: 'HeaderFields_menuItems_submenuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Update = {
    __typename?: 'HeaderFields_menuItems_submenuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_ExternalLink = {
    __typename?: 'HeaderFields_menuItems_submenuItems_externalLink';
    create?: Maybe<HeaderFields_MenuItems_SubmenuItems_ExternalLink_Create>;
    delete?: Maybe<HeaderFields_MenuItems_SubmenuItems_ExternalLink_Delete>;
    read?: Maybe<HeaderFields_MenuItems_SubmenuItems_ExternalLink_Read>;
    update?: Maybe<HeaderFields_MenuItems_SubmenuItems_ExternalLink_Update>;
};

export type HeaderFields_MenuItems_SubmenuItems_ExternalLink_Create = {
    __typename?: 'HeaderFields_menuItems_submenuItems_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_ExternalLink_Delete = {
    __typename?: 'HeaderFields_menuItems_submenuItems_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_ExternalLink_Read = {
    __typename?: 'HeaderFields_menuItems_submenuItems_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_ExternalLink_Update = {
    __typename?: 'HeaderFields_menuItems_submenuItems_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Id = {
    __typename?: 'HeaderFields_menuItems_submenuItems_id';
    create?: Maybe<HeaderFields_MenuItems_SubmenuItems_Id_Create>;
    delete?: Maybe<HeaderFields_MenuItems_SubmenuItems_Id_Delete>;
    read?: Maybe<HeaderFields_MenuItems_SubmenuItems_Id_Read>;
    update?: Maybe<HeaderFields_MenuItems_SubmenuItems_Id_Update>;
};

export type HeaderFields_MenuItems_SubmenuItems_Id_Create = {
    __typename?: 'HeaderFields_menuItems_submenuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Id_Delete = {
    __typename?: 'HeaderFields_menuItems_submenuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Id_Read = {
    __typename?: 'HeaderFields_menuItems_submenuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Id_Update = {
    __typename?: 'HeaderFields_menuItems_submenuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalCustomLabel';
    create?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel_Create>;
    delete?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel_Delete>;
    read?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel_Read>;
    update?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel_Update>;
};

export type HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel_Create = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalCustomLabel_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel_Delete = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalCustomLabel_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel_Read = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalCustomLabel_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_InternalCustomLabel_Update = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalCustomLabel_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_InternalLink = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalLink';
    create?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalLink_Create>;
    delete?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalLink_Delete>;
    read?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalLink_Read>;
    update?: Maybe<HeaderFields_MenuItems_SubmenuItems_InternalLink_Update>;
};

export type HeaderFields_MenuItems_SubmenuItems_InternalLink_Create = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_InternalLink_Delete = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_InternalLink_Read = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_InternalLink_Update = {
    __typename?: 'HeaderFields_menuItems_submenuItems_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Label = {
    __typename?: 'HeaderFields_menuItems_submenuItems_label';
    create?: Maybe<HeaderFields_MenuItems_SubmenuItems_Label_Create>;
    delete?: Maybe<HeaderFields_MenuItems_SubmenuItems_Label_Delete>;
    read?: Maybe<HeaderFields_MenuItems_SubmenuItems_Label_Read>;
    update?: Maybe<HeaderFields_MenuItems_SubmenuItems_Label_Update>;
};

export type HeaderFields_MenuItems_SubmenuItems_Label_Create = {
    __typename?: 'HeaderFields_menuItems_submenuItems_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Label_Delete = {
    __typename?: 'HeaderFields_menuItems_submenuItems_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Label_Read = {
    __typename?: 'HeaderFields_menuItems_submenuItems_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_Label_Update = {
    __typename?: 'HeaderFields_menuItems_submenuItems_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_LinkType = {
    __typename?: 'HeaderFields_menuItems_submenuItems_linkType';
    create?: Maybe<HeaderFields_MenuItems_SubmenuItems_LinkType_Create>;
    delete?: Maybe<HeaderFields_MenuItems_SubmenuItems_LinkType_Delete>;
    read?: Maybe<HeaderFields_MenuItems_SubmenuItems_LinkType_Read>;
    update?: Maybe<HeaderFields_MenuItems_SubmenuItems_LinkType_Update>;
};

export type HeaderFields_MenuItems_SubmenuItems_LinkType_Create = {
    __typename?: 'HeaderFields_menuItems_submenuItems_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_LinkType_Delete = {
    __typename?: 'HeaderFields_menuItems_submenuItems_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_LinkType_Read = {
    __typename?: 'HeaderFields_menuItems_submenuItems_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_LinkType_Update = {
    __typename?: 'HeaderFields_menuItems_submenuItems_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_OverridePageName = {
    __typename?: 'HeaderFields_menuItems_submenuItems_overridePageName';
    create?: Maybe<HeaderFields_MenuItems_SubmenuItems_OverridePageName_Create>;
    delete?: Maybe<HeaderFields_MenuItems_SubmenuItems_OverridePageName_Delete>;
    read?: Maybe<HeaderFields_MenuItems_SubmenuItems_OverridePageName_Read>;
    update?: Maybe<HeaderFields_MenuItems_SubmenuItems_OverridePageName_Update>;
};

export type HeaderFields_MenuItems_SubmenuItems_OverridePageName_Create = {
    __typename?: 'HeaderFields_menuItems_submenuItems_overridePageName_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_OverridePageName_Delete = {
    __typename?: 'HeaderFields_menuItems_submenuItems_overridePageName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_OverridePageName_Read = {
    __typename?: 'HeaderFields_menuItems_submenuItems_overridePageName_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_MenuItems_SubmenuItems_OverridePageName_Update = {
    __typename?: 'HeaderFields_menuItems_submenuItems_overridePageName_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt = {
    __typename?: 'HeaderFields_updatedAt';
    create?: Maybe<HeaderFields_UpdatedAt_Create>;
    delete?: Maybe<HeaderFields_UpdatedAt_Delete>;
    read?: Maybe<HeaderFields_UpdatedAt_Read>;
    update?: Maybe<HeaderFields_UpdatedAt_Update>;
};

export type HeaderFields_UpdatedAt_Create = {
    __typename?: 'HeaderFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Delete = {
    __typename?: 'HeaderFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Read = {
    __typename?: 'HeaderFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeaderFields_UpdatedAt_Update = {
    __typename?: 'HeaderFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeaderReadAccess = {
    __typename?: 'HeaderReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderReadDocAccess = {
    __typename?: 'HeaderReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderUpdateAccess = {
    __typename?: 'HeaderUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderUpdateDocAccess = {
    __typename?: 'HeaderUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Header_MenuItems = {
    __typename?: 'Header_MenuItems';
    externalLink?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    internalCustomLabel?: Maybe<Scalars['String']['output']>;
    internalLink?: Maybe<Page>;
    label?: Maybe<Scalars['String']['output']>;
    linkType?: Maybe<Header_MenuItems_LinkType>;
    overridePageName?: Maybe<Scalars['Boolean']['output']>;
    submenuItems?: Maybe<Array<Header_MenuItems_SubmenuItems>>;
};

export type Header_MenuItems_SubmenuItems = {
    __typename?: 'Header_MenuItems_SubmenuItems';
    externalLink?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    internalCustomLabel?: Maybe<Scalars['String']['output']>;
    internalLink?: Maybe<Page>;
    label?: Maybe<Scalars['String']['output']>;
    linkType?: Maybe<Header_MenuItems_SubmenuItems_LinkType>;
    overridePageName?: Maybe<Scalars['Boolean']['output']>;
};

export type Header_MenuItems_SubmenuItems_LinkType =
    | 'external'
    | 'internal'
    | '%future added value';

export type Header_MenuItems_LinkType =
    | 'external'
    | 'internal'
    | 'submenu'
    | '%future added value';

export type Hero = {
    __typename?: 'Hero';
    content?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    cta?: Maybe<Hero_Cta>;
    heading: Scalars['String']['output'];
    headingTag: Scalars['String']['output'];
    id?: Maybe<Scalars['String']['output']>;
    subheading?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HeroContentArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Hero_Cta = {
    __typename?: 'Hero_Cta';
    ctaButtons?: Maybe<Array<Hero_Cta_CtaButtons>>;
    ctaTiles?: Maybe<Array<Hero_Cta_CtaTiles>>;
    type?: Maybe<Hero_Cta_Type>;
};

export type Hero_Cta_CtaButtons = {
    __typename?: 'Hero_Cta_CtaButtons';
    callToAction?: Maybe<Button>;
    id?: Maybe<Scalars['String']['output']>;
};

export type Hero_Cta_CtaTiles = {
    __typename?: 'Hero_Cta_CtaTiles';
    callToActionTile?: Maybe<CtaTile>;
    id?: Maybe<Scalars['String']['output']>;
};

export type Hero_Cta_Type = 'button' | 'tile' | '%future added value';

export type Hero_Content_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Hero_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Hero_Cta__CtaButtons__CallToAction_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Cta__CtaButtons__Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Cta__CtaTiles__CallToActionTile_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Cta__CtaTiles__Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Cta__Type_Input = 'button' | 'tile' | '%future added value';

export type Hero_Cta__Type_Operator = {
    all?: InputMaybe<Array<InputMaybe<Hero_Cta__Type_Input>>>;
    equals?: InputMaybe<Hero_Cta__Type_Input>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Hero_Cta__Type_Input>>>;
    not_equals?: InputMaybe<Hero_Cta__Type_Input>;
    not_in?: InputMaybe<Array<InputMaybe<Hero_Cta__Type_Input>>>;
};

export type Hero_HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Subheading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Hero_Where = {
    AND?: InputMaybe<Array<InputMaybe<Hero_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Hero_Where_Or>>>;
    content?: InputMaybe<Hero_Content_Operator>;
    createdAt?: InputMaybe<Hero_CreatedAt_Operator>;
    cta__ctaButtons__callToAction?: InputMaybe<Hero_Cta__CtaButtons__CallToAction_Operator>;
    cta__ctaButtons__id?: InputMaybe<Hero_Cta__CtaButtons__Id_Operator>;
    cta__ctaTiles__callToActionTile?: InputMaybe<Hero_Cta__CtaTiles__CallToActionTile_Operator>;
    cta__ctaTiles__id?: InputMaybe<Hero_Cta__CtaTiles__Id_Operator>;
    cta__type?: InputMaybe<Hero_Cta__Type_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    subheading?: InputMaybe<Hero_Subheading_Operator>;
    updatedAt?: InputMaybe<Hero_UpdatedAt_Operator>;
};

export type Hero_Where_And = {
    content?: InputMaybe<Hero_Content_Operator>;
    createdAt?: InputMaybe<Hero_CreatedAt_Operator>;
    cta__ctaButtons__callToAction?: InputMaybe<Hero_Cta__CtaButtons__CallToAction_Operator>;
    cta__ctaButtons__id?: InputMaybe<Hero_Cta__CtaButtons__Id_Operator>;
    cta__ctaTiles__callToActionTile?: InputMaybe<Hero_Cta__CtaTiles__CallToActionTile_Operator>;
    cta__ctaTiles__id?: InputMaybe<Hero_Cta__CtaTiles__Id_Operator>;
    cta__type?: InputMaybe<Hero_Cta__Type_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    subheading?: InputMaybe<Hero_Subheading_Operator>;
    updatedAt?: InputMaybe<Hero_UpdatedAt_Operator>;
};

export type Hero_Where_Or = {
    content?: InputMaybe<Hero_Content_Operator>;
    createdAt?: InputMaybe<Hero_CreatedAt_Operator>;
    cta__ctaButtons__callToAction?: InputMaybe<Hero_Cta__CtaButtons__CallToAction_Operator>;
    cta__ctaButtons__id?: InputMaybe<Hero_Cta__CtaButtons__Id_Operator>;
    cta__ctaTiles__callToActionTile?: InputMaybe<Hero_Cta__CtaTiles__CallToActionTile_Operator>;
    cta__ctaTiles__id?: InputMaybe<Hero_Cta__CtaTiles__Id_Operator>;
    cta__type?: InputMaybe<Hero_Cta__Type_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    subheading?: InputMaybe<Hero_Subheading_Operator>;
    updatedAt?: InputMaybe<Hero_UpdatedAt_Operator>;
};

export type Heroes = {
    __typename?: 'Heroes';
    docs?: Maybe<Array<Maybe<Hero>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type HeroesCreateAccess = {
    __typename?: 'HeroesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesCreateDocAccess = {
    __typename?: 'HeroesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesDeleteAccess = {
    __typename?: 'HeroesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesDeleteDocAccess = {
    __typename?: 'HeroesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesDocAccessFields = {
    __typename?: 'HeroesDocAccessFields';
    content?: Maybe<HeroesDocAccessFields_Content>;
    createdAt?: Maybe<HeroesDocAccessFields_CreatedAt>;
    cta?: Maybe<HeroesDocAccessFields_Cta>;
    heading?: Maybe<HeroesDocAccessFields_Heading>;
    headingTag?: Maybe<HeroesDocAccessFields_HeadingTag>;
    subheading?: Maybe<HeroesDocAccessFields_Subheading>;
    updatedAt?: Maybe<HeroesDocAccessFields_UpdatedAt>;
};

export type HeroesDocAccessFields_Content = {
    __typename?: 'HeroesDocAccessFields_content';
    create?: Maybe<HeroesDocAccessFields_Content_Create>;
    delete?: Maybe<HeroesDocAccessFields_Content_Delete>;
    read?: Maybe<HeroesDocAccessFields_Content_Read>;
    update?: Maybe<HeroesDocAccessFields_Content_Update>;
};

export type HeroesDocAccessFields_Content_Create = {
    __typename?: 'HeroesDocAccessFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Content_Delete = {
    __typename?: 'HeroesDocAccessFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Content_Read = {
    __typename?: 'HeroesDocAccessFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Content_Update = {
    __typename?: 'HeroesDocAccessFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_CreatedAt = {
    __typename?: 'HeroesDocAccessFields_createdAt';
    create?: Maybe<HeroesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<HeroesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<HeroesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<HeroesDocAccessFields_CreatedAt_Update>;
};

export type HeroesDocAccessFields_CreatedAt_Create = {
    __typename?: 'HeroesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'HeroesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_CreatedAt_Read = {
    __typename?: 'HeroesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_CreatedAt_Update = {
    __typename?: 'HeroesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta = {
    __typename?: 'HeroesDocAccessFields_cta';
    create?: Maybe<HeroesDocAccessFields_Cta_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_Delete>;
    fields?: Maybe<HeroesDocAccessFields_Cta_Fields>;
    read?: Maybe<HeroesDocAccessFields_Cta_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_Update>;
};

export type HeroesDocAccessFields_Cta_Create = {
    __typename?: 'HeroesDocAccessFields_cta_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Fields = {
    __typename?: 'HeroesDocAccessFields_cta_Fields';
    ctaButtons?: Maybe<HeroesDocAccessFields_Cta_CtaButtons>;
    ctaTiles?: Maybe<HeroesDocAccessFields_Cta_CtaTiles>;
    type?: Maybe<HeroesDocAccessFields_Cta_Type>;
};

export type HeroesDocAccessFields_Cta_Read = {
    __typename?: 'HeroesDocAccessFields_cta_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Update = {
    __typename?: 'HeroesDocAccessFields_cta_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons';
    create?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Delete>;
    fields?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Fields>;
    read?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Update>;
};

export type HeroesDocAccessFields_Cta_CtaButtons_Create = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_Fields = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_Fields';
    callToAction?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_CallToAction>;
    id?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Id>;
};

export type HeroesDocAccessFields_Cta_CtaButtons_Read = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_Update = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_CallToAction = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_callToAction';
    create?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_CallToAction_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_CallToAction_Delete>;
    read?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_CallToAction_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_CallToAction_Update>;
};

export type HeroesDocAccessFields_Cta_CtaButtons_CallToAction_Create = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_CallToAction_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_CallToAction_Read = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_CallToAction_Update = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_Id = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_id';
    create?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Id_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Id_Delete>;
    read?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Id_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_CtaButtons_Id_Update>;
};

export type HeroesDocAccessFields_Cta_CtaButtons_Id_Create = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_Id_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_Id_Read = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaButtons_Id_Update = {
    __typename?: 'HeroesDocAccessFields_cta_ctaButtons_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles';
    create?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Delete>;
    fields?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Fields>;
    read?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Update>;
};

export type HeroesDocAccessFields_Cta_CtaTiles_Create = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_Fields = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_Fields';
    callToActionTile?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile>;
    id?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Id>;
};

export type HeroesDocAccessFields_Cta_CtaTiles_Read = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_Update = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_callToActionTile';
    create?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile_Delete>;
    read?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile_Update>;
};

export type HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile_Create = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_callToActionTile_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_callToActionTile_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile_Read = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_callToActionTile_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_CallToActionTile_Update = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_callToActionTile_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_Id = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_id';
    create?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Id_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Id_Delete>;
    read?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Id_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_CtaTiles_Id_Update>;
};

export type HeroesDocAccessFields_Cta_CtaTiles_Id_Create = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_Id_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_Id_Read = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_CtaTiles_Id_Update = {
    __typename?: 'HeroesDocAccessFields_cta_ctaTiles_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Type = {
    __typename?: 'HeroesDocAccessFields_cta_type';
    create?: Maybe<HeroesDocAccessFields_Cta_Type_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_Type_Delete>;
    read?: Maybe<HeroesDocAccessFields_Cta_Type_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_Type_Update>;
};

export type HeroesDocAccessFields_Cta_Type_Create = {
    __typename?: 'HeroesDocAccessFields_cta_type_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Type_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_type_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Type_Read = {
    __typename?: 'HeroesDocAccessFields_cta_type_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Type_Update = {
    __typename?: 'HeroesDocAccessFields_cta_type_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading = {
    __typename?: 'HeroesDocAccessFields_heading';
    create?: Maybe<HeroesDocAccessFields_Heading_Create>;
    delete?: Maybe<HeroesDocAccessFields_Heading_Delete>;
    read?: Maybe<HeroesDocAccessFields_Heading_Read>;
    update?: Maybe<HeroesDocAccessFields_Heading_Update>;
};

export type HeroesDocAccessFields_HeadingTag = {
    __typename?: 'HeroesDocAccessFields_headingTag';
    create?: Maybe<HeroesDocAccessFields_HeadingTag_Create>;
    delete?: Maybe<HeroesDocAccessFields_HeadingTag_Delete>;
    read?: Maybe<HeroesDocAccessFields_HeadingTag_Read>;
    update?: Maybe<HeroesDocAccessFields_HeadingTag_Update>;
};

export type HeroesDocAccessFields_HeadingTag_Create = {
    __typename?: 'HeroesDocAccessFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_HeadingTag_Delete = {
    __typename?: 'HeroesDocAccessFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_HeadingTag_Read = {
    __typename?: 'HeroesDocAccessFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_HeadingTag_Update = {
    __typename?: 'HeroesDocAccessFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading_Create = {
    __typename?: 'HeroesDocAccessFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading_Delete = {
    __typename?: 'HeroesDocAccessFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading_Read = {
    __typename?: 'HeroesDocAccessFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading_Update = {
    __typename?: 'HeroesDocAccessFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Subheading = {
    __typename?: 'HeroesDocAccessFields_subheading';
    create?: Maybe<HeroesDocAccessFields_Subheading_Create>;
    delete?: Maybe<HeroesDocAccessFields_Subheading_Delete>;
    read?: Maybe<HeroesDocAccessFields_Subheading_Read>;
    update?: Maybe<HeroesDocAccessFields_Subheading_Update>;
};

export type HeroesDocAccessFields_Subheading_Create = {
    __typename?: 'HeroesDocAccessFields_subheading_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Subheading_Delete = {
    __typename?: 'HeroesDocAccessFields_subheading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Subheading_Read = {
    __typename?: 'HeroesDocAccessFields_subheading_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Subheading_Update = {
    __typename?: 'HeroesDocAccessFields_subheading_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_UpdatedAt = {
    __typename?: 'HeroesDocAccessFields_updatedAt';
    create?: Maybe<HeroesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<HeroesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<HeroesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<HeroesDocAccessFields_UpdatedAt_Update>;
};

export type HeroesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'HeroesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'HeroesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'HeroesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'HeroesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields = {
    __typename?: 'HeroesFields';
    content?: Maybe<HeroesFields_Content>;
    createdAt?: Maybe<HeroesFields_CreatedAt>;
    cta?: Maybe<HeroesFields_Cta>;
    heading?: Maybe<HeroesFields_Heading>;
    headingTag?: Maybe<HeroesFields_HeadingTag>;
    subheading?: Maybe<HeroesFields_Subheading>;
    updatedAt?: Maybe<HeroesFields_UpdatedAt>;
};

export type HeroesFields_Content = {
    __typename?: 'HeroesFields_content';
    create?: Maybe<HeroesFields_Content_Create>;
    delete?: Maybe<HeroesFields_Content_Delete>;
    read?: Maybe<HeroesFields_Content_Read>;
    update?: Maybe<HeroesFields_Content_Update>;
};

export type HeroesFields_Content_Create = {
    __typename?: 'HeroesFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Content_Delete = {
    __typename?: 'HeroesFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Content_Read = {
    __typename?: 'HeroesFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Content_Update = {
    __typename?: 'HeroesFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_CreatedAt = {
    __typename?: 'HeroesFields_createdAt';
    create?: Maybe<HeroesFields_CreatedAt_Create>;
    delete?: Maybe<HeroesFields_CreatedAt_Delete>;
    read?: Maybe<HeroesFields_CreatedAt_Read>;
    update?: Maybe<HeroesFields_CreatedAt_Update>;
};

export type HeroesFields_CreatedAt_Create = {
    __typename?: 'HeroesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_CreatedAt_Delete = {
    __typename?: 'HeroesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_CreatedAt_Read = {
    __typename?: 'HeroesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_CreatedAt_Update = {
    __typename?: 'HeroesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta = {
    __typename?: 'HeroesFields_cta';
    create?: Maybe<HeroesFields_Cta_Create>;
    delete?: Maybe<HeroesFields_Cta_Delete>;
    fields?: Maybe<HeroesFields_Cta_Fields>;
    read?: Maybe<HeroesFields_Cta_Read>;
    update?: Maybe<HeroesFields_Cta_Update>;
};

export type HeroesFields_Cta_Create = {
    __typename?: 'HeroesFields_cta_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Delete = {
    __typename?: 'HeroesFields_cta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Fields = {
    __typename?: 'HeroesFields_cta_Fields';
    ctaButtons?: Maybe<HeroesFields_Cta_CtaButtons>;
    ctaTiles?: Maybe<HeroesFields_Cta_CtaTiles>;
    type?: Maybe<HeroesFields_Cta_Type>;
};

export type HeroesFields_Cta_Read = {
    __typename?: 'HeroesFields_cta_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Update = {
    __typename?: 'HeroesFields_cta_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons = {
    __typename?: 'HeroesFields_cta_ctaButtons';
    create?: Maybe<HeroesFields_Cta_CtaButtons_Create>;
    delete?: Maybe<HeroesFields_Cta_CtaButtons_Delete>;
    fields?: Maybe<HeroesFields_Cta_CtaButtons_Fields>;
    read?: Maybe<HeroesFields_Cta_CtaButtons_Read>;
    update?: Maybe<HeroesFields_Cta_CtaButtons_Update>;
};

export type HeroesFields_Cta_CtaButtons_Create = {
    __typename?: 'HeroesFields_cta_ctaButtons_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_Delete = {
    __typename?: 'HeroesFields_cta_ctaButtons_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_Fields = {
    __typename?: 'HeroesFields_cta_ctaButtons_Fields';
    callToAction?: Maybe<HeroesFields_Cta_CtaButtons_CallToAction>;
    id?: Maybe<HeroesFields_Cta_CtaButtons_Id>;
};

export type HeroesFields_Cta_CtaButtons_Read = {
    __typename?: 'HeroesFields_cta_ctaButtons_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_Update = {
    __typename?: 'HeroesFields_cta_ctaButtons_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_CallToAction = {
    __typename?: 'HeroesFields_cta_ctaButtons_callToAction';
    create?: Maybe<HeroesFields_Cta_CtaButtons_CallToAction_Create>;
    delete?: Maybe<HeroesFields_Cta_CtaButtons_CallToAction_Delete>;
    read?: Maybe<HeroesFields_Cta_CtaButtons_CallToAction_Read>;
    update?: Maybe<HeroesFields_Cta_CtaButtons_CallToAction_Update>;
};

export type HeroesFields_Cta_CtaButtons_CallToAction_Create = {
    __typename?: 'HeroesFields_cta_ctaButtons_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_CallToAction_Delete = {
    __typename?: 'HeroesFields_cta_ctaButtons_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_CallToAction_Read = {
    __typename?: 'HeroesFields_cta_ctaButtons_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_CallToAction_Update = {
    __typename?: 'HeroesFields_cta_ctaButtons_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_Id = {
    __typename?: 'HeroesFields_cta_ctaButtons_id';
    create?: Maybe<HeroesFields_Cta_CtaButtons_Id_Create>;
    delete?: Maybe<HeroesFields_Cta_CtaButtons_Id_Delete>;
    read?: Maybe<HeroesFields_Cta_CtaButtons_Id_Read>;
    update?: Maybe<HeroesFields_Cta_CtaButtons_Id_Update>;
};

export type HeroesFields_Cta_CtaButtons_Id_Create = {
    __typename?: 'HeroesFields_cta_ctaButtons_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_Id_Delete = {
    __typename?: 'HeroesFields_cta_ctaButtons_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_Id_Read = {
    __typename?: 'HeroesFields_cta_ctaButtons_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaButtons_Id_Update = {
    __typename?: 'HeroesFields_cta_ctaButtons_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles = {
    __typename?: 'HeroesFields_cta_ctaTiles';
    create?: Maybe<HeroesFields_Cta_CtaTiles_Create>;
    delete?: Maybe<HeroesFields_Cta_CtaTiles_Delete>;
    fields?: Maybe<HeroesFields_Cta_CtaTiles_Fields>;
    read?: Maybe<HeroesFields_Cta_CtaTiles_Read>;
    update?: Maybe<HeroesFields_Cta_CtaTiles_Update>;
};

export type HeroesFields_Cta_CtaTiles_Create = {
    __typename?: 'HeroesFields_cta_ctaTiles_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_Delete = {
    __typename?: 'HeroesFields_cta_ctaTiles_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_Fields = {
    __typename?: 'HeroesFields_cta_ctaTiles_Fields';
    callToActionTile?: Maybe<HeroesFields_Cta_CtaTiles_CallToActionTile>;
    id?: Maybe<HeroesFields_Cta_CtaTiles_Id>;
};

export type HeroesFields_Cta_CtaTiles_Read = {
    __typename?: 'HeroesFields_cta_ctaTiles_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_Update = {
    __typename?: 'HeroesFields_cta_ctaTiles_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_CallToActionTile = {
    __typename?: 'HeroesFields_cta_ctaTiles_callToActionTile';
    create?: Maybe<HeroesFields_Cta_CtaTiles_CallToActionTile_Create>;
    delete?: Maybe<HeroesFields_Cta_CtaTiles_CallToActionTile_Delete>;
    read?: Maybe<HeroesFields_Cta_CtaTiles_CallToActionTile_Read>;
    update?: Maybe<HeroesFields_Cta_CtaTiles_CallToActionTile_Update>;
};

export type HeroesFields_Cta_CtaTiles_CallToActionTile_Create = {
    __typename?: 'HeroesFields_cta_ctaTiles_callToActionTile_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_CallToActionTile_Delete = {
    __typename?: 'HeroesFields_cta_ctaTiles_callToActionTile_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_CallToActionTile_Read = {
    __typename?: 'HeroesFields_cta_ctaTiles_callToActionTile_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_CallToActionTile_Update = {
    __typename?: 'HeroesFields_cta_ctaTiles_callToActionTile_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_Id = {
    __typename?: 'HeroesFields_cta_ctaTiles_id';
    create?: Maybe<HeroesFields_Cta_CtaTiles_Id_Create>;
    delete?: Maybe<HeroesFields_Cta_CtaTiles_Id_Delete>;
    read?: Maybe<HeroesFields_Cta_CtaTiles_Id_Read>;
    update?: Maybe<HeroesFields_Cta_CtaTiles_Id_Update>;
};

export type HeroesFields_Cta_CtaTiles_Id_Create = {
    __typename?: 'HeroesFields_cta_ctaTiles_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_Id_Delete = {
    __typename?: 'HeroesFields_cta_ctaTiles_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_Id_Read = {
    __typename?: 'HeroesFields_cta_ctaTiles_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_CtaTiles_Id_Update = {
    __typename?: 'HeroesFields_cta_ctaTiles_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Type = {
    __typename?: 'HeroesFields_cta_type';
    create?: Maybe<HeroesFields_Cta_Type_Create>;
    delete?: Maybe<HeroesFields_Cta_Type_Delete>;
    read?: Maybe<HeroesFields_Cta_Type_Read>;
    update?: Maybe<HeroesFields_Cta_Type_Update>;
};

export type HeroesFields_Cta_Type_Create = {
    __typename?: 'HeroesFields_cta_type_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Type_Delete = {
    __typename?: 'HeroesFields_cta_type_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Type_Read = {
    __typename?: 'HeroesFields_cta_type_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Type_Update = {
    __typename?: 'HeroesFields_cta_type_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading = {
    __typename?: 'HeroesFields_heading';
    create?: Maybe<HeroesFields_Heading_Create>;
    delete?: Maybe<HeroesFields_Heading_Delete>;
    read?: Maybe<HeroesFields_Heading_Read>;
    update?: Maybe<HeroesFields_Heading_Update>;
};

export type HeroesFields_HeadingTag = {
    __typename?: 'HeroesFields_headingTag';
    create?: Maybe<HeroesFields_HeadingTag_Create>;
    delete?: Maybe<HeroesFields_HeadingTag_Delete>;
    read?: Maybe<HeroesFields_HeadingTag_Read>;
    update?: Maybe<HeroesFields_HeadingTag_Update>;
};

export type HeroesFields_HeadingTag_Create = {
    __typename?: 'HeroesFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_HeadingTag_Delete = {
    __typename?: 'HeroesFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_HeadingTag_Read = {
    __typename?: 'HeroesFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_HeadingTag_Update = {
    __typename?: 'HeroesFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading_Create = {
    __typename?: 'HeroesFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading_Delete = {
    __typename?: 'HeroesFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading_Read = {
    __typename?: 'HeroesFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading_Update = {
    __typename?: 'HeroesFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Subheading = {
    __typename?: 'HeroesFields_subheading';
    create?: Maybe<HeroesFields_Subheading_Create>;
    delete?: Maybe<HeroesFields_Subheading_Delete>;
    read?: Maybe<HeroesFields_Subheading_Read>;
    update?: Maybe<HeroesFields_Subheading_Update>;
};

export type HeroesFields_Subheading_Create = {
    __typename?: 'HeroesFields_subheading_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Subheading_Delete = {
    __typename?: 'HeroesFields_subheading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Subheading_Read = {
    __typename?: 'HeroesFields_subheading_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Subheading_Update = {
    __typename?: 'HeroesFields_subheading_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_UpdatedAt = {
    __typename?: 'HeroesFields_updatedAt';
    create?: Maybe<HeroesFields_UpdatedAt_Create>;
    delete?: Maybe<HeroesFields_UpdatedAt_Delete>;
    read?: Maybe<HeroesFields_UpdatedAt_Read>;
    update?: Maybe<HeroesFields_UpdatedAt_Update>;
};

export type HeroesFields_UpdatedAt_Create = {
    __typename?: 'HeroesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_UpdatedAt_Delete = {
    __typename?: 'HeroesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_UpdatedAt_Read = {
    __typename?: 'HeroesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_UpdatedAt_Update = {
    __typename?: 'HeroesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesReadAccess = {
    __typename?: 'HeroesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesReadDocAccess = {
    __typename?: 'HeroesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesUpdateAccess = {
    __typename?: 'HeroesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesUpdateDocAccess = {
    __typename?: 'HeroesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Icon = {
    __typename?: 'Icon';
    alt: Scalars['String']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    filename?: Maybe<Scalars['String']['output']>;
    filesize?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    sizes?: Maybe<Icon_Sizes>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type IconTile = {
    __typename?: 'IconTile';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    icon: Icon;
    id?: Maybe<Scalars['String']['output']>;
    label: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IconTileIconArgs = {
    where?: InputMaybe<IconTile_Icon_Where>;
};

export type IconTile_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IconTile_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type IconTile_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type IconTile_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type IconTile_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type IconTile_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type IconTile_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IconTile_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<IconTile_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<IconTile_Icon_Where_Or>>>;
    alt?: InputMaybe<IconTile_Icon_Alt_Operator>;
    createdAt?: InputMaybe<IconTile_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<IconTile_Icon_Filename_Operator>;
    filesize?: InputMaybe<IconTile_Icon_Filesize_Operator>;
    height?: InputMaybe<IconTile_Icon_Height_Operator>;
    id?: InputMaybe<IconTile_Icon_Id_Operator>;
    mimeType?: InputMaybe<IconTile_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<IconTile_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<IconTile_Icon_Url_Operator>;
    width?: InputMaybe<IconTile_Icon_Width_Operator>;
};

export type IconTile_Icon_Where_And = {
    alt?: InputMaybe<IconTile_Icon_Alt_Operator>;
    createdAt?: InputMaybe<IconTile_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<IconTile_Icon_Filename_Operator>;
    filesize?: InputMaybe<IconTile_Icon_Filesize_Operator>;
    height?: InputMaybe<IconTile_Icon_Height_Operator>;
    id?: InputMaybe<IconTile_Icon_Id_Operator>;
    mimeType?: InputMaybe<IconTile_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<IconTile_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<IconTile_Icon_Url_Operator>;
    width?: InputMaybe<IconTile_Icon_Width_Operator>;
};

export type IconTile_Icon_Where_Or = {
    alt?: InputMaybe<IconTile_Icon_Alt_Operator>;
    createdAt?: InputMaybe<IconTile_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<IconTile_Icon_Filename_Operator>;
    filesize?: InputMaybe<IconTile_Icon_Filesize_Operator>;
    height?: InputMaybe<IconTile_Icon_Height_Operator>;
    id?: InputMaybe<IconTile_Icon_Id_Operator>;
    mimeType?: InputMaybe<IconTile_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<IconTile_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<IconTile_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<IconTile_Icon_Url_Operator>;
    width?: InputMaybe<IconTile_Icon_Width_Operator>;
};

export type IconTile_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type IconTile_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IconTile_Icon_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type IconTile_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_Label_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IconTile_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IconTile_Where = {
    AND?: InputMaybe<Array<InputMaybe<IconTile_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<IconTile_Where_Or>>>;
    createdAt?: InputMaybe<IconTile_CreatedAt_Operator>;
    icon?: InputMaybe<IconTile_Icon_Operator>;
    id?: InputMaybe<IconTile_Id_Operator>;
    label?: InputMaybe<IconTile_Label_Operator>;
    updatedAt?: InputMaybe<IconTile_UpdatedAt_Operator>;
};

export type IconTile_Where_And = {
    createdAt?: InputMaybe<IconTile_CreatedAt_Operator>;
    icon?: InputMaybe<IconTile_Icon_Operator>;
    id?: InputMaybe<IconTile_Id_Operator>;
    label?: InputMaybe<IconTile_Label_Operator>;
    updatedAt?: InputMaybe<IconTile_UpdatedAt_Operator>;
};

export type IconTile_Where_Or = {
    createdAt?: InputMaybe<IconTile_CreatedAt_Operator>;
    icon?: InputMaybe<IconTile_Icon_Operator>;
    id?: InputMaybe<IconTile_Id_Operator>;
    label?: InputMaybe<IconTile_Label_Operator>;
    updatedAt?: InputMaybe<IconTile_UpdatedAt_Operator>;
};

export type IconTiles = {
    __typename?: 'IconTiles';
    docs?: Maybe<Array<Maybe<IconTile>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type IconTilesCreateAccess = {
    __typename?: 'IconTilesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconTilesCreateDocAccess = {
    __typename?: 'IconTilesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconTilesDeleteAccess = {
    __typename?: 'IconTilesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconTilesDeleteDocAccess = {
    __typename?: 'IconTilesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconTilesDocAccessFields = {
    __typename?: 'IconTilesDocAccessFields';
    createdAt?: Maybe<IconTilesDocAccessFields_CreatedAt>;
    icon?: Maybe<IconTilesDocAccessFields_Icon>;
    label?: Maybe<IconTilesDocAccessFields_Label>;
    updatedAt?: Maybe<IconTilesDocAccessFields_UpdatedAt>;
};

export type IconTilesDocAccessFields_CreatedAt = {
    __typename?: 'IconTilesDocAccessFields_createdAt';
    create?: Maybe<IconTilesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<IconTilesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<IconTilesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<IconTilesDocAccessFields_CreatedAt_Update>;
};

export type IconTilesDocAccessFields_CreatedAt_Create = {
    __typename?: 'IconTilesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'IconTilesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_CreatedAt_Read = {
    __typename?: 'IconTilesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_CreatedAt_Update = {
    __typename?: 'IconTilesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_Icon = {
    __typename?: 'IconTilesDocAccessFields_icon';
    create?: Maybe<IconTilesDocAccessFields_Icon_Create>;
    delete?: Maybe<IconTilesDocAccessFields_Icon_Delete>;
    read?: Maybe<IconTilesDocAccessFields_Icon_Read>;
    update?: Maybe<IconTilesDocAccessFields_Icon_Update>;
};

export type IconTilesDocAccessFields_Icon_Create = {
    __typename?: 'IconTilesDocAccessFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_Icon_Delete = {
    __typename?: 'IconTilesDocAccessFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_Icon_Read = {
    __typename?: 'IconTilesDocAccessFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_Icon_Update = {
    __typename?: 'IconTilesDocAccessFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_Label = {
    __typename?: 'IconTilesDocAccessFields_label';
    create?: Maybe<IconTilesDocAccessFields_Label_Create>;
    delete?: Maybe<IconTilesDocAccessFields_Label_Delete>;
    read?: Maybe<IconTilesDocAccessFields_Label_Read>;
    update?: Maybe<IconTilesDocAccessFields_Label_Update>;
};

export type IconTilesDocAccessFields_Label_Create = {
    __typename?: 'IconTilesDocAccessFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_Label_Delete = {
    __typename?: 'IconTilesDocAccessFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_Label_Read = {
    __typename?: 'IconTilesDocAccessFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_Label_Update = {
    __typename?: 'IconTilesDocAccessFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_UpdatedAt = {
    __typename?: 'IconTilesDocAccessFields_updatedAt';
    create?: Maybe<IconTilesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<IconTilesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<IconTilesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<IconTilesDocAccessFields_UpdatedAt_Update>;
};

export type IconTilesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'IconTilesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'IconTilesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'IconTilesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'IconTilesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields = {
    __typename?: 'IconTilesFields';
    createdAt?: Maybe<IconTilesFields_CreatedAt>;
    icon?: Maybe<IconTilesFields_Icon>;
    label?: Maybe<IconTilesFields_Label>;
    updatedAt?: Maybe<IconTilesFields_UpdatedAt>;
};

export type IconTilesFields_CreatedAt = {
    __typename?: 'IconTilesFields_createdAt';
    create?: Maybe<IconTilesFields_CreatedAt_Create>;
    delete?: Maybe<IconTilesFields_CreatedAt_Delete>;
    read?: Maybe<IconTilesFields_CreatedAt_Read>;
    update?: Maybe<IconTilesFields_CreatedAt_Update>;
};

export type IconTilesFields_CreatedAt_Create = {
    __typename?: 'IconTilesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_CreatedAt_Delete = {
    __typename?: 'IconTilesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_CreatedAt_Read = {
    __typename?: 'IconTilesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_CreatedAt_Update = {
    __typename?: 'IconTilesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_Icon = {
    __typename?: 'IconTilesFields_icon';
    create?: Maybe<IconTilesFields_Icon_Create>;
    delete?: Maybe<IconTilesFields_Icon_Delete>;
    read?: Maybe<IconTilesFields_Icon_Read>;
    update?: Maybe<IconTilesFields_Icon_Update>;
};

export type IconTilesFields_Icon_Create = {
    __typename?: 'IconTilesFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_Icon_Delete = {
    __typename?: 'IconTilesFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_Icon_Read = {
    __typename?: 'IconTilesFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_Icon_Update = {
    __typename?: 'IconTilesFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_Label = {
    __typename?: 'IconTilesFields_label';
    create?: Maybe<IconTilesFields_Label_Create>;
    delete?: Maybe<IconTilesFields_Label_Delete>;
    read?: Maybe<IconTilesFields_Label_Read>;
    update?: Maybe<IconTilesFields_Label_Update>;
};

export type IconTilesFields_Label_Create = {
    __typename?: 'IconTilesFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_Label_Delete = {
    __typename?: 'IconTilesFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_Label_Read = {
    __typename?: 'IconTilesFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_Label_Update = {
    __typename?: 'IconTilesFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_UpdatedAt = {
    __typename?: 'IconTilesFields_updatedAt';
    create?: Maybe<IconTilesFields_UpdatedAt_Create>;
    delete?: Maybe<IconTilesFields_UpdatedAt_Delete>;
    read?: Maybe<IconTilesFields_UpdatedAt_Read>;
    update?: Maybe<IconTilesFields_UpdatedAt_Update>;
};

export type IconTilesFields_UpdatedAt_Create = {
    __typename?: 'IconTilesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_UpdatedAt_Delete = {
    __typename?: 'IconTilesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_UpdatedAt_Read = {
    __typename?: 'IconTilesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesFields_UpdatedAt_Update = {
    __typename?: 'IconTilesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconTilesReadAccess = {
    __typename?: 'IconTilesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconTilesReadDocAccess = {
    __typename?: 'IconTilesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconTilesUpdateAccess = {
    __typename?: 'IconTilesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconTilesUpdateDocAccess = {
    __typename?: 'IconTilesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Icon_Sizes = {
    __typename?: 'Icon_Sizes';
    thumbnail?: Maybe<Icon_Sizes_Thumbnail>;
};

export type Icon_Sizes_Thumbnail = {
    __typename?: 'Icon_Sizes_Thumbnail';
    filename?: Maybe<Scalars['String']['output']>;
    filesize?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Icon_Where_Or>>>;
    alt?: InputMaybe<Icon_Alt_Operator>;
    createdAt?: InputMaybe<Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Icon_Filename_Operator>;
    filesize?: InputMaybe<Icon_Filesize_Operator>;
    height?: InputMaybe<Icon_Height_Operator>;
    id?: InputMaybe<Icon_Id_Operator>;
    mimeType?: InputMaybe<Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Icon_Url_Operator>;
    width?: InputMaybe<Icon_Width_Operator>;
};

export type Icon_Where_And = {
    alt?: InputMaybe<Icon_Alt_Operator>;
    createdAt?: InputMaybe<Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Icon_Filename_Operator>;
    filesize?: InputMaybe<Icon_Filesize_Operator>;
    height?: InputMaybe<Icon_Height_Operator>;
    id?: InputMaybe<Icon_Id_Operator>;
    mimeType?: InputMaybe<Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Icon_Url_Operator>;
    width?: InputMaybe<Icon_Width_Operator>;
};

export type Icon_Where_Or = {
    alt?: InputMaybe<Icon_Alt_Operator>;
    createdAt?: InputMaybe<Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Icon_Filename_Operator>;
    filesize?: InputMaybe<Icon_Filesize_Operator>;
    height?: InputMaybe<Icon_Height_Operator>;
    id?: InputMaybe<Icon_Id_Operator>;
    mimeType?: InputMaybe<Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Icon_Url_Operator>;
    width?: InputMaybe<Icon_Width_Operator>;
};

export type Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Icons = {
    __typename?: 'Icons';
    docs?: Maybe<Array<Maybe<Icon>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type IconsCreateAccess = {
    __typename?: 'IconsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsCreateDocAccess = {
    __typename?: 'IconsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsDeleteAccess = {
    __typename?: 'IconsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsDeleteDocAccess = {
    __typename?: 'IconsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsDocAccessFields = {
    __typename?: 'IconsDocAccessFields';
    alt?: Maybe<IconsDocAccessFields_Alt>;
    createdAt?: Maybe<IconsDocAccessFields_CreatedAt>;
    filename?: Maybe<IconsDocAccessFields_Filename>;
    filesize?: Maybe<IconsDocAccessFields_Filesize>;
    height?: Maybe<IconsDocAccessFields_Height>;
    mimeType?: Maybe<IconsDocAccessFields_MimeType>;
    sizes?: Maybe<IconsDocAccessFields_Sizes>;
    updatedAt?: Maybe<IconsDocAccessFields_UpdatedAt>;
    url?: Maybe<IconsDocAccessFields_Url>;
    width?: Maybe<IconsDocAccessFields_Width>;
};

export type IconsDocAccessFields_Alt = {
    __typename?: 'IconsDocAccessFields_alt';
    create?: Maybe<IconsDocAccessFields_Alt_Create>;
    delete?: Maybe<IconsDocAccessFields_Alt_Delete>;
    read?: Maybe<IconsDocAccessFields_Alt_Read>;
    update?: Maybe<IconsDocAccessFields_Alt_Update>;
};

export type IconsDocAccessFields_Alt_Create = {
    __typename?: 'IconsDocAccessFields_alt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Alt_Delete = {
    __typename?: 'IconsDocAccessFields_alt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Alt_Read = {
    __typename?: 'IconsDocAccessFields_alt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Alt_Update = {
    __typename?: 'IconsDocAccessFields_alt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_CreatedAt = {
    __typename?: 'IconsDocAccessFields_createdAt';
    create?: Maybe<IconsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<IconsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<IconsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<IconsDocAccessFields_CreatedAt_Update>;
};

export type IconsDocAccessFields_CreatedAt_Create = {
    __typename?: 'IconsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'IconsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_CreatedAt_Read = {
    __typename?: 'IconsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_CreatedAt_Update = {
    __typename?: 'IconsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filename = {
    __typename?: 'IconsDocAccessFields_filename';
    create?: Maybe<IconsDocAccessFields_Filename_Create>;
    delete?: Maybe<IconsDocAccessFields_Filename_Delete>;
    read?: Maybe<IconsDocAccessFields_Filename_Read>;
    update?: Maybe<IconsDocAccessFields_Filename_Update>;
};

export type IconsDocAccessFields_Filename_Create = {
    __typename?: 'IconsDocAccessFields_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filename_Delete = {
    __typename?: 'IconsDocAccessFields_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filename_Read = {
    __typename?: 'IconsDocAccessFields_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filename_Update = {
    __typename?: 'IconsDocAccessFields_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filesize = {
    __typename?: 'IconsDocAccessFields_filesize';
    create?: Maybe<IconsDocAccessFields_Filesize_Create>;
    delete?: Maybe<IconsDocAccessFields_Filesize_Delete>;
    read?: Maybe<IconsDocAccessFields_Filesize_Read>;
    update?: Maybe<IconsDocAccessFields_Filesize_Update>;
};

export type IconsDocAccessFields_Filesize_Create = {
    __typename?: 'IconsDocAccessFields_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filesize_Delete = {
    __typename?: 'IconsDocAccessFields_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filesize_Read = {
    __typename?: 'IconsDocAccessFields_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filesize_Update = {
    __typename?: 'IconsDocAccessFields_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Height = {
    __typename?: 'IconsDocAccessFields_height';
    create?: Maybe<IconsDocAccessFields_Height_Create>;
    delete?: Maybe<IconsDocAccessFields_Height_Delete>;
    read?: Maybe<IconsDocAccessFields_Height_Read>;
    update?: Maybe<IconsDocAccessFields_Height_Update>;
};

export type IconsDocAccessFields_Height_Create = {
    __typename?: 'IconsDocAccessFields_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Height_Delete = {
    __typename?: 'IconsDocAccessFields_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Height_Read = {
    __typename?: 'IconsDocAccessFields_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Height_Update = {
    __typename?: 'IconsDocAccessFields_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_MimeType = {
    __typename?: 'IconsDocAccessFields_mimeType';
    create?: Maybe<IconsDocAccessFields_MimeType_Create>;
    delete?: Maybe<IconsDocAccessFields_MimeType_Delete>;
    read?: Maybe<IconsDocAccessFields_MimeType_Read>;
    update?: Maybe<IconsDocAccessFields_MimeType_Update>;
};

export type IconsDocAccessFields_MimeType_Create = {
    __typename?: 'IconsDocAccessFields_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_MimeType_Delete = {
    __typename?: 'IconsDocAccessFields_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_MimeType_Read = {
    __typename?: 'IconsDocAccessFields_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_MimeType_Update = {
    __typename?: 'IconsDocAccessFields_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes = {
    __typename?: 'IconsDocAccessFields_sizes';
    create?: Maybe<IconsDocAccessFields_Sizes_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Delete>;
    fields?: Maybe<IconsDocAccessFields_Sizes_Fields>;
    read?: Maybe<IconsDocAccessFields_Sizes_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Update>;
};

export type IconsDocAccessFields_Sizes_Create = {
    __typename?: 'IconsDocAccessFields_sizes_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Fields = {
    __typename?: 'IconsDocAccessFields_sizes_Fields';
    thumbnail?: Maybe<IconsDocAccessFields_Sizes_Thumbnail>;
};

export type IconsDocAccessFields_Sizes_Read = {
    __typename?: 'IconsDocAccessFields_sizes_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Update = {
    __typename?: 'IconsDocAccessFields_sizes_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Delete>;
    fields?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Fields>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Fields = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Fields';
    filename?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename>;
    filesize?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize>;
    height?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height>;
    mimeType?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType>;
    url?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url>;
    width?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_UpdatedAt = {
    __typename?: 'IconsDocAccessFields_updatedAt';
    create?: Maybe<IconsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<IconsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<IconsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<IconsDocAccessFields_UpdatedAt_Update>;
};

export type IconsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'IconsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'IconsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'IconsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'IconsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Url = {
    __typename?: 'IconsDocAccessFields_url';
    create?: Maybe<IconsDocAccessFields_Url_Create>;
    delete?: Maybe<IconsDocAccessFields_Url_Delete>;
    read?: Maybe<IconsDocAccessFields_Url_Read>;
    update?: Maybe<IconsDocAccessFields_Url_Update>;
};

export type IconsDocAccessFields_Url_Create = {
    __typename?: 'IconsDocAccessFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Url_Delete = {
    __typename?: 'IconsDocAccessFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Url_Read = {
    __typename?: 'IconsDocAccessFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Url_Update = {
    __typename?: 'IconsDocAccessFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Width = {
    __typename?: 'IconsDocAccessFields_width';
    create?: Maybe<IconsDocAccessFields_Width_Create>;
    delete?: Maybe<IconsDocAccessFields_Width_Delete>;
    read?: Maybe<IconsDocAccessFields_Width_Read>;
    update?: Maybe<IconsDocAccessFields_Width_Update>;
};

export type IconsDocAccessFields_Width_Create = {
    __typename?: 'IconsDocAccessFields_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Width_Delete = {
    __typename?: 'IconsDocAccessFields_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Width_Read = {
    __typename?: 'IconsDocAccessFields_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Width_Update = {
    __typename?: 'IconsDocAccessFields_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields = {
    __typename?: 'IconsFields';
    alt?: Maybe<IconsFields_Alt>;
    createdAt?: Maybe<IconsFields_CreatedAt>;
    filename?: Maybe<IconsFields_Filename>;
    filesize?: Maybe<IconsFields_Filesize>;
    height?: Maybe<IconsFields_Height>;
    mimeType?: Maybe<IconsFields_MimeType>;
    sizes?: Maybe<IconsFields_Sizes>;
    updatedAt?: Maybe<IconsFields_UpdatedAt>;
    url?: Maybe<IconsFields_Url>;
    width?: Maybe<IconsFields_Width>;
};

export type IconsFields_Alt = {
    __typename?: 'IconsFields_alt';
    create?: Maybe<IconsFields_Alt_Create>;
    delete?: Maybe<IconsFields_Alt_Delete>;
    read?: Maybe<IconsFields_Alt_Read>;
    update?: Maybe<IconsFields_Alt_Update>;
};

export type IconsFields_Alt_Create = {
    __typename?: 'IconsFields_alt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Alt_Delete = {
    __typename?: 'IconsFields_alt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Alt_Read = {
    __typename?: 'IconsFields_alt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Alt_Update = {
    __typename?: 'IconsFields_alt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_CreatedAt = {
    __typename?: 'IconsFields_createdAt';
    create?: Maybe<IconsFields_CreatedAt_Create>;
    delete?: Maybe<IconsFields_CreatedAt_Delete>;
    read?: Maybe<IconsFields_CreatedAt_Read>;
    update?: Maybe<IconsFields_CreatedAt_Update>;
};

export type IconsFields_CreatedAt_Create = {
    __typename?: 'IconsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_CreatedAt_Delete = {
    __typename?: 'IconsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_CreatedAt_Read = {
    __typename?: 'IconsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_CreatedAt_Update = {
    __typename?: 'IconsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filename = {
    __typename?: 'IconsFields_filename';
    create?: Maybe<IconsFields_Filename_Create>;
    delete?: Maybe<IconsFields_Filename_Delete>;
    read?: Maybe<IconsFields_Filename_Read>;
    update?: Maybe<IconsFields_Filename_Update>;
};

export type IconsFields_Filename_Create = {
    __typename?: 'IconsFields_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filename_Delete = {
    __typename?: 'IconsFields_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filename_Read = {
    __typename?: 'IconsFields_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filename_Update = {
    __typename?: 'IconsFields_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filesize = {
    __typename?: 'IconsFields_filesize';
    create?: Maybe<IconsFields_Filesize_Create>;
    delete?: Maybe<IconsFields_Filesize_Delete>;
    read?: Maybe<IconsFields_Filesize_Read>;
    update?: Maybe<IconsFields_Filesize_Update>;
};

export type IconsFields_Filesize_Create = {
    __typename?: 'IconsFields_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filesize_Delete = {
    __typename?: 'IconsFields_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filesize_Read = {
    __typename?: 'IconsFields_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filesize_Update = {
    __typename?: 'IconsFields_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Height = {
    __typename?: 'IconsFields_height';
    create?: Maybe<IconsFields_Height_Create>;
    delete?: Maybe<IconsFields_Height_Delete>;
    read?: Maybe<IconsFields_Height_Read>;
    update?: Maybe<IconsFields_Height_Update>;
};

export type IconsFields_Height_Create = {
    __typename?: 'IconsFields_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Height_Delete = {
    __typename?: 'IconsFields_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Height_Read = {
    __typename?: 'IconsFields_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Height_Update = {
    __typename?: 'IconsFields_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_MimeType = {
    __typename?: 'IconsFields_mimeType';
    create?: Maybe<IconsFields_MimeType_Create>;
    delete?: Maybe<IconsFields_MimeType_Delete>;
    read?: Maybe<IconsFields_MimeType_Read>;
    update?: Maybe<IconsFields_MimeType_Update>;
};

export type IconsFields_MimeType_Create = {
    __typename?: 'IconsFields_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_MimeType_Delete = {
    __typename?: 'IconsFields_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_MimeType_Read = {
    __typename?: 'IconsFields_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_MimeType_Update = {
    __typename?: 'IconsFields_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes = {
    __typename?: 'IconsFields_sizes';
    create?: Maybe<IconsFields_Sizes_Create>;
    delete?: Maybe<IconsFields_Sizes_Delete>;
    fields?: Maybe<IconsFields_Sizes_Fields>;
    read?: Maybe<IconsFields_Sizes_Read>;
    update?: Maybe<IconsFields_Sizes_Update>;
};

export type IconsFields_Sizes_Create = {
    __typename?: 'IconsFields_sizes_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Delete = {
    __typename?: 'IconsFields_sizes_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Fields = {
    __typename?: 'IconsFields_sizes_Fields';
    thumbnail?: Maybe<IconsFields_Sizes_Thumbnail>;
};

export type IconsFields_Sizes_Read = {
    __typename?: 'IconsFields_sizes_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Update = {
    __typename?: 'IconsFields_sizes_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail = {
    __typename?: 'IconsFields_sizes_thumbnail';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Delete>;
    fields?: Maybe<IconsFields_Sizes_Thumbnail_Fields>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Update>;
};

export type IconsFields_Sizes_Thumbnail_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Fields = {
    __typename?: 'IconsFields_sizes_thumbnail_Fields';
    filename?: Maybe<IconsFields_Sizes_Thumbnail_Filename>;
    filesize?: Maybe<IconsFields_Sizes_Thumbnail_Filesize>;
    height?: Maybe<IconsFields_Sizes_Thumbnail_Height>;
    mimeType?: Maybe<IconsFields_Sizes_Thumbnail_MimeType>;
    url?: Maybe<IconsFields_Sizes_Thumbnail_Url>;
    width?: Maybe<IconsFields_Sizes_Thumbnail_Width>;
};

export type IconsFields_Sizes_Thumbnail_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filename = {
    __typename?: 'IconsFields_sizes_thumbnail_filename';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Filename_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Filename_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Filename_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Filename_Update>;
};

export type IconsFields_Sizes_Thumbnail_Filename_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filename_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filename_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filename_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filesize = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Filesize_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Filesize_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Filesize_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Filesize_Update>;
};

export type IconsFields_Sizes_Thumbnail_Filesize_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filesize_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filesize_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filesize_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Height = {
    __typename?: 'IconsFields_sizes_thumbnail_height';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Height_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Height_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Height_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Height_Update>;
};

export type IconsFields_Sizes_Thumbnail_Height_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Height_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Height_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Height_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_MimeType = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType';
    create?: Maybe<IconsFields_Sizes_Thumbnail_MimeType_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_MimeType_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_MimeType_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_MimeType_Update>;
};

export type IconsFields_Sizes_Thumbnail_MimeType_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_MimeType_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_MimeType_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_MimeType_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Url = {
    __typename?: 'IconsFields_sizes_thumbnail_url';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Url_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Url_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Url_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Url_Update>;
};

export type IconsFields_Sizes_Thumbnail_Url_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Url_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Url_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Url_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Width = {
    __typename?: 'IconsFields_sizes_thumbnail_width';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Width_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Width_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Width_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Width_Update>;
};

export type IconsFields_Sizes_Thumbnail_Width_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Width_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Width_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Width_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_UpdatedAt = {
    __typename?: 'IconsFields_updatedAt';
    create?: Maybe<IconsFields_UpdatedAt_Create>;
    delete?: Maybe<IconsFields_UpdatedAt_Delete>;
    read?: Maybe<IconsFields_UpdatedAt_Read>;
    update?: Maybe<IconsFields_UpdatedAt_Update>;
};

export type IconsFields_UpdatedAt_Create = {
    __typename?: 'IconsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_UpdatedAt_Delete = {
    __typename?: 'IconsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_UpdatedAt_Read = {
    __typename?: 'IconsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_UpdatedAt_Update = {
    __typename?: 'IconsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Url = {
    __typename?: 'IconsFields_url';
    create?: Maybe<IconsFields_Url_Create>;
    delete?: Maybe<IconsFields_Url_Delete>;
    read?: Maybe<IconsFields_Url_Read>;
    update?: Maybe<IconsFields_Url_Update>;
};

export type IconsFields_Url_Create = {
    __typename?: 'IconsFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Url_Delete = {
    __typename?: 'IconsFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Url_Read = {
    __typename?: 'IconsFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Url_Update = {
    __typename?: 'IconsFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Width = {
    __typename?: 'IconsFields_width';
    create?: Maybe<IconsFields_Width_Create>;
    delete?: Maybe<IconsFields_Width_Delete>;
    read?: Maybe<IconsFields_Width_Read>;
    update?: Maybe<IconsFields_Width_Update>;
};

export type IconsFields_Width_Create = {
    __typename?: 'IconsFields_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Width_Delete = {
    __typename?: 'IconsFields_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Width_Read = {
    __typename?: 'IconsFields_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Width_Update = {
    __typename?: 'IconsFields_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsReadAccess = {
    __typename?: 'IconsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsReadDocAccess = {
    __typename?: 'IconsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsUpdateAccess = {
    __typename?: 'IconsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsUpdateDocAccess = {
    __typename?: 'IconsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Image = {
    __typename?: 'Image';
    alt: Scalars['String']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    filename?: Maybe<Scalars['String']['output']>;
    filesize?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    sizes?: Maybe<Image_Sizes>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type Image_Sizes = {
    __typename?: 'Image_Sizes';
    thumbnail?: Maybe<Image_Sizes_Thumbnail>;
};

export type Image_Sizes_Thumbnail = {
    __typename?: 'Image_Sizes_Thumbnail';
    filename?: Maybe<Scalars['String']['output']>;
    filesize?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Image_Where_Or>>>;
    alt?: InputMaybe<Image_Alt_Operator>;
    createdAt?: InputMaybe<Image_CreatedAt_Operator>;
    filename?: InputMaybe<Image_Filename_Operator>;
    filesize?: InputMaybe<Image_Filesize_Operator>;
    height?: InputMaybe<Image_Height_Operator>;
    id?: InputMaybe<Image_Id_Operator>;
    mimeType?: InputMaybe<Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Image_UpdatedAt_Operator>;
    url?: InputMaybe<Image_Url_Operator>;
    width?: InputMaybe<Image_Width_Operator>;
};

export type Image_Where_And = {
    alt?: InputMaybe<Image_Alt_Operator>;
    createdAt?: InputMaybe<Image_CreatedAt_Operator>;
    filename?: InputMaybe<Image_Filename_Operator>;
    filesize?: InputMaybe<Image_Filesize_Operator>;
    height?: InputMaybe<Image_Height_Operator>;
    id?: InputMaybe<Image_Id_Operator>;
    mimeType?: InputMaybe<Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Image_UpdatedAt_Operator>;
    url?: InputMaybe<Image_Url_Operator>;
    width?: InputMaybe<Image_Width_Operator>;
};

export type Image_Where_Or = {
    alt?: InputMaybe<Image_Alt_Operator>;
    createdAt?: InputMaybe<Image_CreatedAt_Operator>;
    filename?: InputMaybe<Image_Filename_Operator>;
    filesize?: InputMaybe<Image_Filesize_Operator>;
    height?: InputMaybe<Image_Height_Operator>;
    id?: InputMaybe<Image_Id_Operator>;
    mimeType?: InputMaybe<Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Image_UpdatedAt_Operator>;
    url?: InputMaybe<Image_Url_Operator>;
    width?: InputMaybe<Image_Width_Operator>;
};

export type Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Images = {
    __typename?: 'Images';
    docs?: Maybe<Array<Maybe<Image>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ImagesCreateAccess = {
    __typename?: 'ImagesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesCreateDocAccess = {
    __typename?: 'ImagesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesDeleteAccess = {
    __typename?: 'ImagesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesDeleteDocAccess = {
    __typename?: 'ImagesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesDocAccessFields = {
    __typename?: 'ImagesDocAccessFields';
    alt?: Maybe<ImagesDocAccessFields_Alt>;
    createdAt?: Maybe<ImagesDocAccessFields_CreatedAt>;
    filename?: Maybe<ImagesDocAccessFields_Filename>;
    filesize?: Maybe<ImagesDocAccessFields_Filesize>;
    height?: Maybe<ImagesDocAccessFields_Height>;
    mimeType?: Maybe<ImagesDocAccessFields_MimeType>;
    sizes?: Maybe<ImagesDocAccessFields_Sizes>;
    updatedAt?: Maybe<ImagesDocAccessFields_UpdatedAt>;
    url?: Maybe<ImagesDocAccessFields_Url>;
    width?: Maybe<ImagesDocAccessFields_Width>;
};

export type ImagesDocAccessFields_Alt = {
    __typename?: 'ImagesDocAccessFields_alt';
    create?: Maybe<ImagesDocAccessFields_Alt_Create>;
    delete?: Maybe<ImagesDocAccessFields_Alt_Delete>;
    read?: Maybe<ImagesDocAccessFields_Alt_Read>;
    update?: Maybe<ImagesDocAccessFields_Alt_Update>;
};

export type ImagesDocAccessFields_Alt_Create = {
    __typename?: 'ImagesDocAccessFields_alt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Alt_Delete = {
    __typename?: 'ImagesDocAccessFields_alt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Alt_Read = {
    __typename?: 'ImagesDocAccessFields_alt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Alt_Update = {
    __typename?: 'ImagesDocAccessFields_alt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_CreatedAt = {
    __typename?: 'ImagesDocAccessFields_createdAt';
    create?: Maybe<ImagesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<ImagesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<ImagesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<ImagesDocAccessFields_CreatedAt_Update>;
};

export type ImagesDocAccessFields_CreatedAt_Create = {
    __typename?: 'ImagesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'ImagesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_CreatedAt_Read = {
    __typename?: 'ImagesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_CreatedAt_Update = {
    __typename?: 'ImagesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filename = {
    __typename?: 'ImagesDocAccessFields_filename';
    create?: Maybe<ImagesDocAccessFields_Filename_Create>;
    delete?: Maybe<ImagesDocAccessFields_Filename_Delete>;
    read?: Maybe<ImagesDocAccessFields_Filename_Read>;
    update?: Maybe<ImagesDocAccessFields_Filename_Update>;
};

export type ImagesDocAccessFields_Filename_Create = {
    __typename?: 'ImagesDocAccessFields_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filename_Delete = {
    __typename?: 'ImagesDocAccessFields_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filename_Read = {
    __typename?: 'ImagesDocAccessFields_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filename_Update = {
    __typename?: 'ImagesDocAccessFields_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filesize = {
    __typename?: 'ImagesDocAccessFields_filesize';
    create?: Maybe<ImagesDocAccessFields_Filesize_Create>;
    delete?: Maybe<ImagesDocAccessFields_Filesize_Delete>;
    read?: Maybe<ImagesDocAccessFields_Filesize_Read>;
    update?: Maybe<ImagesDocAccessFields_Filesize_Update>;
};

export type ImagesDocAccessFields_Filesize_Create = {
    __typename?: 'ImagesDocAccessFields_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filesize_Delete = {
    __typename?: 'ImagesDocAccessFields_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filesize_Read = {
    __typename?: 'ImagesDocAccessFields_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filesize_Update = {
    __typename?: 'ImagesDocAccessFields_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Height = {
    __typename?: 'ImagesDocAccessFields_height';
    create?: Maybe<ImagesDocAccessFields_Height_Create>;
    delete?: Maybe<ImagesDocAccessFields_Height_Delete>;
    read?: Maybe<ImagesDocAccessFields_Height_Read>;
    update?: Maybe<ImagesDocAccessFields_Height_Update>;
};

export type ImagesDocAccessFields_Height_Create = {
    __typename?: 'ImagesDocAccessFields_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Height_Delete = {
    __typename?: 'ImagesDocAccessFields_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Height_Read = {
    __typename?: 'ImagesDocAccessFields_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Height_Update = {
    __typename?: 'ImagesDocAccessFields_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_MimeType = {
    __typename?: 'ImagesDocAccessFields_mimeType';
    create?: Maybe<ImagesDocAccessFields_MimeType_Create>;
    delete?: Maybe<ImagesDocAccessFields_MimeType_Delete>;
    read?: Maybe<ImagesDocAccessFields_MimeType_Read>;
    update?: Maybe<ImagesDocAccessFields_MimeType_Update>;
};

export type ImagesDocAccessFields_MimeType_Create = {
    __typename?: 'ImagesDocAccessFields_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_MimeType_Delete = {
    __typename?: 'ImagesDocAccessFields_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_MimeType_Read = {
    __typename?: 'ImagesDocAccessFields_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_MimeType_Update = {
    __typename?: 'ImagesDocAccessFields_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes = {
    __typename?: 'ImagesDocAccessFields_sizes';
    create?: Maybe<ImagesDocAccessFields_Sizes_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Delete>;
    fields?: Maybe<ImagesDocAccessFields_Sizes_Fields>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Update>;
};

export type ImagesDocAccessFields_Sizes_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Fields = {
    __typename?: 'ImagesDocAccessFields_sizes_Fields';
    thumbnail?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail>;
};

export type ImagesDocAccessFields_Sizes_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Delete>;
    fields?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Fields>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Fields = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Fields';
    filename?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename>;
    filesize?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize>;
    height?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height>;
    mimeType?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType>;
    url?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url>;
    width?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_UpdatedAt = {
    __typename?: 'ImagesDocAccessFields_updatedAt';
    create?: Maybe<ImagesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<ImagesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<ImagesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<ImagesDocAccessFields_UpdatedAt_Update>;
};

export type ImagesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'ImagesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'ImagesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'ImagesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'ImagesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Url = {
    __typename?: 'ImagesDocAccessFields_url';
    create?: Maybe<ImagesDocAccessFields_Url_Create>;
    delete?: Maybe<ImagesDocAccessFields_Url_Delete>;
    read?: Maybe<ImagesDocAccessFields_Url_Read>;
    update?: Maybe<ImagesDocAccessFields_Url_Update>;
};

export type ImagesDocAccessFields_Url_Create = {
    __typename?: 'ImagesDocAccessFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Url_Delete = {
    __typename?: 'ImagesDocAccessFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Url_Read = {
    __typename?: 'ImagesDocAccessFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Url_Update = {
    __typename?: 'ImagesDocAccessFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Width = {
    __typename?: 'ImagesDocAccessFields_width';
    create?: Maybe<ImagesDocAccessFields_Width_Create>;
    delete?: Maybe<ImagesDocAccessFields_Width_Delete>;
    read?: Maybe<ImagesDocAccessFields_Width_Read>;
    update?: Maybe<ImagesDocAccessFields_Width_Update>;
};

export type ImagesDocAccessFields_Width_Create = {
    __typename?: 'ImagesDocAccessFields_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Width_Delete = {
    __typename?: 'ImagesDocAccessFields_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Width_Read = {
    __typename?: 'ImagesDocAccessFields_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Width_Update = {
    __typename?: 'ImagesDocAccessFields_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields = {
    __typename?: 'ImagesFields';
    alt?: Maybe<ImagesFields_Alt>;
    createdAt?: Maybe<ImagesFields_CreatedAt>;
    filename?: Maybe<ImagesFields_Filename>;
    filesize?: Maybe<ImagesFields_Filesize>;
    height?: Maybe<ImagesFields_Height>;
    mimeType?: Maybe<ImagesFields_MimeType>;
    sizes?: Maybe<ImagesFields_Sizes>;
    updatedAt?: Maybe<ImagesFields_UpdatedAt>;
    url?: Maybe<ImagesFields_Url>;
    width?: Maybe<ImagesFields_Width>;
};

export type ImagesFields_Alt = {
    __typename?: 'ImagesFields_alt';
    create?: Maybe<ImagesFields_Alt_Create>;
    delete?: Maybe<ImagesFields_Alt_Delete>;
    read?: Maybe<ImagesFields_Alt_Read>;
    update?: Maybe<ImagesFields_Alt_Update>;
};

export type ImagesFields_Alt_Create = {
    __typename?: 'ImagesFields_alt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Alt_Delete = {
    __typename?: 'ImagesFields_alt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Alt_Read = {
    __typename?: 'ImagesFields_alt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Alt_Update = {
    __typename?: 'ImagesFields_alt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_CreatedAt = {
    __typename?: 'ImagesFields_createdAt';
    create?: Maybe<ImagesFields_CreatedAt_Create>;
    delete?: Maybe<ImagesFields_CreatedAt_Delete>;
    read?: Maybe<ImagesFields_CreatedAt_Read>;
    update?: Maybe<ImagesFields_CreatedAt_Update>;
};

export type ImagesFields_CreatedAt_Create = {
    __typename?: 'ImagesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_CreatedAt_Delete = {
    __typename?: 'ImagesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_CreatedAt_Read = {
    __typename?: 'ImagesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_CreatedAt_Update = {
    __typename?: 'ImagesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filename = {
    __typename?: 'ImagesFields_filename';
    create?: Maybe<ImagesFields_Filename_Create>;
    delete?: Maybe<ImagesFields_Filename_Delete>;
    read?: Maybe<ImagesFields_Filename_Read>;
    update?: Maybe<ImagesFields_Filename_Update>;
};

export type ImagesFields_Filename_Create = {
    __typename?: 'ImagesFields_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filename_Delete = {
    __typename?: 'ImagesFields_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filename_Read = {
    __typename?: 'ImagesFields_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filename_Update = {
    __typename?: 'ImagesFields_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filesize = {
    __typename?: 'ImagesFields_filesize';
    create?: Maybe<ImagesFields_Filesize_Create>;
    delete?: Maybe<ImagesFields_Filesize_Delete>;
    read?: Maybe<ImagesFields_Filesize_Read>;
    update?: Maybe<ImagesFields_Filesize_Update>;
};

export type ImagesFields_Filesize_Create = {
    __typename?: 'ImagesFields_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filesize_Delete = {
    __typename?: 'ImagesFields_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filesize_Read = {
    __typename?: 'ImagesFields_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filesize_Update = {
    __typename?: 'ImagesFields_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Height = {
    __typename?: 'ImagesFields_height';
    create?: Maybe<ImagesFields_Height_Create>;
    delete?: Maybe<ImagesFields_Height_Delete>;
    read?: Maybe<ImagesFields_Height_Read>;
    update?: Maybe<ImagesFields_Height_Update>;
};

export type ImagesFields_Height_Create = {
    __typename?: 'ImagesFields_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Height_Delete = {
    __typename?: 'ImagesFields_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Height_Read = {
    __typename?: 'ImagesFields_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Height_Update = {
    __typename?: 'ImagesFields_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_MimeType = {
    __typename?: 'ImagesFields_mimeType';
    create?: Maybe<ImagesFields_MimeType_Create>;
    delete?: Maybe<ImagesFields_MimeType_Delete>;
    read?: Maybe<ImagesFields_MimeType_Read>;
    update?: Maybe<ImagesFields_MimeType_Update>;
};

export type ImagesFields_MimeType_Create = {
    __typename?: 'ImagesFields_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_MimeType_Delete = {
    __typename?: 'ImagesFields_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_MimeType_Read = {
    __typename?: 'ImagesFields_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_MimeType_Update = {
    __typename?: 'ImagesFields_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes = {
    __typename?: 'ImagesFields_sizes';
    create?: Maybe<ImagesFields_Sizes_Create>;
    delete?: Maybe<ImagesFields_Sizes_Delete>;
    fields?: Maybe<ImagesFields_Sizes_Fields>;
    read?: Maybe<ImagesFields_Sizes_Read>;
    update?: Maybe<ImagesFields_Sizes_Update>;
};

export type ImagesFields_Sizes_Create = {
    __typename?: 'ImagesFields_sizes_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Delete = {
    __typename?: 'ImagesFields_sizes_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Fields = {
    __typename?: 'ImagesFields_sizes_Fields';
    thumbnail?: Maybe<ImagesFields_Sizes_Thumbnail>;
};

export type ImagesFields_Sizes_Read = {
    __typename?: 'ImagesFields_sizes_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Update = {
    __typename?: 'ImagesFields_sizes_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail = {
    __typename?: 'ImagesFields_sizes_thumbnail';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Delete>;
    fields?: Maybe<ImagesFields_Sizes_Thumbnail_Fields>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Fields = {
    __typename?: 'ImagesFields_sizes_thumbnail_Fields';
    filename?: Maybe<ImagesFields_Sizes_Thumbnail_Filename>;
    filesize?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize>;
    height?: Maybe<ImagesFields_Sizes_Thumbnail_Height>;
    mimeType?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType>;
    url?: Maybe<ImagesFields_Sizes_Thumbnail_Url>;
    width?: Maybe<ImagesFields_Sizes_Thumbnail_Width>;
};

export type ImagesFields_Sizes_Thumbnail_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filename = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Filename_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Filename_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Filename_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Filename_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Filename_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filename_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filename_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filename_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filesize = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Filesize_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filesize_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filesize_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filesize_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Height = {
    __typename?: 'ImagesFields_sizes_thumbnail_height';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Height_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Height_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Height_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Height_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Height_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Height_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Height_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Height_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_MimeType = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType_Update>;
};

export type ImagesFields_Sizes_Thumbnail_MimeType_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_MimeType_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_MimeType_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_MimeType_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Url = {
    __typename?: 'ImagesFields_sizes_thumbnail_url';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Url_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Url_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Url_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Url_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Url_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Url_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Url_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Url_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Width = {
    __typename?: 'ImagesFields_sizes_thumbnail_width';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Width_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Width_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Width_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Width_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Width_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Width_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Width_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Width_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_UpdatedAt = {
    __typename?: 'ImagesFields_updatedAt';
    create?: Maybe<ImagesFields_UpdatedAt_Create>;
    delete?: Maybe<ImagesFields_UpdatedAt_Delete>;
    read?: Maybe<ImagesFields_UpdatedAt_Read>;
    update?: Maybe<ImagesFields_UpdatedAt_Update>;
};

export type ImagesFields_UpdatedAt_Create = {
    __typename?: 'ImagesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_UpdatedAt_Delete = {
    __typename?: 'ImagesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_UpdatedAt_Read = {
    __typename?: 'ImagesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_UpdatedAt_Update = {
    __typename?: 'ImagesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Url = {
    __typename?: 'ImagesFields_url';
    create?: Maybe<ImagesFields_Url_Create>;
    delete?: Maybe<ImagesFields_Url_Delete>;
    read?: Maybe<ImagesFields_Url_Read>;
    update?: Maybe<ImagesFields_Url_Update>;
};

export type ImagesFields_Url_Create = {
    __typename?: 'ImagesFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Url_Delete = {
    __typename?: 'ImagesFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Url_Read = {
    __typename?: 'ImagesFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Url_Update = {
    __typename?: 'ImagesFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Width = {
    __typename?: 'ImagesFields_width';
    create?: Maybe<ImagesFields_Width_Create>;
    delete?: Maybe<ImagesFields_Width_Delete>;
    read?: Maybe<ImagesFields_Width_Read>;
    update?: Maybe<ImagesFields_Width_Update>;
};

export type ImagesFields_Width_Create = {
    __typename?: 'ImagesFields_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Width_Delete = {
    __typename?: 'ImagesFields_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Width_Read = {
    __typename?: 'ImagesFields_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Width_Update = {
    __typename?: 'ImagesFields_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesReadAccess = {
    __typename?: 'ImagesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesReadDocAccess = {
    __typename?: 'ImagesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesUpdateAccess = {
    __typename?: 'ImagesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesUpdateDocAccess = {
    __typename?: 'ImagesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createAccordion?: Maybe<Accordion>;
    createButton?: Maybe<Button>;
    createConversionPanel?: Maybe<ConversionPanel>;
    createCtaTile?: Maybe<CtaTile>;
    createFeatureGrid?: Maybe<FeatureGrid>;
    createFeatureTile?: Maybe<FeatureTile>;
    createFeaturedMedia?: Maybe<FeaturedMedia>;
    createHero?: Maybe<Hero>;
    createIcon?: Maybe<Icon>;
    createIconTile?: Maybe<IconTile>;
    createImage?: Maybe<Image>;
    createPage?: Maybe<Page>;
    createSwitchback?: Maybe<Switchback>;
    createTileGrid?: Maybe<TileGrid>;
    createUser?: Maybe<User>;
    createVideo?: Maybe<Video>;
    deleteAccordion?: Maybe<Accordion>;
    deleteButton?: Maybe<Button>;
    deleteConversionPanel?: Maybe<ConversionPanel>;
    deleteCtaTile?: Maybe<CtaTile>;
    deleteFeatureGrid?: Maybe<FeatureGrid>;
    deleteFeatureTile?: Maybe<FeatureTile>;
    deleteFeaturedMedia?: Maybe<FeaturedMedia>;
    deleteHero?: Maybe<Hero>;
    deleteIcon?: Maybe<Icon>;
    deleteIconTile?: Maybe<IconTile>;
    deleteImage?: Maybe<Image>;
    deletePage?: Maybe<Page>;
    deletePreference?: Maybe<Preference>;
    deleteSwitchback?: Maybe<Switchback>;
    deleteTileGrid?: Maybe<TileGrid>;
    deleteUser?: Maybe<User>;
    deleteVideo?: Maybe<Video>;
    forgotPasswordUser: Scalars['Boolean']['output'];
    loginUser?: Maybe<UsersLoginResult>;
    logoutUser?: Maybe<Scalars['String']['output']>;
    refreshTokenUser?: Maybe<UsersRefreshedUser>;
    resetPasswordUser?: Maybe<UsersResetPassword>;
    unlockUser: Scalars['Boolean']['output'];
    updateAccordion?: Maybe<Accordion>;
    updateButton?: Maybe<Button>;
    updateConversionPanel?: Maybe<ConversionPanel>;
    updateCtaTile?: Maybe<CtaTile>;
    updateFeatureGrid?: Maybe<FeatureGrid>;
    updateFeatureTile?: Maybe<FeatureTile>;
    updateFeaturedMedia?: Maybe<FeaturedMedia>;
    updateFooter?: Maybe<Footer>;
    updateHeader?: Maybe<Header>;
    updateHero?: Maybe<Hero>;
    updateIcon?: Maybe<Icon>;
    updateIconTile?: Maybe<IconTile>;
    updateImage?: Maybe<Image>;
    updatePage?: Maybe<Page>;
    updatePreference?: Maybe<Preference>;
    updateSwitchback?: Maybe<Switchback>;
    updateTileGrid?: Maybe<TileGrid>;
    updateUser?: Maybe<User>;
    updateVideo?: Maybe<Video>;
    verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};

export type MutationCreateAccordionArgs = {
    data: MutationAccordionInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateButtonArgs = {
    data: MutationButtonInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateConversionPanelArgs = {
    data: MutationConversionPanelInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateCtaTileArgs = {
    data: MutationCtaTileInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateFeatureGridArgs = {
    data: MutationFeatureGridInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateFeatureTileArgs = {
    data: MutationFeatureTileInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateFeaturedMediaArgs = {
    data: MutationFeaturedMediaInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateHeroArgs = {
    data: MutationHeroInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateIconArgs = {
    data: MutationIconInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateIconTileArgs = {
    data: MutationIconTileInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateImageArgs = {
    data: MutationImageInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreatePageArgs = {
    data: MutationPageInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateSwitchbackArgs = {
    data: MutationSwitchbackInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateTileGridArgs = {
    data: MutationTileGridInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateUserArgs = {
    data: MutationUserInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateVideoArgs = {
    data: MutationVideoInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationDeleteAccordionArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteButtonArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteConversionPanelArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteCtaTileArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteFeatureGridArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteFeatureTileArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteFeaturedMediaArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteHeroArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteIconArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteIconTileArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteImageArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeletePageArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeletePreferenceArgs = {
    key: Scalars['String']['input'];
};

export type MutationDeleteSwitchbackArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteTileGridArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteUserArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteVideoArgs = {
    id: Scalars['String']['input'];
};

export type MutationForgotPasswordUserArgs = {
    disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
    email: Scalars['String']['input'];
    expiration?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationLoginUserArgs = {
    email?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRefreshTokenUserArgs = {
    token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationResetPasswordUserArgs = {
    password?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUnlockUserArgs = {
    email: Scalars['String']['input'];
};

export type MutationUpdateAccordionArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationAccordionUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateButtonArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationButtonUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateConversionPanelArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationConversionPanelUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateCtaTileArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationCtaTileUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateFeatureGridArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationFeatureGridUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateFeatureTileArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationFeatureTileUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateFeaturedMediaArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationFeaturedMediaUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateFooterArgs = {
    data: MutationFooterInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateHeaderArgs = {
    data: MutationHeaderInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateHeroArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationHeroUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateIconArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationIconUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateIconTileArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationIconTileUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateImageArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationImageUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdatePageArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationPageUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdatePreferenceArgs = {
    key: Scalars['String']['input'];
    value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUpdateSwitchbackArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationSwitchbackUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateTileGridArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationTileGridUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateUserArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationUserUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateVideoArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationVideoUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationVerifyEmailUserArgs = {
    token?: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
    __typename?: 'Page';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Page_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Slug_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Title_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Where = {
    AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
    createdAt?: InputMaybe<Page_CreatedAt_Operator>;
    id?: InputMaybe<Page_Id_Operator>;
    slug?: InputMaybe<Page_Slug_Operator>;
    title?: InputMaybe<Page_Title_Operator>;
    updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
    createdAt?: InputMaybe<Page_CreatedAt_Operator>;
    id?: InputMaybe<Page_Id_Operator>;
    slug?: InputMaybe<Page_Slug_Operator>;
    title?: InputMaybe<Page_Title_Operator>;
    updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
    createdAt?: InputMaybe<Page_CreatedAt_Operator>;
    id?: InputMaybe<Page_Id_Operator>;
    slug?: InputMaybe<Page_Slug_Operator>;
    title?: InputMaybe<Page_Title_Operator>;
    updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
    __typename?: 'Pages';
    docs?: Maybe<Array<Maybe<Page>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PagesCreateAccess = {
    __typename?: 'PagesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
    __typename?: 'PagesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
    __typename?: 'PagesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
    __typename?: 'PagesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
    __typename?: 'PagesDocAccessFields';
    createdAt?: Maybe<PagesDocAccessFields_CreatedAt>;
    slug?: Maybe<PagesDocAccessFields_Slug>;
    title?: Maybe<PagesDocAccessFields_Title>;
    updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields_CreatedAt = {
    __typename?: 'PagesDocAccessFields_createdAt';
    create?: Maybe<PagesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<PagesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
    __typename?: 'PagesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'PagesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
    __typename?: 'PagesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
    __typename?: 'PagesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug = {
    __typename?: 'PagesDocAccessFields_slug';
    create?: Maybe<PagesDocAccessFields_Slug_Create>;
    delete?: Maybe<PagesDocAccessFields_Slug_Delete>;
    read?: Maybe<PagesDocAccessFields_Slug_Read>;
    update?: Maybe<PagesDocAccessFields_Slug_Update>;
};

export type PagesDocAccessFields_Slug_Create = {
    __typename?: 'PagesDocAccessFields_slug_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Delete = {
    __typename?: 'PagesDocAccessFields_slug_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Read = {
    __typename?: 'PagesDocAccessFields_slug_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Update = {
    __typename?: 'PagesDocAccessFields_slug_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title = {
    __typename?: 'PagesDocAccessFields_title';
    create?: Maybe<PagesDocAccessFields_Title_Create>;
    delete?: Maybe<PagesDocAccessFields_Title_Delete>;
    read?: Maybe<PagesDocAccessFields_Title_Read>;
    update?: Maybe<PagesDocAccessFields_Title_Update>;
};

export type PagesDocAccessFields_Title_Create = {
    __typename?: 'PagesDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Delete = {
    __typename?: 'PagesDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Read = {
    __typename?: 'PagesDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Update = {
    __typename?: 'PagesDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
    __typename?: 'PagesDocAccessFields_updatedAt';
    create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'PagesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'PagesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'PagesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'PagesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
    __typename?: 'PagesFields';
    createdAt?: Maybe<PagesFields_CreatedAt>;
    slug?: Maybe<PagesFields_Slug>;
    title?: Maybe<PagesFields_Title>;
    updatedAt?: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields_CreatedAt = {
    __typename?: 'PagesFields_createdAt';
    create?: Maybe<PagesFields_CreatedAt_Create>;
    delete?: Maybe<PagesFields_CreatedAt_Delete>;
    read?: Maybe<PagesFields_CreatedAt_Read>;
    update?: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
    __typename?: 'PagesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
    __typename?: 'PagesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
    __typename?: 'PagesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
    __typename?: 'PagesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug = {
    __typename?: 'PagesFields_slug';
    create?: Maybe<PagesFields_Slug_Create>;
    delete?: Maybe<PagesFields_Slug_Delete>;
    read?: Maybe<PagesFields_Slug_Read>;
    update?: Maybe<PagesFields_Slug_Update>;
};

export type PagesFields_Slug_Create = {
    __typename?: 'PagesFields_slug_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Delete = {
    __typename?: 'PagesFields_slug_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Read = {
    __typename?: 'PagesFields_slug_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Update = {
    __typename?: 'PagesFields_slug_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title = {
    __typename?: 'PagesFields_title';
    create?: Maybe<PagesFields_Title_Create>;
    delete?: Maybe<PagesFields_Title_Delete>;
    read?: Maybe<PagesFields_Title_Read>;
    update?: Maybe<PagesFields_Title_Update>;
};

export type PagesFields_Title_Create = {
    __typename?: 'PagesFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Delete = {
    __typename?: 'PagesFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Read = {
    __typename?: 'PagesFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Update = {
    __typename?: 'PagesFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
    __typename?: 'PagesFields_updatedAt';
    create?: Maybe<PagesFields_UpdatedAt_Create>;
    delete?: Maybe<PagesFields_UpdatedAt_Delete>;
    read?: Maybe<PagesFields_UpdatedAt_Read>;
    update?: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
    __typename?: 'PagesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
    __typename?: 'PagesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
    __typename?: 'PagesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
    __typename?: 'PagesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
    __typename?: 'PagesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
    __typename?: 'PagesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
    __typename?: 'PagesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
    __typename?: 'PagesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Preference = {
    __typename?: 'Preference';
    createdAt: Scalars['DateTime']['output'];
    key: Scalars['String']['output'];
    updatedAt: Scalars['DateTime']['output'];
    value?: Maybe<Scalars['JSON']['output']>;
};

export type Query = {
    __typename?: 'Query';
    Access?: Maybe<Access>;
    Accordion?: Maybe<Accordion>;
    Accordions?: Maybe<Accordions>;
    Button?: Maybe<Button>;
    Buttons?: Maybe<Buttons>;
    ConversionPanel?: Maybe<ConversionPanel>;
    ConversionPanels?: Maybe<ConversionPanels>;
    CtaTile?: Maybe<CtaTile>;
    CtaTiles?: Maybe<CtaTiles>;
    FeatureGrid?: Maybe<FeatureGrid>;
    FeatureGrids?: Maybe<FeatureGrids>;
    FeatureTile?: Maybe<FeatureTile>;
    FeatureTiles?: Maybe<FeatureTiles>;
    FeaturedMedia?: Maybe<FeaturedMedia>;
    FeaturedMedias?: Maybe<FeaturedMedias>;
    Footer?: Maybe<Footer>;
    Header?: Maybe<Header>;
    Hero?: Maybe<Hero>;
    Heroes?: Maybe<Heroes>;
    Icon?: Maybe<Icon>;
    IconTile?: Maybe<IconTile>;
    IconTiles?: Maybe<IconTiles>;
    Icons?: Maybe<Icons>;
    Image?: Maybe<Image>;
    Images?: Maybe<Images>;
    Page?: Maybe<Page>;
    Pages?: Maybe<Pages>;
    Preference?: Maybe<Preference>;
    Switchback?: Maybe<Switchback>;
    Switchbacks?: Maybe<Switchbacks>;
    TileGrid?: Maybe<TileGrid>;
    TileGrids?: Maybe<TileGrids>;
    User?: Maybe<User>;
    Users?: Maybe<Users>;
    Video?: Maybe<Video>;
    Videos?: Maybe<Videos>;
    docAccessAccordion?: Maybe<AccordionsDocAccess>;
    docAccessButton?: Maybe<ButtonsDocAccess>;
    docAccessConversionPanel?: Maybe<Conversion_PanelsDocAccess>;
    docAccessCtaTile?: Maybe<Cta_TilesDocAccess>;
    docAccessFeatureGrid?: Maybe<Feature_GridsDocAccess>;
    docAccessFeatureTile?: Maybe<Feature_TilesDocAccess>;
    docAccessFeaturedMedia?: Maybe<Featured_MediaDocAccess>;
    docAccessFooter?: Maybe<FooterDocAccess>;
    docAccessHeader?: Maybe<HeaderDocAccess>;
    docAccessHero?: Maybe<HeroesDocAccess>;
    docAccessIcon?: Maybe<IconsDocAccess>;
    docAccessIconTile?: Maybe<Icon_TilesDocAccess>;
    docAccessImage?: Maybe<ImagesDocAccess>;
    docAccessPage?: Maybe<PagesDocAccess>;
    docAccessSwitchback?: Maybe<SwitchbacksDocAccess>;
    docAccessTileGrid?: Maybe<Tile_GridsDocAccess>;
    docAccessUser?: Maybe<UsersDocAccess>;
    docAccessVideo?: Maybe<VideosDocAccess>;
    initializedUser?: Maybe<Scalars['Boolean']['output']>;
    meUser?: Maybe<UsersMe>;
};

export type QueryAccordionArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryAccordionsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Accordion_Where>;
};

export type QueryButtonArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryButtonsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Button_Where>;
};

export type QueryConversionPanelArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryConversionPanelsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<ConversionPanel_Where>;
};

export type QueryCtaTileArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryCtaTilesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<CtaTile_Where>;
};

export type QueryFeatureGridArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryFeatureGridsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<FeatureGrid_Where>;
};

export type QueryFeatureTileArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryFeatureTilesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<FeatureTile_Where>;
};

export type QueryFeaturedMediaArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryFeaturedMediasArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<FeaturedMedia_Where>;
};

export type QueryFooterArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryHeaderArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryHeroArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryHeroesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Hero_Where>;
};

export type QueryIconArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryIconTileArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryIconTilesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<IconTile_Where>;
};

export type QueryIconsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Icon_Where>;
};

export type QueryImageArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryImagesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Image_Where>;
};

export type QueryPageArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryPagesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Page_Where>;
};

export type QueryPreferenceArgs = {
    key?: InputMaybe<Scalars['String']['input']>;
};

export type QuerySwitchbackArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QuerySwitchbacksArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Switchback_Where>;
};

export type QueryTileGridArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryTileGridsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<TileGrid_Where>;
};

export type QueryUserArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryUsersArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<User_Where>;
};

export type QueryVideoArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryVideosArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Video_Where>;
};

export type QueryDocAccessAccordionArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessButtonArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessConversionPanelArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessCtaTileArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessFeatureGridArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessFeatureTileArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessFeaturedMediaArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessHeroArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessIconArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessIconTileArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessImageArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessPageArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessSwitchbackArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessTileGridArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessUserArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessVideoArgs = {
    id: Scalars['String']['input'];
};

export type Switchback = {
    __typename?: 'Switchback';
    content?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    heading?: Maybe<Scalars['String']['output']>;
    headingTag?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    image: Image;
    imageSide: Switchback_ImageSide;
    internalName: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SwitchbackContentArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type SwitchbackImageArgs = {
    where?: InputMaybe<Switchback_Image_Where>;
};

export type Switchback_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Switchback_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Switchback_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Switchback_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Switchback_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Switchback_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Switchback_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Switchback_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<Switchback_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Switchback_Image_Where_Or>>>;
    alt?: InputMaybe<Switchback_Image_Alt_Operator>;
    createdAt?: InputMaybe<Switchback_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Switchback_Image_Filename_Operator>;
    filesize?: InputMaybe<Switchback_Image_Filesize_Operator>;
    height?: InputMaybe<Switchback_Image_Height_Operator>;
    id?: InputMaybe<Switchback_Image_Id_Operator>;
    mimeType?: InputMaybe<Switchback_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Switchback_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Switchback_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Switchback_Image_Url_Operator>;
    width?: InputMaybe<Switchback_Image_Width_Operator>;
};

export type Switchback_Image_Where_And = {
    alt?: InputMaybe<Switchback_Image_Alt_Operator>;
    createdAt?: InputMaybe<Switchback_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Switchback_Image_Filename_Operator>;
    filesize?: InputMaybe<Switchback_Image_Filesize_Operator>;
    height?: InputMaybe<Switchback_Image_Height_Operator>;
    id?: InputMaybe<Switchback_Image_Id_Operator>;
    mimeType?: InputMaybe<Switchback_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Switchback_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Switchback_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Switchback_Image_Url_Operator>;
    width?: InputMaybe<Switchback_Image_Width_Operator>;
};

export type Switchback_Image_Where_Or = {
    alt?: InputMaybe<Switchback_Image_Alt_Operator>;
    createdAt?: InputMaybe<Switchback_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Switchback_Image_Filename_Operator>;
    filesize?: InputMaybe<Switchback_Image_Filesize_Operator>;
    height?: InputMaybe<Switchback_Image_Height_Operator>;
    id?: InputMaybe<Switchback_Image_Id_Operator>;
    mimeType?: InputMaybe<Switchback_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Switchback_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Switchback_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Switchback_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Switchback_Image_Url_Operator>;
    width?: InputMaybe<Switchback_Image_Width_Operator>;
};

export type Switchback_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Switchback_Content_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Switchback_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Switchback_HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_ImageSide = 'left' | 'right' | '%future added value';

export type Switchback_ImageSide_Input =
    | 'left'
    | 'right'
    | '%future added value';

export type Switchback_ImageSide_Operator = {
    all?: InputMaybe<Array<InputMaybe<Switchback_ImageSide_Input>>>;
    equals?: InputMaybe<Switchback_ImageSide_Input>;
    in?: InputMaybe<Array<InputMaybe<Switchback_ImageSide_Input>>>;
    not_equals?: InputMaybe<Switchback_ImageSide_Input>;
    not_in?: InputMaybe<Array<InputMaybe<Switchback_ImageSide_Input>>>;
};

export type Switchback_Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Switchback_InternalName_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Switchback_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Switchback_Where = {
    AND?: InputMaybe<Array<InputMaybe<Switchback_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Switchback_Where_Or>>>;
    content?: InputMaybe<Switchback_Content_Operator>;
    createdAt?: InputMaybe<Switchback_CreatedAt_Operator>;
    heading?: InputMaybe<Switchback_Heading_Operator>;
    headingTag?: InputMaybe<Switchback_HeadingTag_Operator>;
    id?: InputMaybe<Switchback_Id_Operator>;
    image?: InputMaybe<Switchback_Image_Operator>;
    imageSide?: InputMaybe<Switchback_ImageSide_Operator>;
    internalName?: InputMaybe<Switchback_InternalName_Operator>;
    updatedAt?: InputMaybe<Switchback_UpdatedAt_Operator>;
};

export type Switchback_Where_And = {
    content?: InputMaybe<Switchback_Content_Operator>;
    createdAt?: InputMaybe<Switchback_CreatedAt_Operator>;
    heading?: InputMaybe<Switchback_Heading_Operator>;
    headingTag?: InputMaybe<Switchback_HeadingTag_Operator>;
    id?: InputMaybe<Switchback_Id_Operator>;
    image?: InputMaybe<Switchback_Image_Operator>;
    imageSide?: InputMaybe<Switchback_ImageSide_Operator>;
    internalName?: InputMaybe<Switchback_InternalName_Operator>;
    updatedAt?: InputMaybe<Switchback_UpdatedAt_Operator>;
};

export type Switchback_Where_Or = {
    content?: InputMaybe<Switchback_Content_Operator>;
    createdAt?: InputMaybe<Switchback_CreatedAt_Operator>;
    heading?: InputMaybe<Switchback_Heading_Operator>;
    headingTag?: InputMaybe<Switchback_HeadingTag_Operator>;
    id?: InputMaybe<Switchback_Id_Operator>;
    image?: InputMaybe<Switchback_Image_Operator>;
    imageSide?: InputMaybe<Switchback_ImageSide_Operator>;
    internalName?: InputMaybe<Switchback_InternalName_Operator>;
    updatedAt?: InputMaybe<Switchback_UpdatedAt_Operator>;
};

export type Switchbacks = {
    __typename?: 'Switchbacks';
    docs?: Maybe<Array<Maybe<Switchback>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SwitchbacksCreateAccess = {
    __typename?: 'SwitchbacksCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SwitchbacksCreateDocAccess = {
    __typename?: 'SwitchbacksCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SwitchbacksDeleteAccess = {
    __typename?: 'SwitchbacksDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SwitchbacksDeleteDocAccess = {
    __typename?: 'SwitchbacksDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SwitchbacksDocAccessFields = {
    __typename?: 'SwitchbacksDocAccessFields';
    content?: Maybe<SwitchbacksDocAccessFields_Content>;
    createdAt?: Maybe<SwitchbacksDocAccessFields_CreatedAt>;
    heading?: Maybe<SwitchbacksDocAccessFields_Heading>;
    headingTag?: Maybe<SwitchbacksDocAccessFields_HeadingTag>;
    image?: Maybe<SwitchbacksDocAccessFields_Image>;
    imageSide?: Maybe<SwitchbacksDocAccessFields_ImageSide>;
    internalName?: Maybe<SwitchbacksDocAccessFields_InternalName>;
    updatedAt?: Maybe<SwitchbacksDocAccessFields_UpdatedAt>;
};

export type SwitchbacksDocAccessFields_Content = {
    __typename?: 'SwitchbacksDocAccessFields_content';
    create?: Maybe<SwitchbacksDocAccessFields_Content_Create>;
    delete?: Maybe<SwitchbacksDocAccessFields_Content_Delete>;
    read?: Maybe<SwitchbacksDocAccessFields_Content_Read>;
    update?: Maybe<SwitchbacksDocAccessFields_Content_Update>;
};

export type SwitchbacksDocAccessFields_Content_Create = {
    __typename?: 'SwitchbacksDocAccessFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Content_Delete = {
    __typename?: 'SwitchbacksDocAccessFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Content_Read = {
    __typename?: 'SwitchbacksDocAccessFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Content_Update = {
    __typename?: 'SwitchbacksDocAccessFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_CreatedAt = {
    __typename?: 'SwitchbacksDocAccessFields_createdAt';
    create?: Maybe<SwitchbacksDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<SwitchbacksDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<SwitchbacksDocAccessFields_CreatedAt_Read>;
    update?: Maybe<SwitchbacksDocAccessFields_CreatedAt_Update>;
};

export type SwitchbacksDocAccessFields_CreatedAt_Create = {
    __typename?: 'SwitchbacksDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_CreatedAt_Delete = {
    __typename?: 'SwitchbacksDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_CreatedAt_Read = {
    __typename?: 'SwitchbacksDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_CreatedAt_Update = {
    __typename?: 'SwitchbacksDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Heading = {
    __typename?: 'SwitchbacksDocAccessFields_heading';
    create?: Maybe<SwitchbacksDocAccessFields_Heading_Create>;
    delete?: Maybe<SwitchbacksDocAccessFields_Heading_Delete>;
    read?: Maybe<SwitchbacksDocAccessFields_Heading_Read>;
    update?: Maybe<SwitchbacksDocAccessFields_Heading_Update>;
};

export type SwitchbacksDocAccessFields_HeadingTag = {
    __typename?: 'SwitchbacksDocAccessFields_headingTag';
    create?: Maybe<SwitchbacksDocAccessFields_HeadingTag_Create>;
    delete?: Maybe<SwitchbacksDocAccessFields_HeadingTag_Delete>;
    read?: Maybe<SwitchbacksDocAccessFields_HeadingTag_Read>;
    update?: Maybe<SwitchbacksDocAccessFields_HeadingTag_Update>;
};

export type SwitchbacksDocAccessFields_HeadingTag_Create = {
    __typename?: 'SwitchbacksDocAccessFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_HeadingTag_Delete = {
    __typename?: 'SwitchbacksDocAccessFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_HeadingTag_Read = {
    __typename?: 'SwitchbacksDocAccessFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_HeadingTag_Update = {
    __typename?: 'SwitchbacksDocAccessFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Heading_Create = {
    __typename?: 'SwitchbacksDocAccessFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Heading_Delete = {
    __typename?: 'SwitchbacksDocAccessFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Heading_Read = {
    __typename?: 'SwitchbacksDocAccessFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Heading_Update = {
    __typename?: 'SwitchbacksDocAccessFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Image = {
    __typename?: 'SwitchbacksDocAccessFields_image';
    create?: Maybe<SwitchbacksDocAccessFields_Image_Create>;
    delete?: Maybe<SwitchbacksDocAccessFields_Image_Delete>;
    read?: Maybe<SwitchbacksDocAccessFields_Image_Read>;
    update?: Maybe<SwitchbacksDocAccessFields_Image_Update>;
};

export type SwitchbacksDocAccessFields_ImageSide = {
    __typename?: 'SwitchbacksDocAccessFields_imageSide';
    create?: Maybe<SwitchbacksDocAccessFields_ImageSide_Create>;
    delete?: Maybe<SwitchbacksDocAccessFields_ImageSide_Delete>;
    read?: Maybe<SwitchbacksDocAccessFields_ImageSide_Read>;
    update?: Maybe<SwitchbacksDocAccessFields_ImageSide_Update>;
};

export type SwitchbacksDocAccessFields_ImageSide_Create = {
    __typename?: 'SwitchbacksDocAccessFields_imageSide_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_ImageSide_Delete = {
    __typename?: 'SwitchbacksDocAccessFields_imageSide_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_ImageSide_Read = {
    __typename?: 'SwitchbacksDocAccessFields_imageSide_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_ImageSide_Update = {
    __typename?: 'SwitchbacksDocAccessFields_imageSide_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Image_Create = {
    __typename?: 'SwitchbacksDocAccessFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Image_Delete = {
    __typename?: 'SwitchbacksDocAccessFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Image_Read = {
    __typename?: 'SwitchbacksDocAccessFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_Image_Update = {
    __typename?: 'SwitchbacksDocAccessFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_InternalName = {
    __typename?: 'SwitchbacksDocAccessFields_internalName';
    create?: Maybe<SwitchbacksDocAccessFields_InternalName_Create>;
    delete?: Maybe<SwitchbacksDocAccessFields_InternalName_Delete>;
    read?: Maybe<SwitchbacksDocAccessFields_InternalName_Read>;
    update?: Maybe<SwitchbacksDocAccessFields_InternalName_Update>;
};

export type SwitchbacksDocAccessFields_InternalName_Create = {
    __typename?: 'SwitchbacksDocAccessFields_internalName_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_InternalName_Delete = {
    __typename?: 'SwitchbacksDocAccessFields_internalName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_InternalName_Read = {
    __typename?: 'SwitchbacksDocAccessFields_internalName_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_InternalName_Update = {
    __typename?: 'SwitchbacksDocAccessFields_internalName_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_UpdatedAt = {
    __typename?: 'SwitchbacksDocAccessFields_updatedAt';
    create?: Maybe<SwitchbacksDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<SwitchbacksDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<SwitchbacksDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<SwitchbacksDocAccessFields_UpdatedAt_Update>;
};

export type SwitchbacksDocAccessFields_UpdatedAt_Create = {
    __typename?: 'SwitchbacksDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'SwitchbacksDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_UpdatedAt_Read = {
    __typename?: 'SwitchbacksDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksDocAccessFields_UpdatedAt_Update = {
    __typename?: 'SwitchbacksDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields = {
    __typename?: 'SwitchbacksFields';
    content?: Maybe<SwitchbacksFields_Content>;
    createdAt?: Maybe<SwitchbacksFields_CreatedAt>;
    heading?: Maybe<SwitchbacksFields_Heading>;
    headingTag?: Maybe<SwitchbacksFields_HeadingTag>;
    image?: Maybe<SwitchbacksFields_Image>;
    imageSide?: Maybe<SwitchbacksFields_ImageSide>;
    internalName?: Maybe<SwitchbacksFields_InternalName>;
    updatedAt?: Maybe<SwitchbacksFields_UpdatedAt>;
};

export type SwitchbacksFields_Content = {
    __typename?: 'SwitchbacksFields_content';
    create?: Maybe<SwitchbacksFields_Content_Create>;
    delete?: Maybe<SwitchbacksFields_Content_Delete>;
    read?: Maybe<SwitchbacksFields_Content_Read>;
    update?: Maybe<SwitchbacksFields_Content_Update>;
};

export type SwitchbacksFields_Content_Create = {
    __typename?: 'SwitchbacksFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Content_Delete = {
    __typename?: 'SwitchbacksFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Content_Read = {
    __typename?: 'SwitchbacksFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Content_Update = {
    __typename?: 'SwitchbacksFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_CreatedAt = {
    __typename?: 'SwitchbacksFields_createdAt';
    create?: Maybe<SwitchbacksFields_CreatedAt_Create>;
    delete?: Maybe<SwitchbacksFields_CreatedAt_Delete>;
    read?: Maybe<SwitchbacksFields_CreatedAt_Read>;
    update?: Maybe<SwitchbacksFields_CreatedAt_Update>;
};

export type SwitchbacksFields_CreatedAt_Create = {
    __typename?: 'SwitchbacksFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_CreatedAt_Delete = {
    __typename?: 'SwitchbacksFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_CreatedAt_Read = {
    __typename?: 'SwitchbacksFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_CreatedAt_Update = {
    __typename?: 'SwitchbacksFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Heading = {
    __typename?: 'SwitchbacksFields_heading';
    create?: Maybe<SwitchbacksFields_Heading_Create>;
    delete?: Maybe<SwitchbacksFields_Heading_Delete>;
    read?: Maybe<SwitchbacksFields_Heading_Read>;
    update?: Maybe<SwitchbacksFields_Heading_Update>;
};

export type SwitchbacksFields_HeadingTag = {
    __typename?: 'SwitchbacksFields_headingTag';
    create?: Maybe<SwitchbacksFields_HeadingTag_Create>;
    delete?: Maybe<SwitchbacksFields_HeadingTag_Delete>;
    read?: Maybe<SwitchbacksFields_HeadingTag_Read>;
    update?: Maybe<SwitchbacksFields_HeadingTag_Update>;
};

export type SwitchbacksFields_HeadingTag_Create = {
    __typename?: 'SwitchbacksFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_HeadingTag_Delete = {
    __typename?: 'SwitchbacksFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_HeadingTag_Read = {
    __typename?: 'SwitchbacksFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_HeadingTag_Update = {
    __typename?: 'SwitchbacksFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Heading_Create = {
    __typename?: 'SwitchbacksFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Heading_Delete = {
    __typename?: 'SwitchbacksFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Heading_Read = {
    __typename?: 'SwitchbacksFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Heading_Update = {
    __typename?: 'SwitchbacksFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Image = {
    __typename?: 'SwitchbacksFields_image';
    create?: Maybe<SwitchbacksFields_Image_Create>;
    delete?: Maybe<SwitchbacksFields_Image_Delete>;
    read?: Maybe<SwitchbacksFields_Image_Read>;
    update?: Maybe<SwitchbacksFields_Image_Update>;
};

export type SwitchbacksFields_ImageSide = {
    __typename?: 'SwitchbacksFields_imageSide';
    create?: Maybe<SwitchbacksFields_ImageSide_Create>;
    delete?: Maybe<SwitchbacksFields_ImageSide_Delete>;
    read?: Maybe<SwitchbacksFields_ImageSide_Read>;
    update?: Maybe<SwitchbacksFields_ImageSide_Update>;
};

export type SwitchbacksFields_ImageSide_Create = {
    __typename?: 'SwitchbacksFields_imageSide_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_ImageSide_Delete = {
    __typename?: 'SwitchbacksFields_imageSide_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_ImageSide_Read = {
    __typename?: 'SwitchbacksFields_imageSide_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_ImageSide_Update = {
    __typename?: 'SwitchbacksFields_imageSide_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Image_Create = {
    __typename?: 'SwitchbacksFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Image_Delete = {
    __typename?: 'SwitchbacksFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Image_Read = {
    __typename?: 'SwitchbacksFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_Image_Update = {
    __typename?: 'SwitchbacksFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_InternalName = {
    __typename?: 'SwitchbacksFields_internalName';
    create?: Maybe<SwitchbacksFields_InternalName_Create>;
    delete?: Maybe<SwitchbacksFields_InternalName_Delete>;
    read?: Maybe<SwitchbacksFields_InternalName_Read>;
    update?: Maybe<SwitchbacksFields_InternalName_Update>;
};

export type SwitchbacksFields_InternalName_Create = {
    __typename?: 'SwitchbacksFields_internalName_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_InternalName_Delete = {
    __typename?: 'SwitchbacksFields_internalName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_InternalName_Read = {
    __typename?: 'SwitchbacksFields_internalName_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_InternalName_Update = {
    __typename?: 'SwitchbacksFields_internalName_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_UpdatedAt = {
    __typename?: 'SwitchbacksFields_updatedAt';
    create?: Maybe<SwitchbacksFields_UpdatedAt_Create>;
    delete?: Maybe<SwitchbacksFields_UpdatedAt_Delete>;
    read?: Maybe<SwitchbacksFields_UpdatedAt_Read>;
    update?: Maybe<SwitchbacksFields_UpdatedAt_Update>;
};

export type SwitchbacksFields_UpdatedAt_Create = {
    __typename?: 'SwitchbacksFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_UpdatedAt_Delete = {
    __typename?: 'SwitchbacksFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_UpdatedAt_Read = {
    __typename?: 'SwitchbacksFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksFields_UpdatedAt_Update = {
    __typename?: 'SwitchbacksFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type SwitchbacksReadAccess = {
    __typename?: 'SwitchbacksReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SwitchbacksReadDocAccess = {
    __typename?: 'SwitchbacksReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SwitchbacksUpdateAccess = {
    __typename?: 'SwitchbacksUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SwitchbacksUpdateDocAccess = {
    __typename?: 'SwitchbacksUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TileGrid = {
    __typename?: 'TileGrid';
    callToAction: Button;
    content?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    heading: Scalars['String']['output'];
    headingTag: Scalars['String']['output'];
    iconTiles?: Maybe<Array<TileGrid_IconTiles>>;
    id?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TileGridContentArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type TileGrid_IconTiles = {
    __typename?: 'TileGrid_IconTiles';
    iconTile?: Maybe<IconTile>;
    id?: Maybe<Scalars['String']['output']>;
};

export type TileGrid_CallToAction_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TileGrid_Content_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type TileGrid_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TileGrid_HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TileGrid_Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TileGrid_IconTiles__IconTile_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TileGrid_IconTiles__Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TileGrid_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TileGrid_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TileGrid_Where = {
    AND?: InputMaybe<Array<InputMaybe<TileGrid_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<TileGrid_Where_Or>>>;
    callToAction?: InputMaybe<TileGrid_CallToAction_Operator>;
    content?: InputMaybe<TileGrid_Content_Operator>;
    createdAt?: InputMaybe<TileGrid_CreatedAt_Operator>;
    heading?: InputMaybe<TileGrid_Heading_Operator>;
    headingTag?: InputMaybe<TileGrid_HeadingTag_Operator>;
    iconTiles__iconTile?: InputMaybe<TileGrid_IconTiles__IconTile_Operator>;
    iconTiles__id?: InputMaybe<TileGrid_IconTiles__Id_Operator>;
    id?: InputMaybe<TileGrid_Id_Operator>;
    updatedAt?: InputMaybe<TileGrid_UpdatedAt_Operator>;
};

export type TileGrid_Where_And = {
    callToAction?: InputMaybe<TileGrid_CallToAction_Operator>;
    content?: InputMaybe<TileGrid_Content_Operator>;
    createdAt?: InputMaybe<TileGrid_CreatedAt_Operator>;
    heading?: InputMaybe<TileGrid_Heading_Operator>;
    headingTag?: InputMaybe<TileGrid_HeadingTag_Operator>;
    iconTiles__iconTile?: InputMaybe<TileGrid_IconTiles__IconTile_Operator>;
    iconTiles__id?: InputMaybe<TileGrid_IconTiles__Id_Operator>;
    id?: InputMaybe<TileGrid_Id_Operator>;
    updatedAt?: InputMaybe<TileGrid_UpdatedAt_Operator>;
};

export type TileGrid_Where_Or = {
    callToAction?: InputMaybe<TileGrid_CallToAction_Operator>;
    content?: InputMaybe<TileGrid_Content_Operator>;
    createdAt?: InputMaybe<TileGrid_CreatedAt_Operator>;
    heading?: InputMaybe<TileGrid_Heading_Operator>;
    headingTag?: InputMaybe<TileGrid_HeadingTag_Operator>;
    iconTiles__iconTile?: InputMaybe<TileGrid_IconTiles__IconTile_Operator>;
    iconTiles__id?: InputMaybe<TileGrid_IconTiles__Id_Operator>;
    id?: InputMaybe<TileGrid_Id_Operator>;
    updatedAt?: InputMaybe<TileGrid_UpdatedAt_Operator>;
};

export type TileGrids = {
    __typename?: 'TileGrids';
    docs?: Maybe<Array<Maybe<TileGrid>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TileGridsCreateAccess = {
    __typename?: 'TileGridsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TileGridsCreateDocAccess = {
    __typename?: 'TileGridsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TileGridsDeleteAccess = {
    __typename?: 'TileGridsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TileGridsDeleteDocAccess = {
    __typename?: 'TileGridsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TileGridsDocAccessFields = {
    __typename?: 'TileGridsDocAccessFields';
    callToAction?: Maybe<TileGridsDocAccessFields_CallToAction>;
    content?: Maybe<TileGridsDocAccessFields_Content>;
    createdAt?: Maybe<TileGridsDocAccessFields_CreatedAt>;
    heading?: Maybe<TileGridsDocAccessFields_Heading>;
    headingTag?: Maybe<TileGridsDocAccessFields_HeadingTag>;
    iconTiles?: Maybe<TileGridsDocAccessFields_IconTiles>;
    updatedAt?: Maybe<TileGridsDocAccessFields_UpdatedAt>;
};

export type TileGridsDocAccessFields_CallToAction = {
    __typename?: 'TileGridsDocAccessFields_callToAction';
    create?: Maybe<TileGridsDocAccessFields_CallToAction_Create>;
    delete?: Maybe<TileGridsDocAccessFields_CallToAction_Delete>;
    read?: Maybe<TileGridsDocAccessFields_CallToAction_Read>;
    update?: Maybe<TileGridsDocAccessFields_CallToAction_Update>;
};

export type TileGridsDocAccessFields_CallToAction_Create = {
    __typename?: 'TileGridsDocAccessFields_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_CallToAction_Delete = {
    __typename?: 'TileGridsDocAccessFields_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_CallToAction_Read = {
    __typename?: 'TileGridsDocAccessFields_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_CallToAction_Update = {
    __typename?: 'TileGridsDocAccessFields_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Content = {
    __typename?: 'TileGridsDocAccessFields_content';
    create?: Maybe<TileGridsDocAccessFields_Content_Create>;
    delete?: Maybe<TileGridsDocAccessFields_Content_Delete>;
    read?: Maybe<TileGridsDocAccessFields_Content_Read>;
    update?: Maybe<TileGridsDocAccessFields_Content_Update>;
};

export type TileGridsDocAccessFields_Content_Create = {
    __typename?: 'TileGridsDocAccessFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Content_Delete = {
    __typename?: 'TileGridsDocAccessFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Content_Read = {
    __typename?: 'TileGridsDocAccessFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Content_Update = {
    __typename?: 'TileGridsDocAccessFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_CreatedAt = {
    __typename?: 'TileGridsDocAccessFields_createdAt';
    create?: Maybe<TileGridsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<TileGridsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<TileGridsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<TileGridsDocAccessFields_CreatedAt_Update>;
};

export type TileGridsDocAccessFields_CreatedAt_Create = {
    __typename?: 'TileGridsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'TileGridsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_CreatedAt_Read = {
    __typename?: 'TileGridsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_CreatedAt_Update = {
    __typename?: 'TileGridsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Heading = {
    __typename?: 'TileGridsDocAccessFields_heading';
    create?: Maybe<TileGridsDocAccessFields_Heading_Create>;
    delete?: Maybe<TileGridsDocAccessFields_Heading_Delete>;
    read?: Maybe<TileGridsDocAccessFields_Heading_Read>;
    update?: Maybe<TileGridsDocAccessFields_Heading_Update>;
};

export type TileGridsDocAccessFields_HeadingTag = {
    __typename?: 'TileGridsDocAccessFields_headingTag';
    create?: Maybe<TileGridsDocAccessFields_HeadingTag_Create>;
    delete?: Maybe<TileGridsDocAccessFields_HeadingTag_Delete>;
    read?: Maybe<TileGridsDocAccessFields_HeadingTag_Read>;
    update?: Maybe<TileGridsDocAccessFields_HeadingTag_Update>;
};

export type TileGridsDocAccessFields_HeadingTag_Create = {
    __typename?: 'TileGridsDocAccessFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_HeadingTag_Delete = {
    __typename?: 'TileGridsDocAccessFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_HeadingTag_Read = {
    __typename?: 'TileGridsDocAccessFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_HeadingTag_Update = {
    __typename?: 'TileGridsDocAccessFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Heading_Create = {
    __typename?: 'TileGridsDocAccessFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Heading_Delete = {
    __typename?: 'TileGridsDocAccessFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Heading_Read = {
    __typename?: 'TileGridsDocAccessFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_Heading_Update = {
    __typename?: 'TileGridsDocAccessFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles = {
    __typename?: 'TileGridsDocAccessFields_iconTiles';
    create?: Maybe<TileGridsDocAccessFields_IconTiles_Create>;
    delete?: Maybe<TileGridsDocAccessFields_IconTiles_Delete>;
    fields?: Maybe<TileGridsDocAccessFields_IconTiles_Fields>;
    read?: Maybe<TileGridsDocAccessFields_IconTiles_Read>;
    update?: Maybe<TileGridsDocAccessFields_IconTiles_Update>;
};

export type TileGridsDocAccessFields_IconTiles_Create = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_Delete = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_Fields = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_Fields';
    iconTile?: Maybe<TileGridsDocAccessFields_IconTiles_IconTile>;
    id?: Maybe<TileGridsDocAccessFields_IconTiles_Id>;
};

export type TileGridsDocAccessFields_IconTiles_Read = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_Update = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_IconTile = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_iconTile';
    create?: Maybe<TileGridsDocAccessFields_IconTiles_IconTile_Create>;
    delete?: Maybe<TileGridsDocAccessFields_IconTiles_IconTile_Delete>;
    read?: Maybe<TileGridsDocAccessFields_IconTiles_IconTile_Read>;
    update?: Maybe<TileGridsDocAccessFields_IconTiles_IconTile_Update>;
};

export type TileGridsDocAccessFields_IconTiles_IconTile_Create = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_iconTile_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_IconTile_Delete = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_iconTile_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_IconTile_Read = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_iconTile_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_IconTile_Update = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_iconTile_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_Id = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_id';
    create?: Maybe<TileGridsDocAccessFields_IconTiles_Id_Create>;
    delete?: Maybe<TileGridsDocAccessFields_IconTiles_Id_Delete>;
    read?: Maybe<TileGridsDocAccessFields_IconTiles_Id_Read>;
    update?: Maybe<TileGridsDocAccessFields_IconTiles_Id_Update>;
};

export type TileGridsDocAccessFields_IconTiles_Id_Create = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_Id_Delete = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_Id_Read = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_IconTiles_Id_Update = {
    __typename?: 'TileGridsDocAccessFields_iconTiles_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_UpdatedAt = {
    __typename?: 'TileGridsDocAccessFields_updatedAt';
    create?: Maybe<TileGridsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<TileGridsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<TileGridsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<TileGridsDocAccessFields_UpdatedAt_Update>;
};

export type TileGridsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'TileGridsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'TileGridsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'TileGridsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'TileGridsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields = {
    __typename?: 'TileGridsFields';
    callToAction?: Maybe<TileGridsFields_CallToAction>;
    content?: Maybe<TileGridsFields_Content>;
    createdAt?: Maybe<TileGridsFields_CreatedAt>;
    heading?: Maybe<TileGridsFields_Heading>;
    headingTag?: Maybe<TileGridsFields_HeadingTag>;
    iconTiles?: Maybe<TileGridsFields_IconTiles>;
    updatedAt?: Maybe<TileGridsFields_UpdatedAt>;
};

export type TileGridsFields_CallToAction = {
    __typename?: 'TileGridsFields_callToAction';
    create?: Maybe<TileGridsFields_CallToAction_Create>;
    delete?: Maybe<TileGridsFields_CallToAction_Delete>;
    read?: Maybe<TileGridsFields_CallToAction_Read>;
    update?: Maybe<TileGridsFields_CallToAction_Update>;
};

export type TileGridsFields_CallToAction_Create = {
    __typename?: 'TileGridsFields_callToAction_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_CallToAction_Delete = {
    __typename?: 'TileGridsFields_callToAction_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_CallToAction_Read = {
    __typename?: 'TileGridsFields_callToAction_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_CallToAction_Update = {
    __typename?: 'TileGridsFields_callToAction_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Content = {
    __typename?: 'TileGridsFields_content';
    create?: Maybe<TileGridsFields_Content_Create>;
    delete?: Maybe<TileGridsFields_Content_Delete>;
    read?: Maybe<TileGridsFields_Content_Read>;
    update?: Maybe<TileGridsFields_Content_Update>;
};

export type TileGridsFields_Content_Create = {
    __typename?: 'TileGridsFields_content_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Content_Delete = {
    __typename?: 'TileGridsFields_content_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Content_Read = {
    __typename?: 'TileGridsFields_content_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Content_Update = {
    __typename?: 'TileGridsFields_content_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_CreatedAt = {
    __typename?: 'TileGridsFields_createdAt';
    create?: Maybe<TileGridsFields_CreatedAt_Create>;
    delete?: Maybe<TileGridsFields_CreatedAt_Delete>;
    read?: Maybe<TileGridsFields_CreatedAt_Read>;
    update?: Maybe<TileGridsFields_CreatedAt_Update>;
};

export type TileGridsFields_CreatedAt_Create = {
    __typename?: 'TileGridsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_CreatedAt_Delete = {
    __typename?: 'TileGridsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_CreatedAt_Read = {
    __typename?: 'TileGridsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_CreatedAt_Update = {
    __typename?: 'TileGridsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Heading = {
    __typename?: 'TileGridsFields_heading';
    create?: Maybe<TileGridsFields_Heading_Create>;
    delete?: Maybe<TileGridsFields_Heading_Delete>;
    read?: Maybe<TileGridsFields_Heading_Read>;
    update?: Maybe<TileGridsFields_Heading_Update>;
};

export type TileGridsFields_HeadingTag = {
    __typename?: 'TileGridsFields_headingTag';
    create?: Maybe<TileGridsFields_HeadingTag_Create>;
    delete?: Maybe<TileGridsFields_HeadingTag_Delete>;
    read?: Maybe<TileGridsFields_HeadingTag_Read>;
    update?: Maybe<TileGridsFields_HeadingTag_Update>;
};

export type TileGridsFields_HeadingTag_Create = {
    __typename?: 'TileGridsFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_HeadingTag_Delete = {
    __typename?: 'TileGridsFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_HeadingTag_Read = {
    __typename?: 'TileGridsFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_HeadingTag_Update = {
    __typename?: 'TileGridsFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Heading_Create = {
    __typename?: 'TileGridsFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Heading_Delete = {
    __typename?: 'TileGridsFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Heading_Read = {
    __typename?: 'TileGridsFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_Heading_Update = {
    __typename?: 'TileGridsFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles = {
    __typename?: 'TileGridsFields_iconTiles';
    create?: Maybe<TileGridsFields_IconTiles_Create>;
    delete?: Maybe<TileGridsFields_IconTiles_Delete>;
    fields?: Maybe<TileGridsFields_IconTiles_Fields>;
    read?: Maybe<TileGridsFields_IconTiles_Read>;
    update?: Maybe<TileGridsFields_IconTiles_Update>;
};

export type TileGridsFields_IconTiles_Create = {
    __typename?: 'TileGridsFields_iconTiles_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_Delete = {
    __typename?: 'TileGridsFields_iconTiles_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_Fields = {
    __typename?: 'TileGridsFields_iconTiles_Fields';
    iconTile?: Maybe<TileGridsFields_IconTiles_IconTile>;
    id?: Maybe<TileGridsFields_IconTiles_Id>;
};

export type TileGridsFields_IconTiles_Read = {
    __typename?: 'TileGridsFields_iconTiles_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_Update = {
    __typename?: 'TileGridsFields_iconTiles_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_IconTile = {
    __typename?: 'TileGridsFields_iconTiles_iconTile';
    create?: Maybe<TileGridsFields_IconTiles_IconTile_Create>;
    delete?: Maybe<TileGridsFields_IconTiles_IconTile_Delete>;
    read?: Maybe<TileGridsFields_IconTiles_IconTile_Read>;
    update?: Maybe<TileGridsFields_IconTiles_IconTile_Update>;
};

export type TileGridsFields_IconTiles_IconTile_Create = {
    __typename?: 'TileGridsFields_iconTiles_iconTile_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_IconTile_Delete = {
    __typename?: 'TileGridsFields_iconTiles_iconTile_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_IconTile_Read = {
    __typename?: 'TileGridsFields_iconTiles_iconTile_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_IconTile_Update = {
    __typename?: 'TileGridsFields_iconTiles_iconTile_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_Id = {
    __typename?: 'TileGridsFields_iconTiles_id';
    create?: Maybe<TileGridsFields_IconTiles_Id_Create>;
    delete?: Maybe<TileGridsFields_IconTiles_Id_Delete>;
    read?: Maybe<TileGridsFields_IconTiles_Id_Read>;
    update?: Maybe<TileGridsFields_IconTiles_Id_Update>;
};

export type TileGridsFields_IconTiles_Id_Create = {
    __typename?: 'TileGridsFields_iconTiles_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_Id_Delete = {
    __typename?: 'TileGridsFields_iconTiles_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_Id_Read = {
    __typename?: 'TileGridsFields_iconTiles_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_IconTiles_Id_Update = {
    __typename?: 'TileGridsFields_iconTiles_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_UpdatedAt = {
    __typename?: 'TileGridsFields_updatedAt';
    create?: Maybe<TileGridsFields_UpdatedAt_Create>;
    delete?: Maybe<TileGridsFields_UpdatedAt_Delete>;
    read?: Maybe<TileGridsFields_UpdatedAt_Read>;
    update?: Maybe<TileGridsFields_UpdatedAt_Update>;
};

export type TileGridsFields_UpdatedAt_Create = {
    __typename?: 'TileGridsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_UpdatedAt_Delete = {
    __typename?: 'TileGridsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_UpdatedAt_Read = {
    __typename?: 'TileGridsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsFields_UpdatedAt_Update = {
    __typename?: 'TileGridsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TileGridsReadAccess = {
    __typename?: 'TileGridsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TileGridsReadDocAccess = {
    __typename?: 'TileGridsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TileGridsUpdateAccess = {
    __typename?: 'TileGridsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TileGridsUpdateDocAccess = {
    __typename?: 'TileGridsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
    __typename?: 'User';
    apiKey?: Maybe<Scalars['String']['output']>;
    apiKeyIndex?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    email: Scalars['EmailAddress']['output'];
    enableAPIKey?: Maybe<Scalars['Boolean']['output']>;
    hash?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    lockUntil?: Maybe<Scalars['DateTime']['output']>;
    loginAttempts?: Maybe<Scalars['Float']['output']>;
    password: Scalars['String']['output'];
    resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
    resetPasswordToken?: Maybe<Scalars['String']['output']>;
    salt?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_ApiKey_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
    contains?: InputMaybe<Scalars['EmailAddress']['input']>;
    equals?: InputMaybe<Scalars['EmailAddress']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
    like?: InputMaybe<Scalars['EmailAddress']['input']>;
    not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_EnableApiKey_Operator = {
    equals?: InputMaybe<Scalars['Boolean']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
    AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
    apiKey?: InputMaybe<User_ApiKey_Operator>;
    createdAt?: InputMaybe<User_CreatedAt_Operator>;
    email?: InputMaybe<User_Email_Operator>;
    enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
    id?: InputMaybe<User_Id_Operator>;
    updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
    apiKey?: InputMaybe<User_ApiKey_Operator>;
    createdAt?: InputMaybe<User_CreatedAt_Operator>;
    email?: InputMaybe<User_Email_Operator>;
    enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
    id?: InputMaybe<User_Id_Operator>;
    updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
    apiKey?: InputMaybe<User_ApiKey_Operator>;
    createdAt?: InputMaybe<User_CreatedAt_Operator>;
    email?: InputMaybe<User_Email_Operator>;
    enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
    id?: InputMaybe<User_Id_Operator>;
    updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
    __typename?: 'Users';
    docs?: Maybe<Array<Maybe<User>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
    __typename?: 'UsersCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
    __typename?: 'UsersCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
    __typename?: 'UsersDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
    __typename?: 'UsersDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
    __typename?: 'UsersDocAccessFields';
    apiKey?: Maybe<UsersDocAccessFields_ApiKey>;
    createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
    email?: Maybe<UsersDocAccessFields_Email>;
    enableAPIKey?: Maybe<UsersDocAccessFields_EnableApiKey>;
    password?: Maybe<UsersDocAccessFields_Password>;
    updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_ApiKey = {
    __typename?: 'UsersDocAccessFields_apiKey';
    create?: Maybe<UsersDocAccessFields_ApiKey_Create>;
    delete?: Maybe<UsersDocAccessFields_ApiKey_Delete>;
    read?: Maybe<UsersDocAccessFields_ApiKey_Read>;
    update?: Maybe<UsersDocAccessFields_ApiKey_Update>;
};

export type UsersDocAccessFields_ApiKey_Create = {
    __typename?: 'UsersDocAccessFields_apiKey_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Delete = {
    __typename?: 'UsersDocAccessFields_apiKey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Read = {
    __typename?: 'UsersDocAccessFields_apiKey_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Update = {
    __typename?: 'UsersDocAccessFields_apiKey_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
    __typename?: 'UsersDocAccessFields_createdAt';
    create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
    update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
    __typename?: 'UsersDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
    __typename?: 'UsersDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
    __typename?: 'UsersDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
    __typename?: 'UsersDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
    __typename?: 'UsersDocAccessFields_email';
    create?: Maybe<UsersDocAccessFields_Email_Create>;
    delete?: Maybe<UsersDocAccessFields_Email_Delete>;
    read?: Maybe<UsersDocAccessFields_Email_Read>;
    update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
    __typename?: 'UsersDocAccessFields_email_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
    __typename?: 'UsersDocAccessFields_email_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
    __typename?: 'UsersDocAccessFields_email_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
    __typename?: 'UsersDocAccessFields_email_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey = {
    __typename?: 'UsersDocAccessFields_enableAPIKey';
    create?: Maybe<UsersDocAccessFields_EnableApiKey_Create>;
    delete?: Maybe<UsersDocAccessFields_EnableApiKey_Delete>;
    read?: Maybe<UsersDocAccessFields_EnableApiKey_Read>;
    update?: Maybe<UsersDocAccessFields_EnableApiKey_Update>;
};

export type UsersDocAccessFields_EnableApiKey_Create = {
    __typename?: 'UsersDocAccessFields_enableAPIKey_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Delete = {
    __typename?: 'UsersDocAccessFields_enableAPIKey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Read = {
    __typename?: 'UsersDocAccessFields_enableAPIKey_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Update = {
    __typename?: 'UsersDocAccessFields_enableAPIKey_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
    __typename?: 'UsersDocAccessFields_password';
    create?: Maybe<UsersDocAccessFields_Password_Create>;
    delete?: Maybe<UsersDocAccessFields_Password_Delete>;
    read?: Maybe<UsersDocAccessFields_Password_Read>;
    update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
    __typename?: 'UsersDocAccessFields_password_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
    __typename?: 'UsersDocAccessFields_password_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
    __typename?: 'UsersDocAccessFields_password_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
    __typename?: 'UsersDocAccessFields_password_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
    __typename?: 'UsersDocAccessFields_updatedAt';
    create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
    __typename?: 'UsersDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'UsersDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
    __typename?: 'UsersDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
    __typename?: 'UsersDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
    __typename?: 'UsersFields';
    apiKey?: Maybe<UsersFields_ApiKey>;
    createdAt?: Maybe<UsersFields_CreatedAt>;
    email?: Maybe<UsersFields_Email>;
    enableAPIKey?: Maybe<UsersFields_EnableApiKey>;
    password?: Maybe<UsersFields_Password>;
    updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_ApiKey = {
    __typename?: 'UsersFields_apiKey';
    create?: Maybe<UsersFields_ApiKey_Create>;
    delete?: Maybe<UsersFields_ApiKey_Delete>;
    read?: Maybe<UsersFields_ApiKey_Read>;
    update?: Maybe<UsersFields_ApiKey_Update>;
};

export type UsersFields_ApiKey_Create = {
    __typename?: 'UsersFields_apiKey_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Delete = {
    __typename?: 'UsersFields_apiKey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Read = {
    __typename?: 'UsersFields_apiKey_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Update = {
    __typename?: 'UsersFields_apiKey_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
    __typename?: 'UsersFields_createdAt';
    create?: Maybe<UsersFields_CreatedAt_Create>;
    delete?: Maybe<UsersFields_CreatedAt_Delete>;
    read?: Maybe<UsersFields_CreatedAt_Read>;
    update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
    __typename?: 'UsersFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
    __typename?: 'UsersFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
    __typename?: 'UsersFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
    __typename?: 'UsersFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
    __typename?: 'UsersFields_email';
    create?: Maybe<UsersFields_Email_Create>;
    delete?: Maybe<UsersFields_Email_Delete>;
    read?: Maybe<UsersFields_Email_Read>;
    update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
    __typename?: 'UsersFields_email_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
    __typename?: 'UsersFields_email_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
    __typename?: 'UsersFields_email_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
    __typename?: 'UsersFields_email_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey = {
    __typename?: 'UsersFields_enableAPIKey';
    create?: Maybe<UsersFields_EnableApiKey_Create>;
    delete?: Maybe<UsersFields_EnableApiKey_Delete>;
    read?: Maybe<UsersFields_EnableApiKey_Read>;
    update?: Maybe<UsersFields_EnableApiKey_Update>;
};

export type UsersFields_EnableApiKey_Create = {
    __typename?: 'UsersFields_enableAPIKey_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Delete = {
    __typename?: 'UsersFields_enableAPIKey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Read = {
    __typename?: 'UsersFields_enableAPIKey_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Update = {
    __typename?: 'UsersFields_enableAPIKey_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
    __typename?: 'UsersFields_password';
    create?: Maybe<UsersFields_Password_Create>;
    delete?: Maybe<UsersFields_Password_Delete>;
    read?: Maybe<UsersFields_Password_Read>;
    update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
    __typename?: 'UsersFields_password_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
    __typename?: 'UsersFields_password_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
    __typename?: 'UsersFields_password_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
    __typename?: 'UsersFields_password_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
    __typename?: 'UsersFields_updatedAt';
    create?: Maybe<UsersFields_UpdatedAt_Create>;
    delete?: Maybe<UsersFields_UpdatedAt_Delete>;
    read?: Maybe<UsersFields_UpdatedAt_Read>;
    update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
    __typename?: 'UsersFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
    __typename?: 'UsersFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
    __typename?: 'UsersFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
    __typename?: 'UsersFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
    __typename?: 'UsersReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
    __typename?: 'UsersReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
    __typename?: 'UsersUnlockAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
    __typename?: 'UsersUnlockDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
    __typename?: 'UsersUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
    __typename?: 'UsersUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Video = {
    __typename?: 'Video';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    internalName: Scalars['String']['output'];
    placeholderImage: Image;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    url: Scalars['String']['output'];
};

export type VideoPlaceholderImageArgs = {
    where?: InputMaybe<Video_PlaceholderImage_Where>;
};

export type Video_PlaceholderImage_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Video_PlaceholderImage_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Video_PlaceholderImage_Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Video_PlaceholderImage_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Video_PlaceholderImage_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Video_PlaceholderImage_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Video_PlaceholderImage_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Video_PlaceholderImage_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_Where = {
    AND?: InputMaybe<Array<InputMaybe<Video_PlaceholderImage_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Video_PlaceholderImage_Where_Or>>>;
    alt?: InputMaybe<Video_PlaceholderImage_Alt_Operator>;
    createdAt?: InputMaybe<Video_PlaceholderImage_CreatedAt_Operator>;
    filename?: InputMaybe<Video_PlaceholderImage_Filename_Operator>;
    filesize?: InputMaybe<Video_PlaceholderImage_Filesize_Operator>;
    height?: InputMaybe<Video_PlaceholderImage_Height_Operator>;
    id?: InputMaybe<Video_PlaceholderImage_Id_Operator>;
    mimeType?: InputMaybe<Video_PlaceholderImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Video_PlaceholderImage_UpdatedAt_Operator>;
    url?: InputMaybe<Video_PlaceholderImage_Url_Operator>;
    width?: InputMaybe<Video_PlaceholderImage_Width_Operator>;
};

export type Video_PlaceholderImage_Where_And = {
    alt?: InputMaybe<Video_PlaceholderImage_Alt_Operator>;
    createdAt?: InputMaybe<Video_PlaceholderImage_CreatedAt_Operator>;
    filename?: InputMaybe<Video_PlaceholderImage_Filename_Operator>;
    filesize?: InputMaybe<Video_PlaceholderImage_Filesize_Operator>;
    height?: InputMaybe<Video_PlaceholderImage_Height_Operator>;
    id?: InputMaybe<Video_PlaceholderImage_Id_Operator>;
    mimeType?: InputMaybe<Video_PlaceholderImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Video_PlaceholderImage_UpdatedAt_Operator>;
    url?: InputMaybe<Video_PlaceholderImage_Url_Operator>;
    width?: InputMaybe<Video_PlaceholderImage_Width_Operator>;
};

export type Video_PlaceholderImage_Where_Or = {
    alt?: InputMaybe<Video_PlaceholderImage_Alt_Operator>;
    createdAt?: InputMaybe<Video_PlaceholderImage_CreatedAt_Operator>;
    filename?: InputMaybe<Video_PlaceholderImage_Filename_Operator>;
    filesize?: InputMaybe<Video_PlaceholderImage_Filesize_Operator>;
    height?: InputMaybe<Video_PlaceholderImage_Height_Operator>;
    id?: InputMaybe<Video_PlaceholderImage_Id_Operator>;
    mimeType?: InputMaybe<Video_PlaceholderImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Video_PlaceholderImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Video_PlaceholderImage_UpdatedAt_Operator>;
    url?: InputMaybe<Video_PlaceholderImage_Url_Operator>;
    width?: InputMaybe<Video_PlaceholderImage_Width_Operator>;
};

export type Video_PlaceholderImage_Width_Operator = {
    equals?: InputMaybe<Scalars['Int']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Int']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
    less_than?: InputMaybe<Scalars['Int']['input']>;
    less_than_equal?: InputMaybe<Scalars['Int']['input']>;
    not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Video_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Video_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_InternalName_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_PlaceholderImage_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Video_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Video_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video_Where = {
    AND?: InputMaybe<Array<InputMaybe<Video_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Video_Where_Or>>>;
    createdAt?: InputMaybe<Video_CreatedAt_Operator>;
    id?: InputMaybe<Video_Id_Operator>;
    internalName?: InputMaybe<Video_InternalName_Operator>;
    placeholderImage?: InputMaybe<Video_PlaceholderImage_Operator>;
    updatedAt?: InputMaybe<Video_UpdatedAt_Operator>;
    url?: InputMaybe<Video_Url_Operator>;
};

export type Video_Where_And = {
    createdAt?: InputMaybe<Video_CreatedAt_Operator>;
    id?: InputMaybe<Video_Id_Operator>;
    internalName?: InputMaybe<Video_InternalName_Operator>;
    placeholderImage?: InputMaybe<Video_PlaceholderImage_Operator>;
    updatedAt?: InputMaybe<Video_UpdatedAt_Operator>;
    url?: InputMaybe<Video_Url_Operator>;
};

export type Video_Where_Or = {
    createdAt?: InputMaybe<Video_CreatedAt_Operator>;
    id?: InputMaybe<Video_Id_Operator>;
    internalName?: InputMaybe<Video_InternalName_Operator>;
    placeholderImage?: InputMaybe<Video_PlaceholderImage_Operator>;
    updatedAt?: InputMaybe<Video_UpdatedAt_Operator>;
    url?: InputMaybe<Video_Url_Operator>;
};

export type Videos = {
    __typename?: 'Videos';
    docs?: Maybe<Array<Maybe<Video>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VideosCreateAccess = {
    __typename?: 'VideosCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VideosCreateDocAccess = {
    __typename?: 'VideosCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VideosDeleteAccess = {
    __typename?: 'VideosDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VideosDeleteDocAccess = {
    __typename?: 'VideosDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VideosDocAccessFields = {
    __typename?: 'VideosDocAccessFields';
    createdAt?: Maybe<VideosDocAccessFields_CreatedAt>;
    internalName?: Maybe<VideosDocAccessFields_InternalName>;
    placeholderImage?: Maybe<VideosDocAccessFields_PlaceholderImage>;
    updatedAt?: Maybe<VideosDocAccessFields_UpdatedAt>;
    url?: Maybe<VideosDocAccessFields_Url>;
};

export type VideosDocAccessFields_CreatedAt = {
    __typename?: 'VideosDocAccessFields_createdAt';
    create?: Maybe<VideosDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<VideosDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<VideosDocAccessFields_CreatedAt_Read>;
    update?: Maybe<VideosDocAccessFields_CreatedAt_Update>;
};

export type VideosDocAccessFields_CreatedAt_Create = {
    __typename?: 'VideosDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_CreatedAt_Delete = {
    __typename?: 'VideosDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_CreatedAt_Read = {
    __typename?: 'VideosDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_CreatedAt_Update = {
    __typename?: 'VideosDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_InternalName = {
    __typename?: 'VideosDocAccessFields_internalName';
    create?: Maybe<VideosDocAccessFields_InternalName_Create>;
    delete?: Maybe<VideosDocAccessFields_InternalName_Delete>;
    read?: Maybe<VideosDocAccessFields_InternalName_Read>;
    update?: Maybe<VideosDocAccessFields_InternalName_Update>;
};

export type VideosDocAccessFields_InternalName_Create = {
    __typename?: 'VideosDocAccessFields_internalName_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_InternalName_Delete = {
    __typename?: 'VideosDocAccessFields_internalName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_InternalName_Read = {
    __typename?: 'VideosDocAccessFields_internalName_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_InternalName_Update = {
    __typename?: 'VideosDocAccessFields_internalName_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_PlaceholderImage = {
    __typename?: 'VideosDocAccessFields_placeholderImage';
    create?: Maybe<VideosDocAccessFields_PlaceholderImage_Create>;
    delete?: Maybe<VideosDocAccessFields_PlaceholderImage_Delete>;
    read?: Maybe<VideosDocAccessFields_PlaceholderImage_Read>;
    update?: Maybe<VideosDocAccessFields_PlaceholderImage_Update>;
};

export type VideosDocAccessFields_PlaceholderImage_Create = {
    __typename?: 'VideosDocAccessFields_placeholderImage_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_PlaceholderImage_Delete = {
    __typename?: 'VideosDocAccessFields_placeholderImage_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_PlaceholderImage_Read = {
    __typename?: 'VideosDocAccessFields_placeholderImage_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_PlaceholderImage_Update = {
    __typename?: 'VideosDocAccessFields_placeholderImage_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_UpdatedAt = {
    __typename?: 'VideosDocAccessFields_updatedAt';
    create?: Maybe<VideosDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<VideosDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<VideosDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<VideosDocAccessFields_UpdatedAt_Update>;
};

export type VideosDocAccessFields_UpdatedAt_Create = {
    __typename?: 'VideosDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'VideosDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_UpdatedAt_Read = {
    __typename?: 'VideosDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_UpdatedAt_Update = {
    __typename?: 'VideosDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_Url = {
    __typename?: 'VideosDocAccessFields_url';
    create?: Maybe<VideosDocAccessFields_Url_Create>;
    delete?: Maybe<VideosDocAccessFields_Url_Delete>;
    read?: Maybe<VideosDocAccessFields_Url_Read>;
    update?: Maybe<VideosDocAccessFields_Url_Update>;
};

export type VideosDocAccessFields_Url_Create = {
    __typename?: 'VideosDocAccessFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_Url_Delete = {
    __typename?: 'VideosDocAccessFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_Url_Read = {
    __typename?: 'VideosDocAccessFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosDocAccessFields_Url_Update = {
    __typename?: 'VideosDocAccessFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields = {
    __typename?: 'VideosFields';
    createdAt?: Maybe<VideosFields_CreatedAt>;
    internalName?: Maybe<VideosFields_InternalName>;
    placeholderImage?: Maybe<VideosFields_PlaceholderImage>;
    updatedAt?: Maybe<VideosFields_UpdatedAt>;
    url?: Maybe<VideosFields_Url>;
};

export type VideosFields_CreatedAt = {
    __typename?: 'VideosFields_createdAt';
    create?: Maybe<VideosFields_CreatedAt_Create>;
    delete?: Maybe<VideosFields_CreatedAt_Delete>;
    read?: Maybe<VideosFields_CreatedAt_Read>;
    update?: Maybe<VideosFields_CreatedAt_Update>;
};

export type VideosFields_CreatedAt_Create = {
    __typename?: 'VideosFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_CreatedAt_Delete = {
    __typename?: 'VideosFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_CreatedAt_Read = {
    __typename?: 'VideosFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_CreatedAt_Update = {
    __typename?: 'VideosFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_InternalName = {
    __typename?: 'VideosFields_internalName';
    create?: Maybe<VideosFields_InternalName_Create>;
    delete?: Maybe<VideosFields_InternalName_Delete>;
    read?: Maybe<VideosFields_InternalName_Read>;
    update?: Maybe<VideosFields_InternalName_Update>;
};

export type VideosFields_InternalName_Create = {
    __typename?: 'VideosFields_internalName_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_InternalName_Delete = {
    __typename?: 'VideosFields_internalName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_InternalName_Read = {
    __typename?: 'VideosFields_internalName_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_InternalName_Update = {
    __typename?: 'VideosFields_internalName_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_PlaceholderImage = {
    __typename?: 'VideosFields_placeholderImage';
    create?: Maybe<VideosFields_PlaceholderImage_Create>;
    delete?: Maybe<VideosFields_PlaceholderImage_Delete>;
    read?: Maybe<VideosFields_PlaceholderImage_Read>;
    update?: Maybe<VideosFields_PlaceholderImage_Update>;
};

export type VideosFields_PlaceholderImage_Create = {
    __typename?: 'VideosFields_placeholderImage_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_PlaceholderImage_Delete = {
    __typename?: 'VideosFields_placeholderImage_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_PlaceholderImage_Read = {
    __typename?: 'VideosFields_placeholderImage_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_PlaceholderImage_Update = {
    __typename?: 'VideosFields_placeholderImage_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_UpdatedAt = {
    __typename?: 'VideosFields_updatedAt';
    create?: Maybe<VideosFields_UpdatedAt_Create>;
    delete?: Maybe<VideosFields_UpdatedAt_Delete>;
    read?: Maybe<VideosFields_UpdatedAt_Read>;
    update?: Maybe<VideosFields_UpdatedAt_Update>;
};

export type VideosFields_UpdatedAt_Create = {
    __typename?: 'VideosFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_UpdatedAt_Delete = {
    __typename?: 'VideosFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_UpdatedAt_Read = {
    __typename?: 'VideosFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_UpdatedAt_Update = {
    __typename?: 'VideosFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_Url = {
    __typename?: 'VideosFields_url';
    create?: Maybe<VideosFields_Url_Create>;
    delete?: Maybe<VideosFields_Url_Delete>;
    read?: Maybe<VideosFields_Url_Read>;
    update?: Maybe<VideosFields_Url_Update>;
};

export type VideosFields_Url_Create = {
    __typename?: 'VideosFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_Url_Delete = {
    __typename?: 'VideosFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_Url_Read = {
    __typename?: 'VideosFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type VideosFields_Url_Update = {
    __typename?: 'VideosFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type VideosReadAccess = {
    __typename?: 'VideosReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VideosReadDocAccess = {
    __typename?: 'VideosReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VideosUpdateAccess = {
    __typename?: 'VideosUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type VideosUpdateDocAccess = {
    __typename?: 'VideosUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AccordionsAccess = {
    __typename?: 'accordionsAccess';
    create?: Maybe<AccordionsCreateAccess>;
    delete?: Maybe<AccordionsDeleteAccess>;
    fields?: Maybe<AccordionsFields>;
    read?: Maybe<AccordionsReadAccess>;
    update?: Maybe<AccordionsUpdateAccess>;
};

export type AccordionsDocAccess = {
    __typename?: 'accordionsDocAccess';
    create?: Maybe<AccordionsCreateDocAccess>;
    delete?: Maybe<AccordionsDeleteDocAccess>;
    fields?: Maybe<AccordionsDocAccessFields>;
    read?: Maybe<AccordionsReadDocAccess>;
    update?: Maybe<AccordionsUpdateDocAccess>;
};

export type ButtonsAccess = {
    __typename?: 'buttonsAccess';
    create?: Maybe<ButtonsCreateAccess>;
    delete?: Maybe<ButtonsDeleteAccess>;
    fields?: Maybe<ButtonsFields>;
    read?: Maybe<ButtonsReadAccess>;
    update?: Maybe<ButtonsUpdateAccess>;
};

export type ButtonsDocAccess = {
    __typename?: 'buttonsDocAccess';
    create?: Maybe<ButtonsCreateDocAccess>;
    delete?: Maybe<ButtonsDeleteDocAccess>;
    fields?: Maybe<ButtonsDocAccessFields>;
    read?: Maybe<ButtonsReadDocAccess>;
    update?: Maybe<ButtonsUpdateDocAccess>;
};

export type Conversion_PanelsAccess = {
    __typename?: 'conversion_panelsAccess';
    create?: Maybe<ConversionPanelsCreateAccess>;
    delete?: Maybe<ConversionPanelsDeleteAccess>;
    fields?: Maybe<ConversionPanelsFields>;
    read?: Maybe<ConversionPanelsReadAccess>;
    update?: Maybe<ConversionPanelsUpdateAccess>;
};

export type Conversion_PanelsDocAccess = {
    __typename?: 'conversion_panelsDocAccess';
    create?: Maybe<ConversionPanelsCreateDocAccess>;
    delete?: Maybe<ConversionPanelsDeleteDocAccess>;
    fields?: Maybe<ConversionPanelsDocAccessFields>;
    read?: Maybe<ConversionPanelsReadDocAccess>;
    update?: Maybe<ConversionPanelsUpdateDocAccess>;
};

export type Cta_TilesAccess = {
    __typename?: 'cta_tilesAccess';
    create?: Maybe<CtaTilesCreateAccess>;
    delete?: Maybe<CtaTilesDeleteAccess>;
    fields?: Maybe<CtaTilesFields>;
    read?: Maybe<CtaTilesReadAccess>;
    update?: Maybe<CtaTilesUpdateAccess>;
};

export type Cta_TilesDocAccess = {
    __typename?: 'cta_tilesDocAccess';
    create?: Maybe<CtaTilesCreateDocAccess>;
    delete?: Maybe<CtaTilesDeleteDocAccess>;
    fields?: Maybe<CtaTilesDocAccessFields>;
    read?: Maybe<CtaTilesReadDocAccess>;
    update?: Maybe<CtaTilesUpdateDocAccess>;
};

export type Feature_GridsAccess = {
    __typename?: 'feature_gridsAccess';
    create?: Maybe<FeatureGridsCreateAccess>;
    delete?: Maybe<FeatureGridsDeleteAccess>;
    fields?: Maybe<FeatureGridsFields>;
    read?: Maybe<FeatureGridsReadAccess>;
    update?: Maybe<FeatureGridsUpdateAccess>;
};

export type Feature_GridsDocAccess = {
    __typename?: 'feature_gridsDocAccess';
    create?: Maybe<FeatureGridsCreateDocAccess>;
    delete?: Maybe<FeatureGridsDeleteDocAccess>;
    fields?: Maybe<FeatureGridsDocAccessFields>;
    read?: Maybe<FeatureGridsReadDocAccess>;
    update?: Maybe<FeatureGridsUpdateDocAccess>;
};

export type Feature_TilesAccess = {
    __typename?: 'feature_tilesAccess';
    create?: Maybe<FeatureTilesCreateAccess>;
    delete?: Maybe<FeatureTilesDeleteAccess>;
    fields?: Maybe<FeatureTilesFields>;
    read?: Maybe<FeatureTilesReadAccess>;
    update?: Maybe<FeatureTilesUpdateAccess>;
};

export type Feature_TilesDocAccess = {
    __typename?: 'feature_tilesDocAccess';
    create?: Maybe<FeatureTilesCreateDocAccess>;
    delete?: Maybe<FeatureTilesDeleteDocAccess>;
    fields?: Maybe<FeatureTilesDocAccessFields>;
    read?: Maybe<FeatureTilesReadDocAccess>;
    update?: Maybe<FeatureTilesUpdateDocAccess>;
};

export type Featured_MediaAccess = {
    __typename?: 'featured_mediaAccess';
    create?: Maybe<FeaturedMediaCreateAccess>;
    delete?: Maybe<FeaturedMediaDeleteAccess>;
    fields?: Maybe<FeaturedMediaFields>;
    read?: Maybe<FeaturedMediaReadAccess>;
    update?: Maybe<FeaturedMediaUpdateAccess>;
};

export type Featured_MediaDocAccess = {
    __typename?: 'featured_mediaDocAccess';
    create?: Maybe<FeaturedMediaCreateDocAccess>;
    delete?: Maybe<FeaturedMediaDeleteDocAccess>;
    fields?: Maybe<FeaturedMediaDocAccessFields>;
    read?: Maybe<FeaturedMediaReadDocAccess>;
    update?: Maybe<FeaturedMediaUpdateDocAccess>;
};

export type FooterAccess = {
    __typename?: 'footerAccess';
    fields?: Maybe<FooterFields>;
    read?: Maybe<FooterReadAccess>;
    update?: Maybe<FooterUpdateAccess>;
};

export type FooterDocAccess = {
    __typename?: 'footerDocAccess';
    fields?: Maybe<FooterDocAccessFields>;
    read?: Maybe<FooterReadDocAccess>;
    update?: Maybe<FooterUpdateDocAccess>;
};

export type HeaderAccess = {
    __typename?: 'headerAccess';
    fields?: Maybe<HeaderFields>;
    read?: Maybe<HeaderReadAccess>;
    update?: Maybe<HeaderUpdateAccess>;
};

export type HeaderDocAccess = {
    __typename?: 'headerDocAccess';
    fields?: Maybe<HeaderDocAccessFields>;
    read?: Maybe<HeaderReadDocAccess>;
    update?: Maybe<HeaderUpdateDocAccess>;
};

export type HeroesAccess = {
    __typename?: 'heroesAccess';
    create?: Maybe<HeroesCreateAccess>;
    delete?: Maybe<HeroesDeleteAccess>;
    fields?: Maybe<HeroesFields>;
    read?: Maybe<HeroesReadAccess>;
    update?: Maybe<HeroesUpdateAccess>;
};

export type HeroesDocAccess = {
    __typename?: 'heroesDocAccess';
    create?: Maybe<HeroesCreateDocAccess>;
    delete?: Maybe<HeroesDeleteDocAccess>;
    fields?: Maybe<HeroesDocAccessFields>;
    read?: Maybe<HeroesReadDocAccess>;
    update?: Maybe<HeroesUpdateDocAccess>;
};

export type Icon_TilesAccess = {
    __typename?: 'icon_tilesAccess';
    create?: Maybe<IconTilesCreateAccess>;
    delete?: Maybe<IconTilesDeleteAccess>;
    fields?: Maybe<IconTilesFields>;
    read?: Maybe<IconTilesReadAccess>;
    update?: Maybe<IconTilesUpdateAccess>;
};

export type Icon_TilesDocAccess = {
    __typename?: 'icon_tilesDocAccess';
    create?: Maybe<IconTilesCreateDocAccess>;
    delete?: Maybe<IconTilesDeleteDocAccess>;
    fields?: Maybe<IconTilesDocAccessFields>;
    read?: Maybe<IconTilesReadDocAccess>;
    update?: Maybe<IconTilesUpdateDocAccess>;
};

export type IconsAccess = {
    __typename?: 'iconsAccess';
    create?: Maybe<IconsCreateAccess>;
    delete?: Maybe<IconsDeleteAccess>;
    fields?: Maybe<IconsFields>;
    read?: Maybe<IconsReadAccess>;
    update?: Maybe<IconsUpdateAccess>;
};

export type IconsDocAccess = {
    __typename?: 'iconsDocAccess';
    create?: Maybe<IconsCreateDocAccess>;
    delete?: Maybe<IconsDeleteDocAccess>;
    fields?: Maybe<IconsDocAccessFields>;
    read?: Maybe<IconsReadDocAccess>;
    update?: Maybe<IconsUpdateDocAccess>;
};

export type ImagesAccess = {
    __typename?: 'imagesAccess';
    create?: Maybe<ImagesCreateAccess>;
    delete?: Maybe<ImagesDeleteAccess>;
    fields?: Maybe<ImagesFields>;
    read?: Maybe<ImagesReadAccess>;
    update?: Maybe<ImagesUpdateAccess>;
};

export type ImagesDocAccess = {
    __typename?: 'imagesDocAccess';
    create?: Maybe<ImagesCreateDocAccess>;
    delete?: Maybe<ImagesDeleteDocAccess>;
    fields?: Maybe<ImagesDocAccessFields>;
    read?: Maybe<ImagesReadDocAccess>;
    update?: Maybe<ImagesUpdateDocAccess>;
};

export type MutationAccordionInput = {
    accordionItems?: InputMaybe<
        Array<InputMaybe<MutationAccordion_AccordionItemsInput>>
    >;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading: Scalars['String']['input'];
    headingTag: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAccordionUpdateInput = {
    accordionItems?: InputMaybe<
        Array<InputMaybe<MutationAccordionUpdate_AccordionItemsInput>>
    >;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAccordionUpdate_AccordionItemsInput = {
    content?: InputMaybe<Scalars['JSON']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAccordion_AccordionItemsInput = {
    content?: InputMaybe<Scalars['JSON']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationButtonInput = {
    color?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    externalLink?: InputMaybe<Scalars['String']['input']>;
    fullTitle?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationButtonUpdateInput = {
    color?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    externalLink?: InputMaybe<Scalars['String']['input']>;
    fullTitle?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationConversionPanelInput = {
    callToAction?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading: Scalars['String']['input'];
    headingTag: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationConversionPanelUpdateInput = {
    callToAction?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCtaTileInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    externalLink?: InputMaybe<Scalars['String']['input']>;
    icon: Scalars['String']['input'];
    internalLink?: InputMaybe<Scalars['String']['input']>;
    internalName: Scalars['String']['input'];
    label: Scalars['String']['input'];
    linkType: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCtaTileUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    externalLink?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    internalName?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeatureGridInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    featureTiles?: InputMaybe<
        Array<InputMaybe<MutationFeatureGrid_FeatureTilesInput>>
    >;
    internalName: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeatureGridUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    featureTiles?: InputMaybe<
        Array<InputMaybe<MutationFeatureGridUpdate_FeatureTilesInput>>
    >;
    internalName?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeatureGridUpdate_FeatureTilesInput = {
    featureTile?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeatureGrid_FeatureTilesInput = {
    featureTile?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeatureTileInput = {
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading: Scalars['String']['input'];
    headingTag: Scalars['String']['input'];
    image: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeatureTileUpdateInput = {
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeaturedMediaInput = {
    assetType?: InputMaybe<Scalars['String']['input']>;
    callToAction?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading: Scalars['String']['input'];
    headingTag: Scalars['String']['input'];
    image?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    video?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFeaturedMediaUpdateInput = {
    assetType?: InputMaybe<Scalars['String']['input']>;
    callToAction?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    video?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooterInput = {
    copyrightText?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    menuItems?: InputMaybe<Array<InputMaybe<MutationFooter_MenuItemsInput>>>;
    socialLinks?: InputMaybe<
        Array<InputMaybe<MutationFooter_SocialLinksInput>>
    >;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooter_MenuItemsInput = {
    externalLink?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    internalCustomLabel?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    overridePageName?: InputMaybe<Scalars['Boolean']['input']>;
    submenuItems?: InputMaybe<
        Array<InputMaybe<MutationFooter_MenuItems_SubmenuItemsInput>>
    >;
};

export type MutationFooter_MenuItems_SubmenuItemsInput = {
    externalLink?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    internalCustomLabel?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    overridePageName?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationFooter_SocialLinksInput = {
    icon: Scalars['String']['input'];
    id?: InputMaybe<Scalars['String']['input']>;
    url: Scalars['String']['input'];
};

export type MutationHeaderInput = {
    callToAction?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    menuItems?: InputMaybe<Array<InputMaybe<MutationHeader_MenuItemsInput>>>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeader_MenuItemsInput = {
    externalLink?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    internalCustomLabel?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    overridePageName?: InputMaybe<Scalars['Boolean']['input']>;
    submenuItems?: InputMaybe<
        Array<InputMaybe<MutationHeader_MenuItems_SubmenuItemsInput>>
    >;
};

export type MutationHeader_MenuItems_SubmenuItemsInput = {
    externalLink?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    internalCustomLabel?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    overridePageName?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationHeroInput = {
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    cta?: InputMaybe<MutationHero_CtaInput>;
    heading: Scalars['String']['input'];
    headingTag: Scalars['String']['input'];
    subheading?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroUpdateInput = {
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    cta?: InputMaybe<MutationHeroUpdate_CtaInput>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    subheading?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroUpdate_CtaInput = {
    ctaButtons?: InputMaybe<
        Array<InputMaybe<MutationHeroUpdate_Cta_CtaButtonsInput>>
    >;
    ctaTiles?: InputMaybe<
        Array<InputMaybe<MutationHeroUpdate_Cta_CtaTilesInput>>
    >;
    type?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroUpdate_Cta_CtaButtonsInput = {
    callToAction?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroUpdate_Cta_CtaTilesInput = {
    callToActionTile?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHero_CtaInput = {
    ctaButtons?: InputMaybe<
        Array<InputMaybe<MutationHero_Cta_CtaButtonsInput>>
    >;
    ctaTiles?: InputMaybe<Array<InputMaybe<MutationHero_Cta_CtaTilesInput>>>;
    type?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHero_Cta_CtaButtonsInput = {
    callToAction?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHero_Cta_CtaTilesInput = {
    callToActionTile?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationIconInput = {
    alt: Scalars['String']['input'];
    createdAt?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    sizes?: InputMaybe<MutationIcon_SizesInput>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationIconTileInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon: Scalars['String']['input'];
    label: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationIconTileUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationIconUpdateInput = {
    alt?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    sizes?: InputMaybe<MutationIconUpdate_SizesInput>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationIconUpdate_SizesInput = {
    thumbnail?: InputMaybe<MutationIconUpdate_Sizes_ThumbnailInput>;
};

export type MutationIconUpdate_Sizes_ThumbnailInput = {
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationIcon_SizesInput = {
    thumbnail?: InputMaybe<MutationIcon_Sizes_ThumbnailInput>;
};

export type MutationIcon_Sizes_ThumbnailInput = {
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationImageInput = {
    alt: Scalars['String']['input'];
    createdAt?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    sizes?: InputMaybe<MutationImage_SizesInput>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationImageUpdateInput = {
    alt?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    sizes?: InputMaybe<MutationImageUpdate_SizesInput>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationImageUpdate_SizesInput = {
    thumbnail?: InputMaybe<MutationImageUpdate_Sizes_ThumbnailInput>;
};

export type MutationImageUpdate_Sizes_ThumbnailInput = {
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationImage_SizesInput = {
    thumbnail?: InputMaybe<MutationImage_Sizes_ThumbnailInput>;
};

export type MutationImage_Sizes_ThumbnailInput = {
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPageInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSwitchbackInput = {
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    image: Scalars['String']['input'];
    imageSide: Scalars['String']['input'];
    internalName: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSwitchbackUpdateInput = {
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    imageSide?: InputMaybe<Scalars['String']['input']>;
    internalName?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTileGridInput = {
    callToAction?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading: Scalars['String']['input'];
    headingTag: Scalars['String']['input'];
    iconTiles?: InputMaybe<Array<InputMaybe<MutationTileGrid_IconTilesInput>>>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTileGridUpdateInput = {
    callToAction?: InputMaybe<Scalars['String']['input']>;
    content?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    iconTiles?: InputMaybe<
        Array<InputMaybe<MutationTileGridUpdate_IconTilesInput>>
    >;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTileGridUpdate_IconTilesInput = {
    iconTile?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTileGrid_IconTilesInput = {
    iconTile?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
    apiKey?: InputMaybe<Scalars['String']['input']>;
    apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    email: Scalars['String']['input'];
    enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
    hash?: InputMaybe<Scalars['String']['input']>;
    lockUntil?: InputMaybe<Scalars['String']['input']>;
    loginAttempts?: InputMaybe<Scalars['Float']['input']>;
    password: Scalars['String']['input'];
    resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
    resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
    salt?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
    apiKey?: InputMaybe<Scalars['String']['input']>;
    apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
    hash?: InputMaybe<Scalars['String']['input']>;
    lockUntil?: InputMaybe<Scalars['String']['input']>;
    loginAttempts?: InputMaybe<Scalars['Float']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
    resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
    resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
    salt?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationVideoInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    internalName: Scalars['String']['input'];
    placeholderImage: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url: Scalars['String']['input'];
};

export type MutationVideoUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    internalName?: InputMaybe<Scalars['String']['input']>;
    placeholderImage?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
};

export type PagesAccess = {
    __typename?: 'pagesAccess';
    create?: Maybe<PagesCreateAccess>;
    delete?: Maybe<PagesDeleteAccess>;
    fields?: Maybe<PagesFields>;
    read?: Maybe<PagesReadAccess>;
    update?: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
    __typename?: 'pagesDocAccess';
    create?: Maybe<PagesCreateDocAccess>;
    delete?: Maybe<PagesDeleteDocAccess>;
    fields?: Maybe<PagesDocAccessFields>;
    read?: Maybe<PagesReadDocAccess>;
    update?: Maybe<PagesUpdateDocAccess>;
};

export type SwitchbacksAccess = {
    __typename?: 'switchbacksAccess';
    create?: Maybe<SwitchbacksCreateAccess>;
    delete?: Maybe<SwitchbacksDeleteAccess>;
    fields?: Maybe<SwitchbacksFields>;
    read?: Maybe<SwitchbacksReadAccess>;
    update?: Maybe<SwitchbacksUpdateAccess>;
};

export type SwitchbacksDocAccess = {
    __typename?: 'switchbacksDocAccess';
    create?: Maybe<SwitchbacksCreateDocAccess>;
    delete?: Maybe<SwitchbacksDeleteDocAccess>;
    fields?: Maybe<SwitchbacksDocAccessFields>;
    read?: Maybe<SwitchbacksReadDocAccess>;
    update?: Maybe<SwitchbacksUpdateDocAccess>;
};

export type Tile_GridsAccess = {
    __typename?: 'tile_gridsAccess';
    create?: Maybe<TileGridsCreateAccess>;
    delete?: Maybe<TileGridsDeleteAccess>;
    fields?: Maybe<TileGridsFields>;
    read?: Maybe<TileGridsReadAccess>;
    update?: Maybe<TileGridsUpdateAccess>;
};

export type Tile_GridsDocAccess = {
    __typename?: 'tile_gridsDocAccess';
    create?: Maybe<TileGridsCreateDocAccess>;
    delete?: Maybe<TileGridsDeleteDocAccess>;
    fields?: Maybe<TileGridsDocAccessFields>;
    read?: Maybe<TileGridsReadDocAccess>;
    update?: Maybe<TileGridsUpdateDocAccess>;
};

export type UsersAccess = {
    __typename?: 'usersAccess';
    create?: Maybe<UsersCreateAccess>;
    delete?: Maybe<UsersDeleteAccess>;
    fields?: Maybe<UsersFields>;
    read?: Maybe<UsersReadAccess>;
    unlock?: Maybe<UsersUnlockAccess>;
    update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
    __typename?: 'usersDocAccess';
    create?: Maybe<UsersCreateDocAccess>;
    delete?: Maybe<UsersDeleteDocAccess>;
    fields?: Maybe<UsersDocAccessFields>;
    read?: Maybe<UsersReadDocAccess>;
    unlock?: Maybe<UsersUnlockDocAccess>;
    update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
    __typename?: 'usersJWT';
    collection: Scalars['String']['output'];
    email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
    __typename?: 'usersLoginResult';
    exp?: Maybe<Scalars['Int']['output']>;
    token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<User>;
};

export type UsersMe = {
    __typename?: 'usersMe';
    collection?: Maybe<Scalars['String']['output']>;
    exp?: Maybe<Scalars['Int']['output']>;
    token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<User>;
};

export type UsersRefreshedUser = {
    __typename?: 'usersRefreshedUser';
    exp?: Maybe<Scalars['Int']['output']>;
    refreshedToken?: Maybe<Scalars['String']['output']>;
    user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
    __typename?: 'usersResetPassword';
    token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<User>;
};

export type VideosAccess = {
    __typename?: 'videosAccess';
    create?: Maybe<VideosCreateAccess>;
    delete?: Maybe<VideosDeleteAccess>;
    fields?: Maybe<VideosFields>;
    read?: Maybe<VideosReadAccess>;
    update?: Maybe<VideosUpdateAccess>;
};

export type VideosDocAccess = {
    __typename?: 'videosDocAccess';
    create?: Maybe<VideosCreateDocAccess>;
    delete?: Maybe<VideosDeleteDocAccess>;
    fields?: Maybe<VideosDocAccessFields>;
    read?: Maybe<VideosReadDocAccess>;
    update?: Maybe<VideosUpdateDocAccess>;
};
