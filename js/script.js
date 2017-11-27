var car= {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
			turnOn: function(){
				this.isTurnedOn=true;
			},
			switchCar: function(isON){
				if(isON==true){
					this.isTurnedOn=true;
				}
				else{
					this.isTurnedOn=false;
				}
			},
			fly: function(){
				alert("Fly");
			}

	};


	console.log('hello there friends');