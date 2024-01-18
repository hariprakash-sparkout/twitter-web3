import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '185di6j4',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'sk0JOtBPV8BAUA9BNW0zR3uEfXxXhuYpYDqFL4vFAsVvBfklT0cHjUpS3x5bjsJHwqxlKdV8UYSFt436wn13R2eVgsyFsPjFXMjk2HqVlzsm2sThFEfW7tAvTjos0Vlb4hD1dyLO7hH3LE71sujtfcu2PJ4MQEzCbFUCD0eNNnc2WKGLR7nf',
  useCdn: false,
})
