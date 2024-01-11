const express =require ('express')

const router =express.Router()


let errors=""


// router .get (bodyparser)
const Userdetails=[]


router.get('/',(req,res)=>{

    if(req.session.email)
    {
        res.redirect('/home')
    }
    else{
        res.render('signup',{error:errors})
        errors=""

    }
})


router.get("/login",(req,res)=>{

    if(req.session.email)
    {
        res.redirect('/home')
    }
    else{

        res.render("login",{error:errors})
    }

})
router.get('/home',(req,res)=>{
    if(req.session.email)
    {
        res.render('homepage')
    }
    else{
        res.redirect('/login')
    }
})

router.get("/logout",(req,res)=>{

    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        } else {
            // Redirect to the login page or another appropriate page
            res.redirect('/login');
        }
    });
})


router.post('/signup', (req, res) => {
    console.log(req.body);
    if (!req.body.email || !req.body.password) {

        res.redirect("/")
        
    } else {
        const { email, password } = req.body;
        
Userdetails.push(req.body)
        // console.log('Email:', email);
        // console.log('Password:', password);
        req.session.email = email
        console.log(Userdetails);
        res.redirect('/home');  // Assuming 'login' is the correct view name
    }
});


// router.post("/login",(req,res)=>{
//     res.redirect("/homepage")
// })




router.post('/homepagee',(req,res)=>{
    console.log(req.body);
    const {email,password}=req.body
    console.log(email,password);
    const yup=Userdetails.find((n)=>{
    return n.email===email && n.password===password
    
})
console.log(yup);
if(yup){

    req.session.email = email

    res.redirect("/home")
}else{
    // res.send("please signup")
    errors= 'user not found . Please try again:('
    res.redirect('/login');
}


    
})
module.exports=router








































// router.get('/login',(req,res)=>{
//     res.render('login')
// })

// router.get ('/homepage',(req,res)=>{
//     res.render('homepage')
// })
// router.post("login",(req,res)=>{
//     res.redirect("homepage")
// })

// router.post('/signup',(req,res) =>{
//     if(!req.body.email || !req.body.password)
//     {
//         res.redirect('/')
        
//     }
//     else{
//         const {email,password}=req.body
//         console.log(email);
//         console.log(password);
//         res.render('login')
        
//     }
   

// })