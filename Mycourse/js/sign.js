$(document).ready(function(){			
	$('input[name="username"]').blur(function(){
		nodes=document.getElementsByClassName('u');
		if ($('input[name="username"]').val()==''){
			if(nodes.length==0){
				$('input[name="username"]').after('<b class="u" style="color:red;">用户名不能为空</b>');
			}
		}
		else{
			var $n=$(nodes[0]);
			$n.remove();
		}
	});
	$('input[name="psd1"]').blur(function(){
		nodes=document.getElementsByClassName('p1');
		if ($('input[name="psd1"]').val()==''){
			if(nodes.length==0){
				$('input[name="psd1"]').after('<b class="p1" style="color:red;">密码不能为空</b>');
			}
		}
		else{
			var $n=$(nodes[0]);
			$n.remove();
		}
	});
	$('input[name="psd2"]').blur(function(){
		nodes=document.getElementsByClassName('p2');
		if ($('input[name="psd1"]').val()!=$('input[name="psd2"]').val()){
			
			if(nodes.length==0){
				$('input[name="psd2"]').after('<b class="p2" style="color:red;">两次密码不一致</b>');
			}
		}
		else{
			var $n=$(nodes[0]);
			$n.remove();
		}
	});
	$('button').click(function(){
		if (($('input[name="psd1"]').val()==$('input[name="psd2"]').val())&&($('input[name="psd2"]').val()!='')){
			var $bar=$('#bar');
			var speed=4;
			$bar.css('width','0px');
			s=setInterval(function(){	
				nwidth=$bar.width();
				if(nwidth<=1350){
					twidth=(nwidth+1)+"px";
					$bar.width(twidth);
				}
				else{
					clearInterval(s);
					window.open('list.html')
				}
			},speed);
		}
	})
})


