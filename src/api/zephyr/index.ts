/* eslint-disable perfectionist/sort-objects */

import {LocalTestPlan, ZephyrPagination, ZerphyrTestCaseRefferenceStep, ZerphyrTestCaseStep} from '../../types/index.js'
import {json} from '../../utils/index.js'

export const fetchAllRegisters = async <T>(
  request: (startAt: number, maxResults: number) => Promise<Response>,
  startAt: number,
  maxResults: number,
) => {
  const results: T[] = []

  let currentStartAt = startAt

  // Infinite looooooooooooooooop :D
  for (;;) {
    // eslint-disable-next-line no-await-in-loop
    const response = await json<ZephyrPagination<T>>(() => request(currentStartAt, maxResults))

    results.push(...response.values)

    if (response.isLast) {
      break
    }

    currentStartAt += maxResults
  }

  return results
}

export const getProject = (token: string, projectKey: string) =>
  fetch(`https://api.zephyrscale.smartbear.com/v2/projects/${projectKey}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

export const getFolders = (
  token: string,
  projectKey: string,
  startAt: number | string = 0,
  maxResults: number | string = 10,
) =>
  fetch(
    `https://api.zephyrscale.smartbear.com/v2/folders?projectKey=${projectKey}&startAt=${startAt}&maxResults=${maxResults}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

export const createTestCase = (
  token: string,
  projectKey: string,
  ownerId: string,
  payload: {folderId: number | string; name: string} & Pick<LocalTestPlan, 'objective' | 'precondition'>,
) =>
  fetch(`https://api.zephyrscale.smartbear.com/v2/testcases`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      projectKey,
      objective: null,
      precondition: null,
      ownerId,
      ...payload,
    }),
  })

export const addTestCaseSteps = (token: string, testCaseKey: string, steps: (ZerphyrTestCaseRefferenceStep | ZerphyrTestCaseStep)[]) =>
  fetch(`https://api.zephyrscale.smartbear.com/v2/testcases/${testCaseKey}/teststeps`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mode: 'OVERWRITE',
      items: steps
    }),
  })
