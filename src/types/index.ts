export interface ZephyrPagination<T> {
  isLast: boolean,
  maxResults: number,
  next: string,
  startAt: number,
  total: number,
  values: T[]
}

export interface ZephyrFolder {
  folderType: string
  id: number
  index: number
  name: string
  parentId: number
  project: ZephyrProjectRefference
}

export interface ZephyrError {
  "errorCode": number,
  "message": string
}

export interface ZephyrProject {
  "enabled": boolean
  "id": number,
  "jiraProjectId": number,
  "key": string,
}

export interface ZephyrProjectRefference {
  id: number
  self: string
}

export interface AtlassianAccount {
  accountId: string
  accountType: string
  active: boolean
  avatarUrls: {
    "16x16": string
    "24x24": string
    "32x32": string
    "48x48": string
  }
  displayName: string
  emailAddress: string
  locale: string
  self: string
  timeZone: string
}

export interface ZephyrTestPlan {
  id: number,
  key: string,
  self: string,
}

export interface ZerphyrTestCaseStep {
  inline: {
    description: string,
    expectedResult: string,
  }
}

export interface ZerphyrTestCaseRefferenceStep {
  testCase: {
    testCaseKey: string
  }
}

export interface LocalTestPlan {
  folder: number | string,
  name: string,
  objective?: string,
  precondition?: string,
  steps: (LocalTestCaseRefferenceStep | LocalTestPlanStep)[]
}

export interface LocalTestPlanStep {
  description: string,
  expected: string,
}

export interface LocalTestCaseRefferenceStep {
  key: string
}

export interface LocalData {
  atlassian: {
    account: AtlassianAccount | null,
    domain: null | string,
    email: null | string,
    token: null | string,
  }
  zephyr: {
    project: ZephyrProject | null,
    token: null | string,
  }
}