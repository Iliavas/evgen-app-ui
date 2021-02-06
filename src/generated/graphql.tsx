import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type Query = {
  __typename?: 'Query';
  hyperLinks?: Maybe<Array<Maybe<HyperLinkType>>>;
  allTest?: Maybe<TestsTypeConnection>;
  /** The ID of the object */
  test?: Maybe<TestsType>;
  allSubject?: Maybe<SubjectTypeConnection>;
  /** The ID of the object */
  subject?: Maybe<SubjectType>;
  /** The ID of the object */
  answerSheet?: Maybe<AnswerSheetType>;
  allAnswerSheet?: Maybe<AnswerSheetTypeConnection>;
  /** The ID of the object */
  answer?: Maybe<AnswerType>;
  allAnswer?: Maybe<AnswerTypeConnection>;
  allLessons?: Maybe<LessonTypeConnection>;
  /** The ID of the object */
  lessons?: Maybe<LessonType>;
  /** The ID of the object */
  subjectClass?: Maybe<LocalSubjectType>;
  subjectClasses?: Maybe<LocalSubjectTypeConnection>;
  materials?: Maybe<MaterialConnection>;
  /** The ID of the object */
  material?: Maybe<Material>;
  /** The ID of the object */
  gettaskType?: Maybe<TaskTypeType>;
  taskTypes?: Maybe<TaskTypeTypeConnection>;
  tasks?: Maybe<TaskTypeConnection>;
  /** The ID of the object */
  task?: Maybe<TaskType>;
  roles?: Maybe<Array<Maybe<RoleType>>>;
  organisations?: Maybe<OrganisationTypeConnection>;
  /** The ID of the object */
  organisation?: Maybe<OrganisationType>;
  teachers?: Maybe<TeacherTypeConnection>;
  /** The ID of the object */
  teacher?: Maybe<TeacherType>;
  children?: Maybe<ChildTypeConnection>;
  /** The ID of the object */
  child?: Maybe<ChildType>;
  /** The ID of the object */
  group?: Maybe<GroupType>;
  groups?: Maybe<GroupTypeConnection>;
  hello?: Maybe<Scalars['String']>;
  userInfo?: Maybe<UserType>;
  /** The ID of the object */
  profile?: Maybe<ProfileType>;
  allProfiles?: Maybe<ProfileTypeConnection>;
};


export type QueryAllTestArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
};


export type QueryTestArgs = {
  id: Scalars['ID'];
};


export type QueryAllSubjectArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['ID']>;
  teachersGive_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QuerySubjectArgs = {
  id: Scalars['ID'];
};


export type QueryAnswerSheetArgs = {
  id: Scalars['ID'];
};


export type QueryAllAnswerSheetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Scalars['ID']>;
  child?: Maybe<Scalars['ID']>;
};


export type QueryAnswerArgs = {
  id: Scalars['ID'];
};


export type QueryAllAnswerArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sheet?: Maybe<Scalars['ID']>;
};


export type QueryAllLessonsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  descr?: Maybe<Scalars['String']>;
  descr_Contains?: Maybe<Scalars['String']>;
};


export type QueryLessonsArgs = {
  id: Scalars['ID'];
};


export type QuerySubjectClassArgs = {
  id: Scalars['ID'];
};


export type QuerySubjectClassesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
};


export type QueryMaterialsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryMaterialArgs = {
  id: Scalars['ID'];
};


export type QueryGettaskTypeArgs = {
  id: Scalars['ID'];
};


export type QueryTaskTypesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryTasksArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Array<Maybe<Scalars['ID']>>>;
  types_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryTaskArgs = {
  id: Scalars['ID'];
};


export type QueryOrganisationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type QueryOrganisationArgs = {
  id: Scalars['ID'];
};


export type QueryTeachersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryTeacherArgs = {
  id: Scalars['ID'];
};


export type QueryChildrenArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryChildArgs = {
  id: Scalars['ID'];
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type QueryHelloArgs = {
  token: Scalars['String'];
};


export type QueryUserInfoArgs = {
  token: Scalars['String'];
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAllProfilesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user_Username?: Maybe<Scalars['String']>;
  user_Username_Contains?: Maybe<Scalars['String']>;
};

export type HyperLinkType = {
  __typename?: 'HyperLinkType';
  link: Scalars['UUID'];
  teacher?: Maybe<TeacherType>;
  child?: Maybe<ChildType>;
  organ?: Maybe<OrganisatorType>;
};


export type TeacherType = Node & {
  __typename?: 'TeacherType';
  /** The ID of the object. */
  id: Scalars['ID'];
  org: OrganisationType;
  profile: ProfileType;
  groups: GroupTypeConnection;
  name: Scalars['String'];
  surname: Scalars['String'];
  midname: Scalars['String'];
  subjectSet: SubjectTypeConnection;
  subjectclasslocalSet: LocalSubjectTypeConnection;
  hyperlink?: Maybe<HyperLinkType>;
  pk?: Maybe<Scalars['Int']>;
};


export type TeacherTypeGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type TeacherTypeSubjectSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['ID']>;
  teachersGive_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TeacherTypeSubjectclasslocalSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type OrganisationType = Node & {
  __typename?: 'OrganisationType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  groupSet: GroupTypeConnection;
  teacherSet: TeacherTypeConnection;
  childSet: ChildTypeConnection;
  organisatorSet: OrganisatorTypeConnection;
  subjectSet: SubjectTypeConnection;
  childrenLength?: Maybe<Scalars['Int']>;
  classesLength?: Maybe<Scalars['Int']>;
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrganisationTypeGroupSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type OrganisationTypeTeacherSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type OrganisationTypeChildSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type OrganisationTypeOrganisatorSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type OrganisationTypeSubjectSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['ID']>;
  teachersGive_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type GroupTypeConnection = {
  __typename?: 'GroupTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GroupTypeEdge>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** A Relay edge containing a `GroupType` and its cursor. */
export type GroupTypeEdge = {
  __typename?: 'GroupTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<GroupType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type GroupType = Node & {
  __typename?: 'GroupType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  org: OrganisationType;
  teacherSet: TeacherTypeConnection;
  childSet: ChildTypeConnection;
  organisatorSet: OrganisatorTypeConnection;
  subjectclasslocalSet: LocalSubjectTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  classes?: Maybe<Array<Maybe<LocalSubjectType>>>;
  childrenLen?: Maybe<Scalars['Int']>;
};


export type GroupTypeTeacherSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type GroupTypeChildSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type GroupTypeOrganisatorSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type GroupTypeSubjectclasslocalSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
};

export type TeacherTypeConnection = {
  __typename?: 'TeacherTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TeacherTypeEdge>>;
};

/** A Relay edge containing a `TeacherType` and its cursor. */
export type TeacherTypeEdge = {
  __typename?: 'TeacherTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TeacherType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ChildTypeConnection = {
  __typename?: 'ChildTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChildTypeEdge>>;
};

/** A Relay edge containing a `ChildType` and its cursor. */
export type ChildTypeEdge = {
  __typename?: 'ChildTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ChildType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ChildType = Node & {
  __typename?: 'ChildType';
  /** The ID of the object. */
  id: Scalars['ID'];
  profile: ProfileType;
  org: OrganisationType;
  groups: GroupTypeConnection;
  name: Scalars['String'];
  surname: Scalars['String'];
  midname: Scalars['String'];
  answersheetSet: AnswerSheetTypeConnection;
  hyperlink?: Maybe<HyperLinkType>;
  pk?: Maybe<Scalars['Int']>;
};


export type ChildTypeGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};


export type ChildTypeAnswersheetSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Scalars['ID']>;
  child?: Maybe<Scalars['ID']>;
};

export type ProfileType = Node & {
  __typename?: 'ProfileType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  teacherSet: TeacherTypeConnection;
  childSet: ChildTypeConnection;
  organisatorSet: OrganisatorTypeConnection;
  pk?: Maybe<Scalars['Int']>;
};


export type ProfileTypeTeacherSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileTypeChildSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileTypeOrganisatorSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UserType = {
  __typename?: 'UserType';
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  profile?: Maybe<ProfileType>;
  pk?: Maybe<Scalars['Int']>;
};


export type OrganisatorTypeConnection = {
  __typename?: 'OrganisatorTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrganisatorTypeEdge>>;
};

/** A Relay edge containing a `OrganisatorType` and its cursor. */
export type OrganisatorTypeEdge = {
  __typename?: 'OrganisatorTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OrganisatorType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type OrganisatorType = Node & {
  __typename?: 'OrganisatorType';
  /** The ID of the object. */
  id: Scalars['ID'];
  profile: ProfileType;
  org: OrganisationType;
  groups: GroupTypeConnection;
  name: Scalars['String'];
  surname: Scalars['String'];
  midname: Scalars['String'];
  hyperlink?: Maybe<HyperLinkType>;
};


export type OrganisatorTypeGroupsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
};

export type AnswerSheetTypeConnection = {
  __typename?: 'AnswerSheetTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnswerSheetTypeEdge>>;
};

/** A Relay edge containing a `AnswerSheetType` and its cursor. */
export type AnswerSheetTypeEdge = {
  __typename?: 'AnswerSheetTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AnswerSheetType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AnswerSheetType = Node & {
  __typename?: 'AnswerSheetType';
  /** The ID of the object. */
  id: Scalars['ID'];
  child: ChildType;
  completed: Scalars['Boolean'];
  test: TestsType;
  answerSet: AnswerTypeConnection;
};


export type AnswerSheetTypeAnswerSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sheet?: Maybe<Scalars['ID']>;
};

export type TestsType = Node & {
  __typename?: 'TestsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  deadline: Scalars['DateTime'];
  lesson: LessonType;
  taskSet: TaskTypeConnection;
  answersheetSet: AnswerSheetTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  taskLen?: Maybe<Scalars['Int']>;
};


export type TestsTypeTaskSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Array<Maybe<Scalars['ID']>>>;
  types_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TestsTypeAnswersheetSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Scalars['ID']>;
  child?: Maybe<Scalars['ID']>;
};

export type LessonType = Node & {
  __typename?: 'LessonType';
  /** The ID of the object. */
  id: Scalars['ID'];
  typeLesson: LocalSubjectType;
  name: Scalars['String'];
  descr: Scalars['String'];
  content: Scalars['String'];
  timeLesson: Scalars['DateTime'];
  materialsSet: MaterialConnection;
  testsSet: TestsTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  tests?: Maybe<Array<Maybe<TestsType>>>;
  testsLen?: Maybe<Scalars['Int']>;
  materialsLen?: Maybe<Scalars['Int']>;
  materials?: Maybe<Array<Maybe<Material>>>;
};


export type LessonTypeMaterialsSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type LessonTypeTestsSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
};

export type LocalSubjectType = Node & {
  __typename?: 'LocalSubjectType';
  /** The ID of the object. */
  id: Scalars['ID'];
  subject: SubjectType;
  teachers: TeacherTypeConnection;
  group: GroupType;
  name: Scalars['String'];
  lessonSet: LessonTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  teachersSet?: Maybe<Array<Maybe<TeacherType>>>;
  lessonsLen?: Maybe<Scalars['Int']>;
};


export type LocalSubjectTypeTeachersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type LocalSubjectTypeLessonSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  descr?: Maybe<Scalars['String']>;
  descr_Contains?: Maybe<Scalars['String']>;
};

export type SubjectType = Node & {
  __typename?: 'SubjectType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  organisation: OrganisationType;
  teachersGive: TeacherTypeConnection;
  subjectclasslocalSet: LocalSubjectTypeConnection;
  pk?: Maybe<Scalars['Int']>;
};


export type SubjectTypeTeachersGiveArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_Contains?: Maybe<Scalars['String']>;
  midname?: Maybe<Scalars['String']>;
  midname_Contains?: Maybe<Scalars['String']>;
  org?: Maybe<Scalars['ID']>;
  profile?: Maybe<Scalars['ID']>;
  groups_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type SubjectTypeSubjectclasslocalSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  group?: Maybe<Scalars['ID']>;
};

export type LocalSubjectTypeConnection = {
  __typename?: 'LocalSubjectTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LocalSubjectTypeEdge>>;
};

/** A Relay edge containing a `LocalSubjectType` and its cursor. */
export type LocalSubjectTypeEdge = {
  __typename?: 'LocalSubjectTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<LocalSubjectType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type LessonTypeConnection = {
  __typename?: 'LessonTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LessonTypeEdge>>;
};

/** A Relay edge containing a `LessonType` and its cursor. */
export type LessonTypeEdge = {
  __typename?: 'LessonTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<LessonType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type MaterialConnection = {
  __typename?: 'MaterialConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MaterialEdge>>;
};

/** A Relay edge containing a `Material` and its cursor. */
export type MaterialEdge = {
  __typename?: 'MaterialEdge';
  /** The item at the end of the edge */
  node?: Maybe<Material>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Material = Node & {
  __typename?: 'Material';
  /** The ID of the object. */
  id: Scalars['ID'];
  link: Scalars['String'];
  name: Scalars['String'];
  data: Scalars['String'];
  Type: Scalars['String'];
  lesson: LessonType;
};

export type TestsTypeConnection = {
  __typename?: 'TestsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TestsTypeEdge>>;
};

/** A Relay edge containing a `TestsType` and its cursor. */
export type TestsTypeEdge = {
  __typename?: 'TestsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TestsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TaskTypeConnection = {
  __typename?: 'TaskTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TaskTypeEdge>>;
};

/** A Relay edge containing a `TaskType` and its cursor. */
export type TaskTypeEdge = {
  __typename?: 'TaskTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TaskType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TaskType = Node & {
  __typename?: 'TaskType';
  /** The ID of the object. */
  id: Scalars['ID'];
  theory: Scalars['String'];
  practise: Scalars['String'];
  test: TestsTypeConnection;
  number: Scalars['Int'];
  maxScore: Scalars['Int'];
  isTiming: Scalars['Boolean'];
  time: Scalars['Int'];
  Type: TaskTypeType;
  isAutocheck: Scalars['Boolean'];
  autoCheckData: Scalars['String'];
  pk?: Maybe<Scalars['Int']>;
};


export type TaskTypeTestArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  name_Contains?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
};

export type TaskTypeType = Node & {
  __typename?: 'TaskTypeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  taskSet: TaskTypeConnection;
};


export type TaskTypeTypeTaskSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  test?: Maybe<Array<Maybe<Scalars['ID']>>>;
  types_Contains?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type AnswerTypeConnection = {
  __typename?: 'AnswerTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnswerTypeEdge>>;
};

/** A Relay edge containing a `AnswerType` and its cursor. */
export type AnswerTypeEdge = {
  __typename?: 'AnswerTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AnswerType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AnswerType = Node & {
  __typename?: 'AnswerType';
  /** The ID of the object. */
  id: Scalars['ID'];
  sheet: AnswerSheetType;
  content: Scalars['String'];
  number: Scalars['Int'];
  completed: Scalars['Boolean'];
  score: Scalars['Int'];
  pk?: Maybe<Scalars['Int']>;
};

export type SubjectTypeConnection = {
  __typename?: 'SubjectTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SubjectTypeEdge>>;
};

/** A Relay edge containing a `SubjectType` and its cursor. */
export type SubjectTypeEdge = {
  __typename?: 'SubjectTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<SubjectType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TaskTypeTypeConnection = {
  __typename?: 'TaskTypeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TaskTypeTypeEdge>>;
};

/** A Relay edge containing a `TaskTypeType` and its cursor. */
export type TaskTypeTypeEdge = {
  __typename?: 'TaskTypeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TaskTypeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type RoleType = {
  __typename?: 'RoleType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type OrganisationTypeConnection = {
  __typename?: 'OrganisationTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrganisationTypeEdge>>;
};

/** A Relay edge containing a `OrganisationType` and its cursor. */
export type OrganisationTypeEdge = {
  __typename?: 'OrganisationTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<OrganisationType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProfileTypeConnection = {
  __typename?: 'ProfileTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileTypeEdge>>;
};

/** A Relay edge containing a `ProfileType` and its cursor. */
export type ProfileTypeEdge = {
  __typename?: 'ProfileTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProfileType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  getProfile?: Maybe<GetProfile>;
  createLesson?: Maybe<CreateLesson>;
  updateLessonRegistration?: Maybe<UpdateLessonRegistration>;
  deleteLesson?: Maybe<DeleteLesson>;
  createTest?: Maybe<CreateTest>;
  updateTestRegistration?: Maybe<UpdateTestRegistration>;
  deleteTest?: Maybe<DeleteTest>;
  createTask?: Maybe<CreateTask>;
  updateTask?: Maybe<UpdateTask>;
  deleteTask?: Maybe<DeleteTask>;
  addChildToGroup?: Maybe<AddChildToGroup>;
  addChildToOrg?: Maybe<AddChildToOrg>;
  createSubjectClass?: Maybe<CreateSubjectClass>;
  updateSubjectClass?: Maybe<UpdateSubjectLocalReg>;
  deleteSubjectClass?: Maybe<DeleteSubjectLocal>;
  createSubject?: Maybe<CreateSubject>;
  updateSubject?: Maybe<UpdateSubjectReg>;
  deleteSubject?: Maybe<DeleteSubject>;
  addSubjectToTeacher?: Maybe<AddSubjectToTeacher>;
  removeSubjectFromTeacher?: Maybe<RemoveSubjectFromTeacher>;
  answerQuestion?: Maybe<AnswerQuestion>;
  createMaterial?: Maybe<CreateMaterial>;
  deleteMaterial?: Maybe<DeleteMaterial>;
  changeMaterial?: Maybe<ChangeMaterail>;
  createOrg?: Maybe<CreateOrg>;
  createGroup?: Maybe<CreateGroup>;
  addGroupToOrg?: Maybe<AddGroupToOrg>;
  deleteGroup?: Maybe<DeleteGroup>;
  regTeacherOrg?: Maybe<RegTeacherToOrg>;
  regChildOrg?: Maybe<RegChildToOrg>;
  regChildGroup?: Maybe<RegChildGroup>;
  deleteChildGroup?: Maybe<DeleteChildGroup>;
  regTeacherClass?: Maybe<RegTeacherClass>;
  deleteTeacherClass?: Maybe<DeleteTeacherClass>;
  regOrganisatorToOrg?: Maybe<RegOrganisatorToOrg>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  registerUser?: Maybe<RegisterUser>;
};


export type MutationGetProfileArgs = {
  profileToken?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationCreateLessonArgs = {
  descr?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['ID']>;
};


export type MutationUpdateLessonRegistrationArgs = {
  descr?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteLessonArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationCreateTestArgs = {
  deadline?: Maybe<Scalars['Date']>;
  lessonId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateTestRegistrationArgs = {
  deadline?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteTestArgs = {
  testId?: Maybe<Scalars['ID']>;
};


export type MutationCreateTaskArgs = {
  Type?: Maybe<Scalars['String']>;
  maxScore?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  practise?: Maybe<Scalars['String']>;
  testId?: Maybe<Scalars['ID']>;
  theory?: Maybe<Scalars['String']>;
};


export type MutationUpdateTaskArgs = {
  Type?: Maybe<Scalars['ID']>;
  autoCheck?: Maybe<Scalars['Boolean']>;
  autoCheckData?: Maybe<Scalars['String']>;
  isTime?: Maybe<Scalars['Boolean']>;
  maxScore?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  practise?: Maybe<Scalars['String']>;
  taskId?: Maybe<Scalars['ID']>;
  theory?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Int']>;
};


export type MutationDeleteTaskArgs = {
  taskId?: Maybe<Scalars['ID']>;
};


export type MutationAddChildToGroupArgs = {
  childId?: Maybe<Scalars['ID']>;
  groupId?: Maybe<Scalars['ID']>;
};


export type MutationAddChildToOrgArgs = {
  childId?: Maybe<Scalars['ID']>;
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
  surname?: Maybe<Scalars['String']>;
};


export type MutationCreateSubjectClassArgs = {
  groupId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateSubjectClassArgs = {
  name?: Maybe<Scalars['String']>;
  subjectLocalId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteSubjectClassArgs = {
  subjectLocalId?: Maybe<Scalars['ID']>;
};


export type MutationCreateSubjectArgs = {
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateSubjectArgs = {
  name?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteSubjectArgs = {
  subjectId?: Maybe<Scalars['ID']>;
};


export type MutationAddSubjectToTeacherArgs = {
  subjectId?: Maybe<Scalars['ID']>;
  teacherId?: Maybe<Scalars['ID']>;
};


export type MutationRemoveSubjectFromTeacherArgs = {
  subjectId?: Maybe<Scalars['ID']>;
  teacherId?: Maybe<Scalars['ID']>;
};


export type MutationAnswerQuestionArgs = {
  answer?: Maybe<Scalars['String']>;
  answerTableId?: Maybe<Scalars['ID']>;
};


export type MutationCreateMaterialArgs = {
  data?: Maybe<Scalars['String']>;
  lessonType?: Maybe<Scalars['String']>;
  lessonId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationDeleteMaterialArgs = {
  materialId?: Maybe<Scalars['ID']>;
};


export type MutationChangeMaterialArgs = {
  data?: Maybe<Scalars['String']>;
  materialId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationCreateOrgArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationCreateGroupArgs = {
  groupName?: Maybe<Scalars['String']>;
  orgName?: Maybe<Scalars['String']>;
};


export type MutationAddGroupToOrgArgs = {
  groupName?: Maybe<Scalars['String']>;
  orgName?: Maybe<Scalars['String']>;
};


export type MutationDeleteGroupArgs = {
  groupName?: Maybe<Scalars['String']>;
  orgName?: Maybe<Scalars['String']>;
};


export type MutationRegTeacherOrgArgs = {
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
  surname?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationRegChildOrgArgs = {
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
  surname?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationRegChildGroupArgs = {
  groupId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteChildGroupArgs = {
  groupId?: Maybe<Scalars['ID']>;
  modelId?: Maybe<Scalars['ID']>;
};


export type MutationRegTeacherClassArgs = {
  classId?: Maybe<Scalars['ID']>;
  teacherId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteTeacherClassArgs = {
  classId?: Maybe<Scalars['ID']>;
  teacherId?: Maybe<Scalars['ID']>;
};


export type MutationRegOrganisatorToOrgArgs = {
  midname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['ID']>;
  surname?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

export type GetProfile = {
  __typename?: 'getProfile';
  id?: Maybe<Scalars['ID']>;
  userType?: Maybe<Scalars['String']>;
};

export type CreateLesson = {
  __typename?: 'CreateLesson';
  ok?: Maybe<Scalars['Boolean']>;
};

export type UpdateLessonRegistration = {
  __typename?: 'UpdateLessonRegistration';
  ok?: Maybe<Scalars['Boolean']>;
};

export type DeleteLesson = {
  __typename?: 'DeleteLesson';
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateTest = {
  __typename?: 'CreateTest';
  test?: Maybe<TestsType>;
};


export type UpdateTestRegistration = {
  __typename?: 'updateTestRegistration';
  test?: Maybe<TestsType>;
};

export type DeleteTest = {
  __typename?: 'deleteTest';
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateTask = {
  __typename?: 'createTask';
  task?: Maybe<TaskType>;
};

export type UpdateTask = {
  __typename?: 'updateTask';
  task?: Maybe<TaskType>;
};

export type DeleteTask = {
  __typename?: 'deleteTask';
  ok?: Maybe<Scalars['Boolean']>;
};

export type AddChildToGroup = {
  __typename?: 'addChildToGroup';
  child?: Maybe<ChildType>;
};

export type AddChildToOrg = {
  __typename?: 'addChildToOrg';
  child?: Maybe<ChildType>;
};

export type CreateSubjectClass = {
  __typename?: 'CreateSubjectClass';
  subjectClass?: Maybe<LocalSubjectType>;
};

export type UpdateSubjectLocalReg = {
  __typename?: 'UpdateSubjectLocalReg';
  subjectLocal?: Maybe<LocalSubjectType>;
};

export type DeleteSubjectLocal = {
  __typename?: 'DeleteSubjectLocal';
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateSubject = {
  __typename?: 'CreateSubject';
  subject?: Maybe<SubjectType>;
};

export type UpdateSubjectReg = {
  __typename?: 'UpdateSubjectReg';
  subject?: Maybe<SubjectType>;
};

export type DeleteSubject = {
  __typename?: 'DeleteSubject';
  ok?: Maybe<Scalars['Boolean']>;
};

export type AddSubjectToTeacher = {
  __typename?: 'AddSubjectToTeacher';
  teacher?: Maybe<TeacherType>;
};

export type RemoveSubjectFromTeacher = {
  __typename?: 'RemoveSubjectFromTeacher';
  teacher?: Maybe<TeacherType>;
};

export type AnswerQuestion = {
  __typename?: 'AnswerQuestion';
  answer?: Maybe<AnswerType>;
};

export type CreateMaterial = {
  __typename?: 'CreateMaterial';
  material?: Maybe<Material>;
};

export type DeleteMaterial = {
  __typename?: 'DeleteMaterial';
  ok?: Maybe<Scalars['Boolean']>;
};

export type ChangeMaterail = {
  __typename?: 'ChangeMaterail';
  material?: Maybe<Material>;
};

export type CreateOrg = {
  __typename?: 'CreateOrg';
  Org?: Maybe<OrganisationType>;
};

export type CreateGroup = {
  __typename?: 'CreateGroup';
  group?: Maybe<GroupType>;
};

export type AddGroupToOrg = {
  __typename?: 'AddGroupToOrg';
  group?: Maybe<GroupType>;
};

export type DeleteGroup = {
  __typename?: 'DeleteGroup';
  ok?: Maybe<Scalars['Boolean']>;
};

export type RegTeacherToOrg = {
  __typename?: 'RegTeacherToOrg';
  modelType?: Maybe<TeacherType>;
};

export type RegChildToOrg = {
  __typename?: 'RegChildToOrg';
  modelType?: Maybe<ChildType>;
};

export type RegChildGroup = {
  __typename?: 'RegChildGroup';
  modelType?: Maybe<ChildType>;
};

export type DeleteChildGroup = {
  __typename?: 'DeleteChildGroup';
  modelType?: Maybe<ChildType>;
};

export type RegTeacherClass = {
  __typename?: 'RegTeacherClass';
  teacher?: Maybe<TeacherType>;
};

export type DeleteTeacherClass = {
  __typename?: 'DeleteTeacherClass';
  teacher?: Maybe<TeacherType>;
};

export type RegOrganisatorToOrg = {
  __typename?: 'RegOrganisatorToOrg';
  modelType?: Maybe<OrganisatorType>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};


export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type RegisterUser = {
  __typename?: 'RegisterUser';
  ok?: Maybe<Scalars['Boolean']>;
};

export type RegisterUserInput = {
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type GetLessonsInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLessonsInfoQuery = { __typename?: 'Query', lessons?: Maybe<{ __typename?: 'LessonType', name: string, content: string, descr: string, typeLesson: { __typename?: 'LocalSubjectType', name: string, group: { __typename?: 'GroupType', name: string } }, tests?: Maybe<Array<Maybe<{ __typename?: 'TestsType', name: string, id: string, taskLen?: Maybe<number>, deadline: any }>>>, materials?: Maybe<Array<Maybe<{ __typename?: 'Material', name: string, data: string, id: string }>>> }> };

export type GetSubjectLessonsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSubjectLessonsQuery = { __typename?: 'Query', subjectClass?: Maybe<{ __typename?: 'LocalSubjectType', name: string, group: { __typename?: 'GroupType', name: string }, lessonSet: { __typename?: 'LessonTypeConnection', edges: Array<Maybe<{ __typename?: 'LessonTypeEdge', node?: Maybe<{ __typename?: 'LessonType', name: string, descr: string, testsLen?: Maybe<number>, materialsLen?: Maybe<number>, timeLesson: any, id: string }> }>> } }> };

export type UserInfoQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserInfoQuery = { __typename?: 'Query', userInfo?: Maybe<{ __typename?: 'UserType', profile?: Maybe<{ __typename?: 'ProfileType', childSet: { __typename?: 'ChildTypeConnection', edges: Array<Maybe<{ __typename?: 'ChildTypeEdge', node?: Maybe<{ __typename?: 'ChildType', id: string, pk?: Maybe<number>, org: { __typename?: 'OrganisationType', name: string, classesLength?: Maybe<number>, childrenLength?: Maybe<number>, subjects?: Maybe<Array<Maybe<string>>> } }> }>> }, teacherSet: { __typename?: 'TeacherTypeConnection', edges: Array<Maybe<{ __typename?: 'TeacherTypeEdge', node?: Maybe<{ __typename?: 'TeacherType', id: string, pk?: Maybe<number>, org: { __typename?: 'OrganisationType', name: string, classesLength?: Maybe<number>, childrenLength?: Maybe<number>, subjects?: Maybe<Array<Maybe<string>>> } }> }>> } }> }> };

export type ChildSubjectsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ChildSubjectsQuery = { __typename?: 'Query', child?: Maybe<{ __typename?: 'ChildType', name: string, pk?: Maybe<number>, groups: { __typename?: 'GroupTypeConnection', edges: Array<Maybe<{ __typename?: 'GroupTypeEdge', node?: Maybe<{ __typename?: 'GroupType', name: string, classes?: Maybe<Array<Maybe<{ __typename?: 'LocalSubjectType', name: string, id: string, teachersSet?: Maybe<Array<Maybe<{ __typename?: 'TeacherType', name: string }>>> }>>> }> }>> } }> };

export type GetTeacherClassesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTeacherClassesQuery = { __typename?: 'Query', teacher?: Maybe<{ __typename?: 'TeacherType', subjectclasslocalSet: { __typename?: 'LocalSubjectTypeConnection', edges: Array<Maybe<{ __typename?: 'LocalSubjectTypeEdge', node?: Maybe<{ __typename?: 'LocalSubjectType', id: string, name: string, lessonsLen?: Maybe<number>, group: { __typename?: 'GroupType', name: string, childrenLen?: Maybe<number> } }> }>> } }> };

export type MaterialQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MaterialQuery = { __typename?: 'Query', material?: Maybe<{ __typename?: 'Material', name: string, data: string, Type: string }> };

export type TestQueryVariables = Exact<{
  testId: Scalars['ID'];
}>;


export type TestQuery = { __typename?: 'Query', test?: Maybe<{ __typename?: 'TestsType', name: string, deadline: any, taskSet: { __typename?: 'TaskTypeConnection', edges: Array<Maybe<{ __typename?: 'TaskTypeEdge', node?: Maybe<{ __typename?: 'TaskType', theory: string, practise: string, number: number, maxScore: number, id: string, isTiming: boolean, time: number, isAutocheck: boolean, Type: { __typename?: 'TaskTypeType', name: string } }> }>> } }> };

export type TaskTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type TaskTypeQuery = { __typename?: 'Query', taskTypes?: Maybe<{ __typename?: 'TaskTypeTypeConnection', edges: Array<Maybe<{ __typename?: 'TaskTypeTypeEdge', node?: Maybe<{ __typename?: 'TaskTypeType', name: string, id: string }> }>> }> };

export type TaskQueryVariables = Exact<{
  taskId: Scalars['ID'];
}>;


export type TaskQuery = { __typename?: 'Query', task?: Maybe<{ __typename?: 'TaskType', theory: string, practise: string, maxScore: number, isTiming: boolean, time: number, isAutocheck: boolean, autoCheckData: string, Type: { __typename?: 'TaskTypeType', name: string } }>, taskTypes?: Maybe<{ __typename?: 'TaskTypeTypeConnection', edges: Array<Maybe<{ __typename?: 'TaskTypeTypeEdge', node?: Maybe<{ __typename?: 'TaskTypeType', name: string }> }>> }> };

export type GetTokenByNameAndPasswordMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type GetTokenByNameAndPasswordMutation = { __typename?: 'Mutation', tokenAuth?: Maybe<{ __typename?: 'ObtainJSONWebToken', token: string }> };

export type RegisterUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: Maybe<{ __typename?: 'RegisterUser', ok?: Maybe<boolean> }> };

export type AddMaterialMutationVariables = Exact<{
  id: Scalars['ID'];
  data: Scalars['String'];
  type: Scalars['String'];
  name: Scalars['String'];
}>;


export type AddMaterialMutation = { __typename?: 'Mutation', createMaterial?: Maybe<{ __typename?: 'CreateMaterial', material?: Maybe<{ __typename?: 'Material', data: string }> }> };

export type ChangeMaterialMutationVariables = Exact<{
  id: Scalars['ID'];
  data: Scalars['String'];
  name: Scalars['String'];
}>;


export type ChangeMaterialMutation = { __typename?: 'Mutation', changeMaterial?: Maybe<{ __typename?: 'ChangeMaterail', material?: Maybe<{ __typename?: 'Material', name: string, data: string }> }> };

export type DeleteMaterialMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteMaterialMutation = { __typename?: 'Mutation', deleteMaterial?: Maybe<{ __typename?: 'DeleteMaterial', ok?: Maybe<boolean> }> };

export type ChangelessonMutationVariables = Exact<{
  lessonId: Scalars['ID'];
  descr: Scalars['String'];
  name: Scalars['String'];
}>;


export type ChangelessonMutation = { __typename?: 'Mutation', updateLessonRegistration?: Maybe<{ __typename?: 'UpdateLessonRegistration', ok?: Maybe<boolean> }> };

export type CreateTestMutationVariables = Exact<{
  lessonID: Scalars['ID'];
}>;


export type CreateTestMutation = { __typename?: 'Mutation', createTest?: Maybe<{ __typename?: 'CreateTest', test?: Maybe<{ __typename?: 'TestsType', id: string }> }> };

export type AddTaskMutationVariables = Exact<{
  testId: Scalars['ID'];
}>;


export type AddTaskMutation = { __typename?: 'Mutation', createTask?: Maybe<{ __typename?: 'createTask', task?: Maybe<{ __typename?: 'TaskType', theory: string, id: string, pk?: Maybe<number> }> }> };


export const GetLessonsInfoDocument = gql`
    query getLessonsInfo($id: ID!) {
  lessons(id: $id) {
    name
    content
    descr
    typeLesson {
      name
      group {
        name
      }
    }
    tests {
      name
      id
      taskLen
      deadline
    }
    materials {
      name
      data
      id
    }
  }
}
    `;

/**
 * __useGetLessonsInfoQuery__
 *
 * To run a query within a React component, call `useGetLessonsInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonsInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonsInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLessonsInfoQuery(baseOptions: Apollo.QueryHookOptions<GetLessonsInfoQuery, GetLessonsInfoQueryVariables>) {
        return Apollo.useQuery<GetLessonsInfoQuery, GetLessonsInfoQueryVariables>(GetLessonsInfoDocument, baseOptions);
      }
export function useGetLessonsInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonsInfoQuery, GetLessonsInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetLessonsInfoQuery, GetLessonsInfoQueryVariables>(GetLessonsInfoDocument, baseOptions);
        }
export type GetLessonsInfoQueryHookResult = ReturnType<typeof useGetLessonsInfoQuery>;
export type GetLessonsInfoLazyQueryHookResult = ReturnType<typeof useGetLessonsInfoLazyQuery>;
export type GetLessonsInfoQueryResult = Apollo.QueryResult<GetLessonsInfoQuery, GetLessonsInfoQueryVariables>;
export const GetSubjectLessonsDocument = gql`
    query getSubjectLessons($id: ID!) {
  subjectClass(id: $id) {
    name
    group {
      name
    }
    lessonSet {
      edges {
        node {
          name
          descr
          testsLen
          materialsLen
          timeLesson
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetSubjectLessonsQuery__
 *
 * To run a query within a React component, call `useGetSubjectLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubjectLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubjectLessonsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSubjectLessonsQuery(baseOptions: Apollo.QueryHookOptions<GetSubjectLessonsQuery, GetSubjectLessonsQueryVariables>) {
        return Apollo.useQuery<GetSubjectLessonsQuery, GetSubjectLessonsQueryVariables>(GetSubjectLessonsDocument, baseOptions);
      }
export function useGetSubjectLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubjectLessonsQuery, GetSubjectLessonsQueryVariables>) {
          return Apollo.useLazyQuery<GetSubjectLessonsQuery, GetSubjectLessonsQueryVariables>(GetSubjectLessonsDocument, baseOptions);
        }
export type GetSubjectLessonsQueryHookResult = ReturnType<typeof useGetSubjectLessonsQuery>;
export type GetSubjectLessonsLazyQueryHookResult = ReturnType<typeof useGetSubjectLessonsLazyQuery>;
export type GetSubjectLessonsQueryResult = Apollo.QueryResult<GetSubjectLessonsQuery, GetSubjectLessonsQueryVariables>;
export const UserInfoDocument = gql`
    query userInfo($id: String!) {
  userInfo(token: $id) {
    profile {
      childSet {
        edges {
          node {
            id
            pk
            org {
              name
              classesLength
              childrenLength
              subjects
            }
          }
        }
      }
      teacherSet {
        edges {
          node {
            id
            pk
            org {
              name
              classesLength
              childrenLength
              subjects
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserInfoQuery__
 *
 * To run a query within a React component, call `useUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserInfoQuery(baseOptions: Apollo.QueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
        return Apollo.useQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, baseOptions);
      }
export function useUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserInfoQuery, UserInfoQueryVariables>) {
          return Apollo.useLazyQuery<UserInfoQuery, UserInfoQueryVariables>(UserInfoDocument, baseOptions);
        }
export type UserInfoQueryHookResult = ReturnType<typeof useUserInfoQuery>;
export type UserInfoLazyQueryHookResult = ReturnType<typeof useUserInfoLazyQuery>;
export type UserInfoQueryResult = Apollo.QueryResult<UserInfoQuery, UserInfoQueryVariables>;
export const ChildSubjectsDocument = gql`
    query childSubjects($id: ID!) {
  child(id: $id) {
    name
    pk
    groups {
      edges {
        node {
          name
          classes {
            name
            id
            teachersSet {
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useChildSubjectsQuery__
 *
 * To run a query within a React component, call `useChildSubjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChildSubjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChildSubjectsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useChildSubjectsQuery(baseOptions: Apollo.QueryHookOptions<ChildSubjectsQuery, ChildSubjectsQueryVariables>) {
        return Apollo.useQuery<ChildSubjectsQuery, ChildSubjectsQueryVariables>(ChildSubjectsDocument, baseOptions);
      }
export function useChildSubjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChildSubjectsQuery, ChildSubjectsQueryVariables>) {
          return Apollo.useLazyQuery<ChildSubjectsQuery, ChildSubjectsQueryVariables>(ChildSubjectsDocument, baseOptions);
        }
export type ChildSubjectsQueryHookResult = ReturnType<typeof useChildSubjectsQuery>;
export type ChildSubjectsLazyQueryHookResult = ReturnType<typeof useChildSubjectsLazyQuery>;
export type ChildSubjectsQueryResult = Apollo.QueryResult<ChildSubjectsQuery, ChildSubjectsQueryVariables>;
export const GetTeacherClassesDocument = gql`
    query getTeacherClasses($id: ID!) {
  teacher(id: $id) {
    subjectclasslocalSet {
      edges {
        node {
          id
          name
          lessonsLen
          group {
            name
            childrenLen
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetTeacherClassesQuery__
 *
 * To run a query within a React component, call `useGetTeacherClassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeacherClassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeacherClassesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTeacherClassesQuery(baseOptions: Apollo.QueryHookOptions<GetTeacherClassesQuery, GetTeacherClassesQueryVariables>) {
        return Apollo.useQuery<GetTeacherClassesQuery, GetTeacherClassesQueryVariables>(GetTeacherClassesDocument, baseOptions);
      }
export function useGetTeacherClassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeacherClassesQuery, GetTeacherClassesQueryVariables>) {
          return Apollo.useLazyQuery<GetTeacherClassesQuery, GetTeacherClassesQueryVariables>(GetTeacherClassesDocument, baseOptions);
        }
export type GetTeacherClassesQueryHookResult = ReturnType<typeof useGetTeacherClassesQuery>;
export type GetTeacherClassesLazyQueryHookResult = ReturnType<typeof useGetTeacherClassesLazyQuery>;
export type GetTeacherClassesQueryResult = Apollo.QueryResult<GetTeacherClassesQuery, GetTeacherClassesQueryVariables>;
export const MaterialDocument = gql`
    query material($id: ID!) {
  material(id: $id) {
    name
    data
    Type
  }
}
    `;

/**
 * __useMaterialQuery__
 *
 * To run a query within a React component, call `useMaterialQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMaterialQuery(baseOptions: Apollo.QueryHookOptions<MaterialQuery, MaterialQueryVariables>) {
        return Apollo.useQuery<MaterialQuery, MaterialQueryVariables>(MaterialDocument, baseOptions);
      }
export function useMaterialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialQuery, MaterialQueryVariables>) {
          return Apollo.useLazyQuery<MaterialQuery, MaterialQueryVariables>(MaterialDocument, baseOptions);
        }
export type MaterialQueryHookResult = ReturnType<typeof useMaterialQuery>;
export type MaterialLazyQueryHookResult = ReturnType<typeof useMaterialLazyQuery>;
export type MaterialQueryResult = Apollo.QueryResult<MaterialQuery, MaterialQueryVariables>;
export const TestDocument = gql`
    query test($testId: ID!) {
  test(id: $testId) {
    name
    deadline
    taskSet {
      edges {
        node {
          theory
          practise
          number
          maxScore
          id
          isTiming
          time
          Type {
            name
          }
          isAutocheck
        }
      }
    }
  }
}
    `;

/**
 * __useTestQuery__
 *
 * To run a query within a React component, call `useTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestQuery({
 *   variables: {
 *      testId: // value for 'testId'
 *   },
 * });
 */
export function useTestQuery(baseOptions: Apollo.QueryHookOptions<TestQuery, TestQueryVariables>) {
        return Apollo.useQuery<TestQuery, TestQueryVariables>(TestDocument, baseOptions);
      }
export function useTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestQuery, TestQueryVariables>) {
          return Apollo.useLazyQuery<TestQuery, TestQueryVariables>(TestDocument, baseOptions);
        }
export type TestQueryHookResult = ReturnType<typeof useTestQuery>;
export type TestLazyQueryHookResult = ReturnType<typeof useTestLazyQuery>;
export type TestQueryResult = Apollo.QueryResult<TestQuery, TestQueryVariables>;
export const TaskTypeDocument = gql`
    query taskType {
  taskTypes {
    edges {
      node {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useTaskTypeQuery__
 *
 * To run a query within a React component, call `useTaskTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useTaskTypeQuery(baseOptions?: Apollo.QueryHookOptions<TaskTypeQuery, TaskTypeQueryVariables>) {
        return Apollo.useQuery<TaskTypeQuery, TaskTypeQueryVariables>(TaskTypeDocument, baseOptions);
      }
export function useTaskTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskTypeQuery, TaskTypeQueryVariables>) {
          return Apollo.useLazyQuery<TaskTypeQuery, TaskTypeQueryVariables>(TaskTypeDocument, baseOptions);
        }
export type TaskTypeQueryHookResult = ReturnType<typeof useTaskTypeQuery>;
export type TaskTypeLazyQueryHookResult = ReturnType<typeof useTaskTypeLazyQuery>;
export type TaskTypeQueryResult = Apollo.QueryResult<TaskTypeQuery, TaskTypeQueryVariables>;
export const TaskDocument = gql`
    query task($taskId: ID!) {
  task(id: $taskId) {
    theory
    practise
    maxScore
    isTiming
    time
    Type {
      name
    }
    isAutocheck
    autoCheckData
  }
  taskTypes {
    edges {
      node {
        name
      }
    }
  }
}
    `;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskQuery(baseOptions: Apollo.QueryHookOptions<TaskQuery, TaskQueryVariables>) {
        return Apollo.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, baseOptions);
      }
export function useTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          return Apollo.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, baseOptions);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<TaskQuery, TaskQueryVariables>;
export const GetTokenByNameAndPasswordDocument = gql`
    mutation getTokenByNameAndPassword($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
  }
}
    `;
export type GetTokenByNameAndPasswordMutationFn = Apollo.MutationFunction<GetTokenByNameAndPasswordMutation, GetTokenByNameAndPasswordMutationVariables>;

/**
 * __useGetTokenByNameAndPasswordMutation__
 *
 * To run a mutation, you first call `useGetTokenByNameAndPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetTokenByNameAndPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getTokenByNameAndPasswordMutation, { data, loading, error }] = useGetTokenByNameAndPasswordMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGetTokenByNameAndPasswordMutation(baseOptions?: Apollo.MutationHookOptions<GetTokenByNameAndPasswordMutation, GetTokenByNameAndPasswordMutationVariables>) {
        return Apollo.useMutation<GetTokenByNameAndPasswordMutation, GetTokenByNameAndPasswordMutationVariables>(GetTokenByNameAndPasswordDocument, baseOptions);
      }
export type GetTokenByNameAndPasswordMutationHookResult = ReturnType<typeof useGetTokenByNameAndPasswordMutation>;
export type GetTokenByNameAndPasswordMutationResult = Apollo.MutationResult<GetTokenByNameAndPasswordMutation>;
export type GetTokenByNameAndPasswordMutationOptions = Apollo.BaseMutationOptions<GetTokenByNameAndPasswordMutation, GetTokenByNameAndPasswordMutationVariables>;
export const RegisterUserDocument = gql`
    mutation registerUser($username: String!, $password: String!) {
  registerUser(input: {username: $username, password: $password}) {
    ok
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, baseOptions);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const AddMaterialDocument = gql`
    mutation addMaterial($id: ID!, $data: String!, $type: String!, $name: String!) {
  createMaterial(data: $data, lessonId: $id, lessonType: $type, name: $name) {
    material {
      data
    }
  }
}
    `;
export type AddMaterialMutationFn = Apollo.MutationFunction<AddMaterialMutation, AddMaterialMutationVariables>;

/**
 * __useAddMaterialMutation__
 *
 * To run a mutation, you first call `useAddMaterialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMaterialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMaterialMutation, { data, loading, error }] = useAddMaterialMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      type: // value for 'type'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddMaterialMutation(baseOptions?: Apollo.MutationHookOptions<AddMaterialMutation, AddMaterialMutationVariables>) {
        return Apollo.useMutation<AddMaterialMutation, AddMaterialMutationVariables>(AddMaterialDocument, baseOptions);
      }
export type AddMaterialMutationHookResult = ReturnType<typeof useAddMaterialMutation>;
export type AddMaterialMutationResult = Apollo.MutationResult<AddMaterialMutation>;
export type AddMaterialMutationOptions = Apollo.BaseMutationOptions<AddMaterialMutation, AddMaterialMutationVariables>;
export const ChangeMaterialDocument = gql`
    mutation changeMaterial($id: ID!, $data: String!, $name: String!) {
  changeMaterial(materialId: $id, name: $name, data: $data) {
    material {
      name
      data
    }
  }
}
    `;
export type ChangeMaterialMutationFn = Apollo.MutationFunction<ChangeMaterialMutation, ChangeMaterialMutationVariables>;

/**
 * __useChangeMaterialMutation__
 *
 * To run a mutation, you first call `useChangeMaterialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeMaterialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeMaterialMutation, { data, loading, error }] = useChangeMaterialMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useChangeMaterialMutation(baseOptions?: Apollo.MutationHookOptions<ChangeMaterialMutation, ChangeMaterialMutationVariables>) {
        return Apollo.useMutation<ChangeMaterialMutation, ChangeMaterialMutationVariables>(ChangeMaterialDocument, baseOptions);
      }
export type ChangeMaterialMutationHookResult = ReturnType<typeof useChangeMaterialMutation>;
export type ChangeMaterialMutationResult = Apollo.MutationResult<ChangeMaterialMutation>;
export type ChangeMaterialMutationOptions = Apollo.BaseMutationOptions<ChangeMaterialMutation, ChangeMaterialMutationVariables>;
export const DeleteMaterialDocument = gql`
    mutation deleteMaterial($id: ID!) {
  deleteMaterial(materialId: $id) {
    ok
  }
}
    `;
export type DeleteMaterialMutationFn = Apollo.MutationFunction<DeleteMaterialMutation, DeleteMaterialMutationVariables>;

/**
 * __useDeleteMaterialMutation__
 *
 * To run a mutation, you first call `useDeleteMaterialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMaterialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMaterialMutation, { data, loading, error }] = useDeleteMaterialMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMaterialMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMaterialMutation, DeleteMaterialMutationVariables>) {
        return Apollo.useMutation<DeleteMaterialMutation, DeleteMaterialMutationVariables>(DeleteMaterialDocument, baseOptions);
      }
export type DeleteMaterialMutationHookResult = ReturnType<typeof useDeleteMaterialMutation>;
export type DeleteMaterialMutationResult = Apollo.MutationResult<DeleteMaterialMutation>;
export type DeleteMaterialMutationOptions = Apollo.BaseMutationOptions<DeleteMaterialMutation, DeleteMaterialMutationVariables>;
export const ChangelessonDocument = gql`
    mutation changelesson($lessonId: ID!, $descr: String!, $name: String!) {
  updateLessonRegistration(id: $lessonId, descr: $descr, name: $name) {
    ok
  }
}
    `;
export type ChangelessonMutationFn = Apollo.MutationFunction<ChangelessonMutation, ChangelessonMutationVariables>;

/**
 * __useChangelessonMutation__
 *
 * To run a mutation, you first call `useChangelessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangelessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changelessonMutation, { data, loading, error }] = useChangelessonMutation({
 *   variables: {
 *      lessonId: // value for 'lessonId'
 *      descr: // value for 'descr'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useChangelessonMutation(baseOptions?: Apollo.MutationHookOptions<ChangelessonMutation, ChangelessonMutationVariables>) {
        return Apollo.useMutation<ChangelessonMutation, ChangelessonMutationVariables>(ChangelessonDocument, baseOptions);
      }
export type ChangelessonMutationHookResult = ReturnType<typeof useChangelessonMutation>;
export type ChangelessonMutationResult = Apollo.MutationResult<ChangelessonMutation>;
export type ChangelessonMutationOptions = Apollo.BaseMutationOptions<ChangelessonMutation, ChangelessonMutationVariables>;
export const CreateTestDocument = gql`
    mutation createTest($lessonID: ID!) {
  createTest(name: "", lessonId: $lessonID) {
    test {
      id
    }
  }
}
    `;
export type CreateTestMutationFn = Apollo.MutationFunction<CreateTestMutation, CreateTestMutationVariables>;

/**
 * __useCreateTestMutation__
 *
 * To run a mutation, you first call `useCreateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestMutation, { data, loading, error }] = useCreateTestMutation({
 *   variables: {
 *      lessonID: // value for 'lessonID'
 *   },
 * });
 */
export function useCreateTestMutation(baseOptions?: Apollo.MutationHookOptions<CreateTestMutation, CreateTestMutationVariables>) {
        return Apollo.useMutation<CreateTestMutation, CreateTestMutationVariables>(CreateTestDocument, baseOptions);
      }
export type CreateTestMutationHookResult = ReturnType<typeof useCreateTestMutation>;
export type CreateTestMutationResult = Apollo.MutationResult<CreateTestMutation>;
export type CreateTestMutationOptions = Apollo.BaseMutationOptions<CreateTestMutation, CreateTestMutationVariables>;
export const AddTaskDocument = gql`
    mutation addTask($testId: ID!) {
  createTask(
    testId: $testId
    theory: ""
    practise: ""
    number: 1
    maxScore: 0
    Type: "VGFza1R5cGVUeXBlOjQ="
  ) {
    task {
      theory
      id
      pk
    }
  }
}
    `;
export type AddTaskMutationFn = Apollo.MutationFunction<AddTaskMutation, AddTaskMutationVariables>;

/**
 * __useAddTaskMutation__
 *
 * To run a mutation, you first call `useAddTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskMutation, { data, loading, error }] = useAddTaskMutation({
 *   variables: {
 *      testId: // value for 'testId'
 *   },
 * });
 */
export function useAddTaskMutation(baseOptions?: Apollo.MutationHookOptions<AddTaskMutation, AddTaskMutationVariables>) {
        return Apollo.useMutation<AddTaskMutation, AddTaskMutationVariables>(AddTaskDocument, baseOptions);
      }
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = Apollo.MutationResult<AddTaskMutation>;
export type AddTaskMutationOptions = Apollo.BaseMutationOptions<AddTaskMutation, AddTaskMutationVariables>;