/* eslint-disable perfectionist/sort-objects */

export const queryDomainUsers = (domain: string, token: string, email: string) =>
  fetch(`https://${domain}.atlassian.net/rest/api/3/user/search?query=${email}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${Buffer.from(`${email}:${token}`).toString('base64')}`,
      Accept: 'application/json',
    },
  })
