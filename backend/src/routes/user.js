export default [{
  method: 'GET',
  path: '/one',
  handler: (request, h) => {
    return 'one'
  }
}, {
  method: 'GET',
  path: '/two',
  handler: (request, h) => {
    return 'two'
  }
}]