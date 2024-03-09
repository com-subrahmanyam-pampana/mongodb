
# Do it only for dev 
All you need to do is to:

Edit your config, 
e.g. C:\Program Files\MongoDB\Server\4.4\bin\mongodb.cfg

Turn the security: authorization: to enabled, as illustrated; note that this sub-entry may be missing completely. Just add it then.


security:
 authorization: enabled

Restart your MongoDB Server service from the Windows Services control panel.

1.stop mongodb :

$ service mongod stop
2.editing this /etc/mongod.conf:

   security:

     authorization: "disabled"
3.then I start again service:

$ service mongod start