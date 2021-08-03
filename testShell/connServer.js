var childPro = require('child_process');
childPro.execFile('connServer.sh',[],null,function (err, stdout, stderr) {
    console.log('err, stdout, stderr ---> ', err, stdout, stderr);
//     callback(err, stdout, stderr);

});
    

// var ip = '1.1.1.1';

// var username = 'test';

// var password = 'pwd';

// var newpassword = 'newpwd';
// callfile.execFile('change_password.sh',['-H', ip, '-U', username, '-P', password, '-N', newpassword],null,function (err, stdout, stderr) {

//     callback(err, stdout, stderr);

// });

