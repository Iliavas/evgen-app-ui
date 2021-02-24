
function write(time, functionAfter=()=>{}) {
  console.log(time, this)
  console.log(navigator.mediaDevices.getUserMedia({audio:true}))
  navigator.mediaDevices.getUserMedia({audio:true})
  .then(stream => {handlerFunction(stream); console.log(stream)
    setTimeout(()=>{this.rec.stop(); this.canWrite=false}, time*1000);})

  let handlerFunction = function (stream) {
    console.log(stream, "stream")
    this.rec = new MediaRecorder(stream);
    this.rec.start()
    
    setTimeout((e) => {
      this.rec.requestData()
    }, time)

    let ttime = time;
    console.log(time, "time")
    let i = 1;
    /*while (ttime > 0) {
      console.log(ttime, "ttime")
      setTimeout(() => {
        if (!this.canWrite) return;
        console.log(this.rec)
        this.rec.requestData();
      }, i*1000*Math.max(12, 12-ttime));
      ttime-=12;
      i++;
    }*/
    this.rec.oninactive = (e) =>{
      this.rec.play()
    }
    this.rec.ondataavailable = e => {
      console.log(e, "e")
      let audioChunks = [];
      audioChunks.push(e.data);
      let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
      sendData(blob);
    }
  }
  handlerFunction = handlerFunction.bind(this);
  let sendData = function (data) {
    console.log(data, "data");
    //if (!this.canWrite) return;
    let reader = data.stream().getReader();
    reader.read().then((e)=>{
      console.log(e)
      localStorage.setItem("audio", e.value)
    //fs.unlinkSync(path.join(filepath, 'bin'), (e)=>{console.log(e);});
    });
    //fs.writeFileSync(path.join(filepath, 'bin'), dat
    try{
      this.rec.play()
    } catch{}
  }
  sendData = sendData.bind(this);
}

function stop() {
  if (this.canWrite) this.rec.requestData();
  this.canWrite = false;
}

class AudioWriter {
  constructor() {
    this.rec = "";
    this.canWrite = true;
    this.write = write.bind(this);
    this.stop = stop.bind(this);
  }
}

export default AudioWriter