import{getPositionAsync}from"../services/mes-services.js";import"../services/suncalc.js";document.addEventListener("DOMContentLoaded",async()=>{try{let e=await getPositionAsync(),t=document.querySelector("#position-placeholder");t.innerHTML=`Position : ${e.latitude}, ${e.longitude}`;let s=SunCalc.getTimes(new Date,e.latitude,e.longitude);t.innerHTML+=` sunrise :${s.sunrise}`}catch(e){console.log(e.message)}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvcGFnZXMvZ2VvLnRzIl0sIm5hbWVzIjpbImdldFBvc2l0aW9uQXN5bmMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhc3luYyIsInIiLCJwb3NpdGlvblBsYWNlaG9sZGVyIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZGF0YSIsIlN1bkNhbGMiLCJnZXRUaW1lcyIsIkRhdGUiLCJzdW5yaXNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ik9BQVNBLHFCQUF3QixvQ0FJMUIseUJBR1BDLFNBQVNDLGlCQUFpQixtQkFBb0JDLFVBQzFDLElBQ0ksSUFBSUMsUUFBVUosbUJBQ1ZLLEVBQXNCSixTQUFTSyxjQUFjLHlCQUNqREQsRUFBb0JFLHdCQUEwQkgsRUFBRUksYUFBYUosRUFBRUssWUFDL0QsSUFBSUMsRUFBT0MsUUFBUUMsU0FBUyxJQUFJQyxLQUFRVCxFQUFFSSxTQUFVSixFQUFFSyxXQUN0REosRUFBb0JFLHdCQUEwQkcsRUFBS0ksVUFFdkQsTUFBT0MsR0FDSEMsUUFBUUMsSUFBSUYsRUFBTUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQb3NpdGlvbkFzeW5jIH0gZnJvbSBcIi4uL3NlcnZpY2VzL21lcy1zZXJ2aWNlcy5qc1wiO1xyXG4vLyBDZXR0ZSBiaWJsaW90aMOocXVlIGVzdCDDqWNyaXRlIGVuIGpzXHJcbi8vID0+IHBhcyBmb3Jjw6ltZW50IGQnZXhwb3J0XHJcbi8vID0+IGNlIHF1aSBlc3QgZXhwb3J0w6kgbidlc3QgcGFzIHR5cMOpXHJcbmltcG9ydCAgIFwiLi4vc2VydmljZXMvc3VuY2FsYy5qc1wiO1xyXG5kZWNsYXJlIGNvbnN0IFN1bkNhbGMgOiBhbnk7XHJcbi8vIERpcmUgYXUgY29tcGlsYXRldXIgcXVlIGlsIGV4aXN0ZSBxcWNob3NlIFN1bkNhbGMgcXVlIGplIHZhaXMgdXRpbHNlXHJcblxyXG5cclxuLy8gQXR0ZW50ZSBkZSBsYSBtaXNlIGVuIHBsYWNlIGR1IGRvY3VtZW50XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYXN5bmMgKCk9PntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHI9YXdhaXQgIGdldFBvc2l0aW9uQXN5bmMoKTtcclxuICAgICAgICBsZXQgcG9zaXRpb25QbGFjZWhvbGRlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc2l0aW9uLXBsYWNlaG9sZGVyXCIpITtcclxuICAgICAgICBwb3NpdGlvblBsYWNlaG9sZGVyLmlubmVySFRNTD1gUG9zaXRpb24gOiAke3IubGF0aXR1ZGV9LCAke3IubG9uZ2l0dWRlfWBcclxuICAgICAgICBsZXQgZGF0YT1TdW5DYWxjLmdldFRpbWVzKG5ldyBEYXRlKCksci5sYXRpdHVkZSxyLmxvbmdpdHVkZSk7XHJcbiAgICAgICAgcG9zaXRpb25QbGFjZWhvbGRlci5pbm5lckhUTUwrPWAgc3VucmlzZSA6JHtkYXRhLnN1bnJpc2V9YDtcclxuICAgXHJcbiAgICB9IGNhdGNoIChlcnJvciApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIFxyXG5cclxufSk7Il0sImZpbGUiOiJzY3JpcHRzL3BhZ2VzL2dlby5qcyJ9
