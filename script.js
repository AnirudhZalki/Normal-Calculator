function a()
		{
			let n1=parseFloat(document.getElementById('n1').value)
			let n2=parseFloat(document.getElementById('n2').value)
			let operation=document.getElementById('operation').value
			let result
			if(operation=="sum")
			{
				result=n1+n2
			}
			else if(operation=="sub")
			{
				result=n1-n2
			}
			else if(operation=="multiply")
			{
				result=n1*n2
			}
			else if(operation=="div")
			{
				result=n1/n2
			}

			else
			{
				alert("Error")
			}

			alert(result)

			document.getElementById('demo').innerHTML=result
