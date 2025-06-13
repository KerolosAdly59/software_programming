
#include <stdio.h>

 typedef unsigned char  u8;
 typedef unsigned short int u16;
 typedef unsigned long int u32;
 typedef unsigned long long int u64;

  typedef struct fly // inti struct 
  {
     u16   x;
     u16   y;
     u16   z;
  };
  
  fly drone_1;
  fly drone_2;

drone_1.x  =100;
drone_1.y  =100;
drone_1.z  =100;

drone_2.x =200;
drone_2.y =200;
drone_2.z =200;

  
  
  
  
  
    struct PWM // inti struct 
  {
     u16   speed;
     u16   time;
     u16   Distince;
  };
   struct PID viscosty    = {20 , 30 ,40 };

   struct PWM movement = {2 , 50 , 90};

  u16 calc ( struct PWM x);
  
int main ()
{
   struct PID *ptr=NULL;


  
   ptr = &viscosty;

    ptr -> x=90;
    ptr -> y=50;
    ptr -> z=40;

    printf("x: %d\n", ptr->x);
    printf("y: %d\n", ptr->y);
    printf("z: %d\n", ptr->z);
     //u16 result = calc(Distince);
    printf("distince : %d\n", calc(movement));
    printf("distince in struct  : %d\n", movement.Distince);
}

 u16 calc ( struct PWM x)
 {
 movement.Distince = (x.speed *  x.time );
  return  movement.Distince ;
 }