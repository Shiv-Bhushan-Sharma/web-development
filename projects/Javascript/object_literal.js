const person={
	firstName:'shiv',
	lastName:'Sharma',
	hobbies:['music','sports'],
	birthYear:function(){
		return 1997;
	},
	address:{
		state:'up',
		city:'pilkhuwa'
	}
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.birthYear());
console.log(person.address);
console.log(person.address.state);
console.log(person.address.city);