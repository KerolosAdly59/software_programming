#include <stdio.h>
 
 
 int main()
 {
	  unsigned int grade;
	 printf("please enter a grade");
	 scanf("%d",&grade);
	 
	 if(grade<50)
	 {
		 printf("failed");
	 }
	 else if(grade>=50 && grade<65)
	 {
				 printf("normal");
 
	 }
	 else if(grade>=65 && grade<75)
	 {
	     printf("good"); 
     }
      else if(grade>=75 && grade<85)
	  {
		  printf("very good");
	  }
      else if(grade>=85)
	   {
		  printf("exllent");
	   }  
	   else 
	   {
		   printf("error grade");
	   }
 }