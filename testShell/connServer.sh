#!/usr/bin/expect
set password zVaqb!9724fY;
spawn ssh -p 36000 root@9.134.46.206
expect "*password:"
send "$password\r"
expect "*#"
interact