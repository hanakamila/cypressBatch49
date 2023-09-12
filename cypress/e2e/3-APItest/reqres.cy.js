describe('Reqres dan Gorest API Testing', () => {
  
  //function membuat random email
  function randomEmail(){
    //to string36 = a-z+0-9, substring2,10 = karakter ke2-10
    const randomString = Math.random().toString(36).substring(2,10)
    //nggabung randomstring+samplemail.com
    const email = randomString + "gmail.com"
    return email
  }

  let emailAddress = randomEmail()

  it('get list user', () => {
    //cy request: untuk API, cy visit: untuk url
    cy.request({
      //jenis method yang dipake
      method: 'GET',
      //url tujuan APInya
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) =>{
      expect(response.status).to.equal(200)
    })
  })

  it('create user', () => {
    //cy request: untuk API, cy visit: untuk url
    cy.request({
      //jenis method yang dipake
      method: 'POST',
      //url tujuan APInya
      url: 'https://reqres.in/api/users',
      //insert body
      body:{
        "name": "morpheus",
        "job": "leader"
      }
    }).then((response) =>{
      //mengecek status = 201
      expect(response.status).to.equal(201)
      //mengecek response name = morpheus
      expect(response.body).has.property("name","morpheus")
      //mengecek response job = leader
      expect(response.body).has.property("job","leader")
    })
  })

  it('create user Gorest', () => {
    //cy request: untuk API, cy visit: untuk url
    cy.request({
      //jenis method yang dipake
      method: 'POST',
      //url tujuan APInya
      url: 'https://gorest.co.in//public/v2/users',
      headers:{
        Authorization:'Bearer 319c7679e433a8d1080cf6fc67270d8df919e18dceacf0e637705e650a3ecd6c'
      },
      //insert body
      body:{
        "name":"Msgr. Chitrangada Dhawan",
        "email": emailAddress,
        "gender":"female",
        "status":"inactive"
      }
    
    }).then((response) =>{
      //mengecek status = 201
      expect(response.status).to.equal(201)
    })
  })

})