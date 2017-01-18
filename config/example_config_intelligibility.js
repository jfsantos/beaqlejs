// configure the test here
var TestConfig = {
  "TestName": "Intelligibility Demo Test",
  "RandomizeTestOrder": true,
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": false,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "http://localhost:8080/submit",
  "SupervisorContact": "joao.eel@gmail.com", 
  "Testsets": [
    //    
    {
      "Name": "S_01_01",
      "TestID": "id1",
      "Files": {
        "A": "audio/S_01_01.wav",
      }
    },
    //    
    {
      "Name": "S_01_02",
      "TestID": "id2",
      "Files": {
        "A": "audio/S_01_02.wav",
      }
    },
  ]
}
