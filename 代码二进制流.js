<script type="text/javascript">  
        window.onload=function(){  
            var c = document.createElement("canvas");
			  
            var ctx = c.getContext("2d");  
            c.id = "mycanvas";  
            
         var home = document.getElementById("home");
		
        c.height = home.offsetHeight;//���ÿ�
		c.width = document.body.offsetWidth;//���ø�

		var mdiv = document.createElement("div");//ͨ��js����һ��div
	
		mdiv.id = "mdiv";//����div��id
		mdiv.appendChild(c);  //div�����canvas����
        document.body.appendChild(mdiv);//body���div
		
            //Ҫ���������  
            var txts = "01";  
            //ת��Ϊ����  
            txts = txts.split("");  
              
            var font_size = 16;  
            var columns = c.width/font_size; //�����ݶ���  
              
            var drops = [];  
            //��ʼֵ  
            for(var x = 0; x < columns; x++)  
                drops[x] = 1;   
              
            //�����С�����ı�  
            window.onresize = function(){  
                //ʹ��ͼ����ȫ��  
                c.height = window.innerHeight;  
                c.width = window.innerWidth;  
                columns = c.width/font_size; //�����ݶ���  
                for(var x = 0; x < columns; x++)  
                    drops[x] = 1;  
            }  
              
            //����ȫ��  
            function requestFullScreen() {  
                var de = document.documentElement;  
                if (de.requestFullscreen) {  
                    de.requestFullscreen();  
                } else if (de.mozRequestFullScreen) {  
                    de.mozRequestFullScreen();  
                } else if (de.webkitRequestFullScreen) {  
                    de.webkitRequestFullScreen();  
                }  
            }  
              
            //��ӵ�������¼������ȫ����  
            /*document.body.addEventListener('click',function(){  
                requestFullScreen(); //����ȫ��  
            },false);  */
              
            //�������������  
            function draw()  
            {  
                //�ñ�������͸������͸��  
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)";  
                ctx.fillRect(0, 0, c.width, c.height);  
                  
                ctx.fillStyle = "#0F0"; //�ı���ɫ����ɫ��  
                ctx.font = font_size + "px arial";  
                //�����������  
                for(var i = 0; i < drops.length; i++)  
                {  
                    //���ȡҪ���������  
                    var text = txts[Math.floor(Math.random()*txts.length)];  
                    //������֣�ע������ļ���  
                    ctx.fillText(text, i*font_size, drops[i]*font_size);  
                      
                    //�������һ�������������0.95�����������е�����Ч���᲻ͬ��  
                    if(drops[i]*font_size > c.height || Math.random() > 0.95)  
                        drops[i] = 0;  
                      
                    //����Y����������  
                    drops[i]++;  
                }  
            }  
              
            setInterval(draw, 33);//��ʱִ��  
        }  
    </script>