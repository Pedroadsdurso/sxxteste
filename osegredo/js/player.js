if("localStorage"in window&&null!==window.localStorage){var vTurbResultsKey="@vturb::results::v1",vTurbLocalSave=localStorage.getItem(vTurbResultsKey),vTurbComparisonsGroupId="66ddfc4f58b6bb000b5868b8",vTurbComparisonsGroupTimeId="1726281466";function vTurbGenerateNumber(){var M=Math.round(100*Math.random()),e=31536e6,r=(new Date).getTime()+e,t={...JSON.parse(vTurbLocalSave),[vTurbComparisonsGroupId]:{"id":vTurbComparisonsGroupTimeId,"ttl":r,"math":M}};return localStorage.setItem(vTurbResultsKey,JSON.stringify(t)),M}function vTurbGetNumber(){if(!vTurbLocalSave)return vTurbGenerateNumber();var M=JSON.parse(vTurbLocalSave)[vTurbComparisonsGroupId];if(!M)return vTurbGenerateNumber();var e=M.ttl>(new Date).getTime(),r=M.id===vTurbComparisonsGroupTimeId;return M.math&&e&&r?M.math:vTurbGenerateNumber()}var vTurbRandomNumber=vTurbGetNumber()}else vTurbRandomNumber=Math.round(100*Math.random());switch(!0){case vTurbRandomNumber<=100:default:function vTurbChangePlayer(){!vTurbOriginalPlayerIsMobile&&vTurbDeviceIsMobile||vTurbOriginalPlayerIsMobile&&!vTurbDeviceIsMobile?(vTurbPlayer=vTurbAlternativePlayer,vTurbSrcId=vTurbPlayer.id):vTurbPlayer=vTurbOriginalPlayer;var M=document.getElementById(`vid_${vTurbOriginalPlayer.id}`);M&&M.remove();var e=document.getElementById(`scr_${vTurbOriginalPlayer.id}`);e&&e.setAttribute("id",`scr_${vTurbSrcId}`)}function vTurbCreatSmartvdsElements(){var M,e,r;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||(window,e=(M=document).getElementById(`scr_${vTurbSrcId}`),(r=M.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,e.parentElement.insertBefore(r,e)):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(M,e,r){e=M.getElementById(`scr_${vTurbSrcId}`),(r=M.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,r.style.position="relative",r.style.width="100%",r.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,e.parentElement.insertBefore(r,e)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(M,e,r){e=M.getElementById(`vid_${vTurbPlayer.id}`),(r=M.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.objectFit="cover",r.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,e.appendChild(r)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(M,e,r){e=M.getElementById(`vid_${vTurbPlayer.id}`),(r=M.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.backdropFilter="blur(5px)",r.style.webkitBackdropFilter="blur(5px)",e.appendChild(r)}(document))}function vTurbLoadSmrtvds(){var M,e,r,t;M=window,e=document,M.smrtvds||(r=M.smrtvds=function(){r.callMethod?r.callMethod.apply(r,arguments):r.queue.push(arguments)},M._smrtvds||(M._smrtvds=r),r.push=r,r.loaded=!0,r.version="1.1",r.queue=[],(t=e.createElement("script")).async=!0,t.src=`https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,e.getElementsByTagName("head")[0].appendChild(t)),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options)}function vTurbSmrtvds(){vTurbCreatSmartvdsElements(),vTurbLoadSmrtvds()}var vTurbOriginalPlayer,vTurbSrcId="66ddfc4f58b6bb000b5868b8",vTurbPlayer=vTurbOriginalPlayer={"id":"66db9a24f605a6000ba042e3","org_id":"058af9dd-06b5-472d-9163-02c94b48aeb7","name":"VSL Mr FOX_-167_pitch_0547 - Mateus","device_type":"desktop","video_aspect_ratio":"56.25","thumbnail_key":"058af9dd-06b5-472d-9163-02c94b48aeb7/players/66db9a24f605a6000ba042e3/thumbnail.jpg","cover_key":"058af9dd-06b5-472d-9163-02c94b48aeb7/players/66db9a24f605a6000ba042e3/cover.jpg","version":"v1","video_id":"66db96bc640aa3000bf06a7c","options":{"autoplay":"smartplay","subtitle_active":!1,"smart_autoplay_template":"modern","theme":"#FB0000","foreground_color":"#FFFFFF","video":{"width":1920,"height":1080},"cdn":"cdn.converteai.net","displays":{"big_play":!1,"play_pause":!1,"backward":!1,"subtitle_control":!1,"forward":!1,"volume":!1,"volume_bar":!0,"time":!1,"fullscreen":!1,"seekbar":!1,"seekbar_time":!0,"speed_control":!1},"callAction":[{"id":"callaction_66db9a24f605a6000ba042e3_0","type":"custom_html","btnText":"Comprar agora","position":"bc","link":"","range":{"start":347,"finish":458},"color":"#1890FF","show_visit_returns":!1,"colors":{"text":"#FFFFFF","background":"#1890FF","text_hover":"#FFFFFF","background_hover":"#1890FF"},"custom_html":"<div id='hRmtK4'></div>\n  <script>\n  !function(){var e=document.createElement(\"script\");e.type=\"text/javascript\",e.src=\"https://tracker.assiny.com.br/iframeResizer.min.js\",document.head.appendChild(e);var t=document.createElement(\"script\");function i(){iFrameResize({log:!0,checkOrigin:!1,heightCalculationMethod:\"max\",resizedCallback:function(e){var t=document.getElementById(e.iframe.id);t.style.height=e.height+\"px\",t.style.overflow=\"hidden\"}},\"#iFramehRmtK4\")}t.type=\"text/javascript\",t.src=\"https://tracker.assiny.com.br/oneClickBuy.min.js\",document.head.appendChild(t),t.onload=function(){createOneClickBuy(\"hRmtK4\",\"https://pay.assiny.com.br/57D2-4/node/hRmtK4/one-click?utm_term=americana\",i)},e.onload=function(){i()}}();\n  </script>"}],"pixels":[],"thumbs":[],"headlines":[],"turbos":[],"smart_autoplay_elements":[{"id":"smart_autoplay_element_66db9a24f605a6000ba042e3_0","height":658.6666666666666,"width":677.3333333333333,"x":621.3333333333334,"y":210.66666666666669,"order":1,"opacity":1,"rotation":0,"type":"box","properties":{"color":"#D40002","radius":32,"border":{"size":1,"color":"transparent","type":"solid"}}},{"id":"smart_autoplay_element_66db9a24f605a6000ba042e3_1","height":84,"width":677.3333333333333,"x":621.3333333333334,"y":762.6666666666666,"order":2,"opacity":1,"rotation":0,"type":"text","properties":{"size":53.33333333333333,"value":"Clique para ouvir","color":"#FFFFFF","weight":"700","align":"center"}},{"id":"smart_autoplay_element_66db9a24f605a6000ba042e3_2","height":386.66666666666663,"width":386.66666666666663,"x":766.6666666666667,"y":296,"order":3,"opacity":1,"rotation":0,"type":"image","properties":{"alt":"Clique para ouvir","src":"data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgICAgPHBhdGggZD0iTTQwMC43MTEgMjguMzAxOUM0MTkuODUxIDM1LjQ2ODkgNDM3Ljc0NCA0NC4yMDE3IDQ1NC43NjQgNTQuODc5OEM0NzQuMDI3IDY2Ljk2NTggNDkxLjU5IDgxLjA5MjIgNTA3LjYwNCA5Ny4xNTY3QzUyMy45NzEgMTEzLjU3NSA1MzcuOTYyIDEzMS45MjMgNTQ5Ljg4MyAxNTEuNzYyQzU2MS4zNTMgMTcwLjg1IDU3MC40ODMgMTkxLjA2MiA1NzcuMTEgMjEyLjM3NkM1ODIuMTg2IDIyOC43IDU4Ni43MDYgMjQ1LjE1MyA1ODcuOTYyIDI2Mi4yNzJDNTg5LjE4IDI3OC44NzIgNTkxLjM1NCAyOTUuNTU0IDU5MC43MDggMzEyLjEwNkM1ODkuNTA1IDM0Mi45NzggNTgzLjY3MiAzNzMuMTE0IDU3Mi41MyA0MDIuMTk3QzU2NC4wNDYgNDI0LjM0NSA1NTMuMzAxIDQ0NS4xNSA1NDAuMDcgNDY0Ljc3OEM1MjYuODEgNDg0LjQ0OSA1MTEuMDUzIDUwMi4wMDEgNDkzLjQ5MyA1MTcuNzQ3QzQ3Mi42NjQgNTM2LjQyNCA0NDkuNDA4IDU1MS44MDEgNDIzLjkxMyA1NjMuNTE5QzQwMi42MzEgNTczLjMwMSAzODAuNjk2IDU4MS4zMjggMzU3LjQ0OSA1ODQuOTMxQzM0My41NjUgNTg3LjA4MyAzMjkuNTU3IDU4OC40ODggMzE1LjU3NSA1ODkuOTRDMzA4Ljg1MSA1OTAuNjM4IDMwMi4wMzIgNTkxLjIxMSAyOTUuMyA1OTAuOTAzQzI2OS42MzYgNTg5LjcyOSAyNDQuMjgzIDU4Ni41NzYgMjE5LjUzNyA1NzkuMDk5QzIwMS4yOTEgNTczLjU4NiAxODMuNjI0IDU2Ni43NzggMTY2Ljc3OCA1NTcuOTIxQzE0OS4yOTQgNTQ4LjcyOCAxMzMuMDg3IDUzNy42NTQgMTE3LjU0OSA1MjUuMzc4QzEwNi42MDkgNTE2LjczNSA5Ny4wNDg5IDUwNi44MDYgODcuNTcwNCA0OTYuODI0QzcyLjM2NSA0ODAuODEzIDU5LjYwNDEgNDYyLjkwMyA0OC43NTUzIDQ0My41NjVDMzcuODg4NSA0MjQuMTk1IDI4Ljc1OTQgNDA0LjEyNSAyMy4wNzM1IDM4Mi42OTNDMTkuMzM0NiAzNjguNiAxNi4xMjc2IDM1NC4yNTMgMTQuMjIxNCAzMzkuODE3QzEyLjE5OTMgMzI0LjUwMyAxMC45NTg3IDMwOC45MyAxMS4yNDE3IDI5My41MDRDMTEuNjczNiAyNjkuOTY4IDE1LjEwMTkgMjQ2LjcyNSAyMS40Mjg1IDIyMy44OTJDMjYuNzQxOSAyMDQuNzE2IDMzLjg1ODggMTg2LjMyIDQyLjgzOTYgMTY4LjY1N0M1Mi42ODQgMTQ5LjI5NiA2NC4zOTUxIDEzMS4wNzkgNzguODEwMSAxMTQuNzQ4Qzg2LjQ2MTkgMTA2LjA3OSA5My45NTEyIDk3LjE2OTIgMTAyLjQgODkuMzIyMkMxMTkuNDE4IDczLjUxNyAxMzcuOTU4IDU5LjY0NzQgMTU4LjI5IDQ4LjIzNjFDMTc1LjM0MSAzOC42NjYgMTkzLjA3IDMwLjY5OTkgMjExLjY3OSAyNC43MzU1QzIyOS4zNiAxOS4wNjg1IDI0Ny4zMjkgMTQuMzYxMyAyNjUuODk3IDEzLjExMTlDMjgzLjg4IDExLjkwMTggMzAxLjk3NCAxMC41NTQ2IDMxOS45MzUgMTEuMjk1QzM0MC4yNjMgMTIuMTMzIDM2MC40MDIgMTUuODA0OSAzODAuMDM0IDIxLjU0MTlDMzg2Ljg3IDIzLjUzOTkgMzkzLjYwNiAyNS44ODIzIDQwMC43MTEgMjguMzAxOVpNMzg1LjY1NCA3NS45MjY5QzM4NC40NDMgNzUuNDYgMzgzLjIxMiA3NS4wMzczIDM4Mi4wMjMgNzQuNTE5NkMzNjAuNzQ5IDY1LjI1NjkgMzM4LjIxMiA2MS45MTU4IDMxNS4zMDcgNjEuMTQ0NUMzMDEuNzQxIDYwLjY4NzcgMjg4LjEwOCA2MS4zNDQ0IDI3NC41NCA2Mi4xMTUyQzI2NS43NDkgNjIuNjE0NSAyNTYuODYxIDYzLjUyMjggMjQ4LjI5OSA2NS40ODExQzIzMC40MSA2OS41NzI2IDIxMy40NDMgNzYuNDI3OCAxOTYuOTYgODQuNDk1QzE3Ny45OCA5My43ODQ2IDE2MC4xNzEgMTA0LjY1NyAxNDQuMzI2IDExOC45MDlDMTI5Ljc1OSAxMzIuMDEyIDExNS43ODMgMTQ1LjcxMSAxMDUuMDAyIDE2MS45MzZDOTUuNTE3MSAxNzYuMjExIDg3LjcyOTQgMTkxLjcwMSA4MC4xMDMzIDIwNy4xMDVDNjYuOTMwMyAyMzMuNzE1IDYxLjYzNCAyNjIuMzQ4IDYxLjE0OTEgMjkxLjgxMkM2MC45MzI0IDMwNC45ODcgNjIuMTEyIDMxOC4yMDMgNjMuMDc1NCAzMzEuMzdDNjMuNjgyOCAzMzkuNjczIDYzLjk3NjIgMzQ4LjI0NSA2Ni4zMzQ5IDM1Ni4xMkM3MC41NTQyIDM3MC4yMDcgNzUuNDI4IDM4NC4yMTkgODEuNDc4OCAzOTcuNjA2QzkwLjYxMjUgNDE3LjgxNSAxMDEuNTIyIDQzNi45OTIgMTE2LjIgNDU0LjA0MkMxMjguNzQ3IDQ2OC42MTggMTQyLjIyIDQ4Mi4xNTUgMTU3LjQ5NCA0OTMuNTc2QzE3OS43NDcgNTEwLjIxNiAyMDQuNzQ0IDUyMS45MjIgMjMwLjk3OCA1MzEuMTI1QzI1MS4xNzQgNTM4LjIxMSAyNzIuMTgxIDUzOS43NjEgMjkzLjE4MSA1NDAuNzc1QzMwNS4xNDQgNTQxLjM1MyAzMTcuMjM3IDUzOS45MjIgMzI5LjIzMiA1MzguOTIxQzMzNy44NDQgNTM4LjIwMiAzNDYuNTM5IDUzNy4zNDMgMzU0LjkzNiA1MzUuNDE0QzM3NC4zMSA1MzAuOTY0IDM5Mi4zOTYgNTIyLjg2MiA0MTAuMjQgNTE0LjI5M0M0MjYuMDI4IDUwNi43MTEgNDQwLjUwNSA0OTcuMjA2IDQ1My45MjQgNDg1LjgxNEM0NjguOTM3IDQ3My4wNzEgNDgyLjM0NiA0NTguOTgyIDQ5NC4yNiA0NDMuMzdDNTA2LjE3OSA0MjcuNzUxIDUxNC42NzggNDEwLjI0NiA1MjIuOTA1IDM5Mi41MzVDNTM1LjM2NiAzNjUuNzA3IDU0MC4zNDkgMzM3LjI4MyA1NDAuODQ1IDMwOC4wMzFDNTQxLjA4IDI5NC4xOTIgNTQwLjEwMSAyODAuMjg1IDUzOC44NCAyNjYuNDg0QzUzOC4wMzEgMjU3LjYyOSA1MzYuNDU2IDI0OC42ODcgNTMzLjkxNSAyNDAuMTc1QzUyNi41ODIgMjE1LjYwNiA1MTYuNzQ4IDE5Mi4yNjggNTAyLjIyOSAxNzAuNzI4QzQ4OC4wNzcgMTQ5LjczMiA0NzEuMzE3IDEzMS4zODkgNDUyLjMyNSAxMTUuMDI4QzQzMi43NTEgOTguMTY0IDQwOS4zOTYgODcuMzQxMSAzODUuNjU0IDc1LjkyNjlaIiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgIDxwYXRoIGQ9Ik0yMDcuMDAyIDQ0NS40MzlDMjA3IDM0OS41MDMgMjA3LjE0MSAyNTQuMDEyIDIwNi43NDYgMTU4LjUyNEMyMDYuNzEzIDE1MC40MDUgMjEzLjQ2NSAxNDcuMjQzIDIxOS42NTQgMTUwLjg5N0MyMzUuMzIyIDE2MC4xNDcgMjUxLjA5IDE2OS4yMjkgMjY2Ljg0OCAxNzguMzI2QzI4MC44OTYgMTg2LjQzNCAyOTUuMDE1IDE5NC40MTYgMzA5LjA0NyAyMDIuNTUxQzMzMS41MTIgMjE1LjU3MyAzNTMuODk2IDIyOC43MzQgMzc2LjM3OSAyNDEuNzI1QzM5NC45NSAyNTIuNDU3IDQxMy42MTkgMjYzLjAyMSA0MzIuMjM2IDI3My42NzVDNDQzLjA5MiAyNzkuODg3IDQ1My45ODggMjg2LjAzMyA0NjQuNzU2IDI5Mi4zOTVDNDcxLjA3NCAyOTYuMTI4IDQ3MS4yNzEgMzAzLjY2NSA0NjUuMDQgMzA3LjQwMUM0NTEuMTA2IDMxNS43NTQgNDM3LjAxNyAzMjMuODQ5IDQyMi45NjIgMzMxLjk5OUM0MDUuMjUgMzQyLjI2OCAzODcuNTA2IDM1Mi40ODQgMzY5Ljc4IDM2Mi43MjlDMzU1LjU3MyAzNzAuOTQxIDM0MS4zNiAzNzkuMTQxIDMyNy4xNzEgMzg3LjM4NEMzMDIuMyA0MDEuODMzIDI3Ny40ODkgNDE2LjM4NiAyNTIuNTY0IDQzMC43NDJDMjQwLjkwMyA0MzcuNDU5IDIyOS4wNiA0NDMuODYzIDIxNy4yNTEgNDUwLjMyQzIxMi40ODQgNDUyLjkyNiAyMDkuMTQ2IDQ1MS4zOTMgMjA3LjAwMiA0NDUuNDM5WiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPC9zdmc+CiAg"}}],"mini_hooks":!1,"mini_hooks_elements":[],"resume":!0,"fake_bar":!0,"headline":!1,"turbo":!0,"turbo_speed":1.1,"turbo_auto_test":!1,"smartplay_options":{"top_text":"Seu v\xeddeo j\xe1 come\xe7ou","bottom_text":"Clique para ouvir","foreground_color":"#FFFFFF","background_color":"rgba(197, 60, 128, 0.77)","start_at":0,"end_at":264,"animation":{},"custom_preview":null},"resume_options":{"play":"Continuar assistindo?","title":"Voc\xea j\xe1 come\xe7ou a assistir esse v\xeddeo","replay":"Assistir do in\xedcio?","disable_pause":!1,"foreground_color":"#FFFFFF","background_color":"rgba(0,0,0,0.67)"},"fake_bar_options":{"height":10,"alpha":2,"vbar_height":!0,"vbar_end":!0,"vbar_network":!0,"vbar_color":null}}},vTurbDeviceIsMobile=window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),vTurbOriginalPlayerIsMobile="mobile"===vTurbOriginalPlayer.device_type;vTurbDeviceIsMobile=vTurbDeviceIsMobile&&vTurbDeviceIsMobile[0],vTurbSmrtvds()}