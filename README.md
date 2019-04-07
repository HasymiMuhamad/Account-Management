# Account-Management
Register and Login Flow

SIKAWAN (Sistem Kawal Pendidikan)

----API for register feature ----

Register data format :

a. Register as "teacher" , username is 18 character of NIP (teacher ID)

b. Register as "schoolAdmin", username is 8 character of NPSN (Nomor Pokok Sekolah Nasional)

c. Register as "parents", username is 10 character of NISN (Nomor Induk Siswa Nasional)

d. Register as "appsAdmin", username is 15 unique character which you will get from Admin

e. Register as "doe" or D.O.E (Department of Education), username is 20 unique character which you will get from admin

Register API : </br>
<code>https://si-kawan-account-section.herokuapp.com/api/v1/account/register</code>

</br>

----API for login feature ----

Login data format :

a. Login as "teacher" , username is 18 character of NIP (teacher ID)

b. Login as "schoolAdmin", username is 8 character of NPSN (Nomor Pokok Sekolah Nasional)

c. Login as "parents", username is 10 character of NISN (Nomor Induk Siswa Nasional)

d. Login as "appsAdmin", username is 15 unique character which you will get from Admin

e. Login as "doe" or D.O.E (Department of Education), username is 20 unique character which you will get from admin

Login API : </br>
<code> https://si-kawan-account-section.herokuapp.com/api/v1/account/login <code>
