// define Element for Dom
function define(element,arr=null){
	if(arr == null){
	return document.querySelector(element);
	}else{
		return document.querySelectorAll(element);
	}
}

/* icons */
	let Edit = `
		<svg style="width:24px;height:24px" viewBox="0 0 24 24">
	    <path fill="currentColor" d="M6 20H11V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V10.3C19.78 10.42 19.57 10.56 19.39 10.74L18 12.13V4H13V12L10.5 9.75L8 12V4H6V20M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z" />
		</svg>
	`,
	increamentIcon =`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17,18V5H7V18L12,15.82L17,18M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z" />
	</svg>`,
	decreamentIcon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,11V9H15V11H9M19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17C18.11,3 19,3.9 19,5M17,5H7V18L12,15.82L17,18V5Z" />
	</svg>`,
	trashIcon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
	</svg>`,
	deleteStudentIcon = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" />
	</svg>`,
	Reset = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M14 17V19H22V17H14Z" />
	</svg>`,
	plus = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,6.7L13.45,10.55L17.3,12L13.45,13.45L12,17.3L10.55,13.45L6.7,12L10.55,10.55L12,6.7M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z" />
	</svg>`,
	face = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 12A8 8 0 1 0 12 20A8 8 0 0 0 20 12M22 12A10 10 0 1 1 12 2A10 10 0 0 1 22 12M15.5 8A1.5 1.5 0 1 1 14 9.5A1.54 1.54 0 0 1 15.5 8M10 9.5A1.5 1.5 0 1 1 8.5 8A1.54 1.54 0 0 1 10 9.5M17 15H13A4 4 0 0 0 9.53 17L7.8 16A6 6 0 0 1 13 13H17Z" />
	</svg>`;
// define some elements
let days_select = define('.day select');
// set function on change on the days_select
days_select.setAttribute("onchange","checkDay()");
let month = define('.month','arr');
let days_container = define('.container_days');
// date function
let date = new Date();
const weekday = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];




let days =weekday.forEach((day,i)=>{
	//add attributes to  day
	let dayInfo = document.createElement("div");
	let dayContent = document.createElement('div');
	dayContent.className="innerDayContainer";	
	dayInfo.className = "dayContent" + " " + day ;
	dayInfo.setAttribute('data-day',day) ;
	dayInfo.id= i ;
	// add attributes to head
	let dayHead = document.createElement('h1');
	dayHead.innerHTML = day;
	dayHead.className = "day-head";
	let option = document.createElement('option');
	option.id = i;
	option.innerHTML = day;
	option.id == date.getDate() ? option.setAttribute('selected','selected') : null;
	
	days_select.appendChild(option);
	dayInfo.appendChild(dayHead);
	dayInfo.appendChild(dayContent);
	days_container.appendChild(dayInfo);
});

// define some Elements

// add data to days
function checkDay(){
	const CheckedDay = days_select.value;
	let days = define('.container_days > div','arr');
	days.forEach((day,i) =>{
		
		if(day.dataset.day === CheckedDay){
			day.classList.add('active');
			day.style.display="block";
			let add = define('.add-student');
			let edit = define('.EditStudent');
			add.setAttribute('data-Day',i);
			edit.setAttribute('data-Day',i);
		}else{
			day.classList.remove('active');
			day.style.display="none";
		}	
	});
	chage_day_Edit();	
}
checkDay();
if( ! localStorage.getItem('data')){
data = [
		["Saturday",[{
					id:Math.floor((Math.random() * 100000000) + 1),
					name:"name",
					date:clockText(),
					location:"location",
				
					money:250,
					lessons:0,
					note:["مش مذاكر","عليه عشرة جنية"],
					lastModifay:"date",
					All_lessons:[]
					}
					
					]
		],
		["Sunday",[{
					id:Math.floor((Math.random() * 100000000) + 1),
					name:"name",
					date:clockText(),
					location:"location",
					
					money:250,
					lessons:0,
					note:["مش مذاكر","عليه عشرة جنية"],
					lastModifay:"date",
					All_lessons:[]
					}]
		],
		["Monday",[{
					id:Math.floor((Math.random() * 100000000) + 1),
					name:"Mohammed",
					date:clockText(),
					location:"Kodia",
					lessons:3,
					
					money:250,
					note:["مش مذاكر","عليه عشرة جنية"],
					lastModifay:"date",
					All_lessons:[]
					}]],
		["Tuesday",[{
					id:Math.floor((Math.random() * 100000000) + 1),
					name:"name",
					date:clockText(),
					location:"location",
					lessons:0,
					
					money:250,
					note:["مش مذاكر","عليه عشرة جنية"],
					lastModifay:"date",
					All_lessons:[]
					}]],
		["Wednesday",[
					{
					id:Math.floor((Math.random() * 100000000) + 1),
					name:"name",
					date:clockText(),
					location:"location",
					lessons:0,
					
					money:250,
					note:["مش مذاكر","عليه عشرة جنية"],
					lastModifay:"date",
					All_lessons:[]
					}]],
		["Thursday",[{
					id:Math.floor((Math.random() * 100000000) + 1),
					name:"name",
					date:clockText(),
					location:"location",
					lessons:0,
					
					money:250,
					note:["مش مذاكر","عليه عشرة جنية"],
					lastModifay:"date",
					All_lessons:[]
					}]],


		["Friday",
		[{
					id:Math.floor((Math.random() * 100000000) + 1),
					name:"name",
					date:clockText(),
					location:"location",
					lessons:0,
					
					money:250,
					note:["مش مذاكر","عليه عشرة جنية"],
					lastModifay:"date",
					All_lessons:[]
					}

			]
			]
,];

localStorage.setItem('data',JSON.stringify(data));
}

function run(){
	let d = JSON.parse(localStorage.getItem('data'));
	let days = define('.container_days > div .innerDayContainer','arr');
	for(let parent = 0 ; parent < d.length ; parent++){
	
	let content = '';
		for (var child = 0; child < d[parent][1].length; child++) {
			let notes = d[parent][1][child].note ?d[parent][1][child].note : [];
			let loop = ()=>{
				let l ;
				for(let y = 0 ; y < notes.length; y++){
										
						l+= "<li>"+notes[y]+"</li>";
									}
									return l;
									}

			let div = `<div class='innerDayContent'  >
							<div class="name">${d[parent][1][child].name}</div>
							<div class="name money">${(d[parent][1][child].money / 8 ) *
								d[parent][1][child].lessons}</div>
							<div class="lesson">${d[parent][1][child].lessons}</div>
							
							<div class="management" data-index='${parent}'>
							<button 
							onclick="increament(${parent} , ${d[parent][1][child].id})">
							${increamentIcon}</button>
							<button onclick="decreament(${parent},${d[parent][1][child].id})" >${decreamentIcon}</button>
							<div><button onclick="ShowAllLessons(${parent},${d[parent][1][child].id})">Show All Lessons</button></div>
							</div>
							<section class="details">
								<div class="icons icons_details">
									${plus}
								</div>
							<div class="day"><strong> :تاريخ التسجيل </strong> ${d[parent][1][child].date}</div>
							<div class="location">${d[parent][1][child].location}</div>
							<div class="Delete">
								<button onclick="reset(${parent},${d[parent][1][child].id})">${Reset}</button>
								<button onclick="DeleteStudent(${parent},${d[parent][1][child].id})">${deleteStudentIcon}</button>

							</div>
							<div class="last-modify">
								<div>
									<strong>:اخر تعديل  </strong> ${d[parent][1][child].lastModifay}
								</div>
							</div>
							<div class="note">
								<div>
								<strong>ملاحظات : </strong>
								</div>
								<ul  >${notes.map((li,i)=>{
									return(
										`<li id=${i} ><p>${li}</p><button onclick="deleteNote(${parent},${d[parent][1][child].id},${i})">${trashIcon}</button></li>`
										)
								})}</ul >
							</div>
							<div class="Edit-student">
								<button onclick="setEdit(${parent},${d[parent][1][child].id})" > ${Edit} Edit</button >
							</div>
							</section>

						</div>`;
				


	
			content += div;
	}
	days[parent].innerHTML = content;

	}}

run();
// show details 
let icons_details =  define('.icons_details');
icons_details.onclick = ()=>{
	define('.details').classList.toggle('shrink');
}
// increament lessons
function increament(day,id){
	let d = getData();
	let arrElement = d[day];
	delete d[day];
	let it = arrElement[1].find(item=>item.id == id);
	it.lessons += 1 ;
	it.All_lessons.push(clockText());
	it.lastModifay = clockText();
	d[day] = arrElement;
	//set New Data 
	setData(d);
	run();
}
// decreament lessons
function decreament(day,id){
	let d = getData();
	let arrElement = d[day];
	delete d[day];
	let it = arrElement[1].find(item=>item.id == id);
	it.lessons = it.lessons > 0 ? it.lessons -= 1 : 0 ;
	it.lastModifay = clockText();
	d[day] = arrElement;

	//set New Data 
	setData(d);
	run();
}
// Reset Lessons 
function reset(day,id){
	let HowManyLessons = prompt('Write Lessons Those Will be paid !!!!');
	let d = getData();
			let arrElement = d[day];
			delete d[day];
			let it = arrElement[1].find(item=>item.id == id);
	console.log(HowManyLessons);
	if(HowManyLessons !== '' ){
			
			it.lessons -= parseInt(HowManyLessons);
			it.lastModifay = clockText();
			d[day] = arrElement;
			//set New Data 
			setData(d);
			run();
			define('.money').innerHTML = 0;
		
	}else{
		if(confirm("Are You Want To Reset All Lessons ? !!")==true){
			it.lessons = 0 ;
			it.lastModifay = clockText();
			d[day] = arrElement;
			//set New Data 
			setData(d);
			run();
			define('.money').innerHTML = 0;
		}
	}
}
// delete Student 
function DeleteStudent(day,id){
	if(confirm(`Are You Sure You Want To Delete this Student ?!`)==true){
	let d = getData();
	let arrElement = d[day];
	delete d[day];
	let it = arrElement[1].filter(item=>item.id != id);
	arrElement[1] = it
	d[day] = arrElement;
	//set New Data 
	setData(d);
	run();
	}else{

	}
}
// delete notes
function deleteNote(day,id,index){
	if(confirm("Are You Sure You Want To Delete this Note ? ! ")==true){
	let d = getData();
	let arrElement = d[day];
	let it = arrElement[1].filter(item=>item.id == id);
	let its = arrElement[1].filter(item=>item.id != id);
	newArrNote = it[0].note.filter(item=>item !=it[0].note[index] );
	it[0].note = newArrNote;
	d[day] = arrElement;
	setData(d);
	run();
	}else{

	}
}

/* deal with data */
	function getData(){
		return JSON.parse(localStorage.getItem('data'));
	}
	function setData(elemet){
		 localStorage.setItem('data',JSON.stringify(elemet));
	}
/* deal with data */

// add new student 
function setSubmit(){		
	let add_name = define('.add-name').value;
	let add_location = define('.add-location').value;
	let add_price = define('.add-price').value;
	let day = define('.add-student').dataset.day;

	// data 
	let d = getData();
	if(add_name != '' && add_location != '' && add_price != ''){
	let student = {
		id:Math.floor((Math.random() * 100000000) + 1),
		name:add_name,
		lessons:0,
		location:add_location,
		date:clockText(),
		note:[],
		money:parseInt(add_price),
		lastModifay:"date",
		All_lessons:[]
	};
	d[parseInt(day)][1].push(student);
	setData(d);
	run();
	define('.add-name').value = '';
	define('.add-location').value= '';
	define('.add-student button').classList.add('prevent');
	}

	
}
// check value of the input 
function checkValue(e){
	let add_name = define('.add-name').value;
	let add_location = define('.add-location').value;
	let add_price = define('.add-price').value;
	let btn = define('.add-student button');
	if(add_name != '' && add_location != '' && add_price != ''){
		btn.classList.remove('prevent');

	}

}
// set Edit 
function setEdit(day,id){
	let EditName = define('.EditStudent .Edit-name'),
		EditLocation = define('.EditStudent .Edit-location'),
		EditNote = define('.EditStudent .Edit-note'),
		Edit_section = define('.EditStudent').offsetTop,
		d = getData(),
		Student_id = define('.student_id').value = id;
		define('.EditStudent button').classList.remove('prevent');
		// scroll to Edit section 
		window.scrollTo({
		  top: Edit_section,
		  behavior: 'smooth'
		});
		let arrElement = d[day];
		let it = arrElement[1].find(item=>item.id == id);
		EditName.value = it.name;
		EditLocation.value = it.location;
		EditNote.value = it.note;
}
// show all lessons
function ShowAllLessons(day,id){
	let Pupop_All_Student_lesson = define('.Pupop_All_Student_lesson '),
		Pupop_All_Student_lesson_info = define('.Pupop_All_Student_lesson .info'),
		d = getData(),
		st = d[day][1].find(s=>s.id == id);
		 st.All_lessons.forEach((t,index)=>{
		 	let childToAppend = document.createElement('div');
		 	childToAppend.className = 'conDetails'
			childToAppend.innerHTML = `
			<section>lesson :  ${index + 1}</section>
			<section> </section>
			<section>Date : ${t}</section>

			`;
			Pupop_All_Student_lesson_info.appendChild(childToAppend);

		});
		
		/*Pupop_All_Student_lesson.appendChild(childToAppend);*/
		Pupop_All_Student_lesson.style.left = "0";

		
}

// close Pupop
let class_button = define('.class_button');
class_button.onclick = ()=>{
	let Pupop_All_Student_lesson_info = define('.Pupop_All_Student_lesson .info');
	let Pupop_All_Student_lesson = define('.Pupop_All_Student_lesson ');
	setTimeout(()=>{
		Pupop_All_Student_lesson_info.innerHTML = "";
	},800);
	
	Pupop_All_Student_lesson.style.left = "-100%";

}
// save Edit 
function saveEdit(){
	let EditName = define('.EditStudent .Edit-name').value,
		EditLocation = define('.EditStudent .Edit-location').value,
		EditNote = define('.EditStudent .Edit-note').value,
		stringday = define('.EditStudent').dataset.day,
		newDay = define('.change_day select').value,
		newDayInt = parseInt(newDay),
		day = parseInt(stringday),
		id = define('.student_id').value;
	let d = getData();
		let arrElement = d[day];// modify 
		delete d[day];
		
		//check if the day are the same
			if(newDayInt == day){

				// if we are not modifying the day
				let it = arrElement[1].find(item=>item.id == id);
				it.name = EditName ;
				it.location = EditLocation;
				it.note.push(EditNote);
				d[day] = arrElement;
			}else{
			let arrElement1 = d[newDayInt];// push
			delete d[newDayInt];
			// if we are modifying the day
			let it = arrElement[1].find(item=>item.id == id);
			let ites = arrElement[1].filter(item=>item.id != id);
			// Edit Informatin 
			arrElement[1] = ites;
			d[day] = arrElement;
			arrElement1[1].push(it)
			d[newDayInt] = arrElement1;
			}

		// make iputs empty
		define('.EditStudent .Edit-name').value = '';
		define('.EditStudent .Edit-location').value = '';
		define('.EditStudent .Edit-note').value = "";
		let dayscontainer = define('.dayContent').offsetTop;
		window.scrollTo({
			top:dayscontainer,
			behavior:'smooth'
		});
		define('.EditStudent button').classList.add('prevent');
		//set New Data 
		setData(d);
		run();
	/*}else{

	}
*/}

// set function to change the day
function chage_day_Edit(){
	let Select = define('.change_day select'),
		stringday = define('.EditStudent').dataset.day;
		Select.innerHTML = '';
	weekday.forEach((day,i)=>{
	let opt = `<option id =${i} ${ i == parseInt(stringday) ? "selected" : null} value=${i}>${day}</option>`;
	Select.innerHTML+=opt;
	

	});
	
}
chage_day_Edit();
//date 
function clockText(){
    let date = new Date();

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        // dayweek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear()

    // We change the hours from 24 to 12 hours and establish whether it is AM or PM
    if(hh >= 12){
        hh = hh - 12
        ampm = 'PM'
    }else{
        ampm = 'AM'
    }

    // We detect when it's 0 AM and transform to 12 AM
    if(hh == 0){hh = 12}

    // Show a zero before hours
    if(hh < 10){hh = `0${hh}`}

    
    
    // Show a zero before the minutes
    if(mm < 10){mm = `0${mm}`}
    
    // Show minutes
    // If you want to show the name of the day of the week
    // let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

    // We get the months of the year and show it
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // We show the day, the month and the year
   /* dateDay.innerHTML = day
    // dateWeek.innerHTML = `${week[dayweek]}`
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year*/
    return `<div class="date">
    		<div>${ampm} / ${hh}   /${mm } </div>
    		<div>${day} / ${months[month]} / ${year}</div>
    		</div>`;

}

