t*=.22,h=4096,q=h/2,u=12,Q=t>>11,H=t>>12,m=t>>13,X=16,Z=1.5,e=m%2,p=m%8,B=m>>3,S=m%32<31,M=B<24?m>>7:m>>6,J=(m>>4)%2,K=!J,i=.1,j=.01,k=10e-4,E=(p,f=0,d=1,c=1)=>min(max((p-((t+f)*d)%(p*d))/p,0),c)/c,r=n=>(n+=4,(1.45+.09*M)*(1<<n/7)*1.0594**(2*n%14-(n%7>3))),T=t|0,F=80/((T%q)/64),N=x=>64*((x*x/((t&495)+1))%1),f=(C,V)=>min(1.2*(w=4*B/(t%(q*64)%(2+((t/2)%(q*32))/(q*2))),P=N(t+C),Y=N(T+C),z=(n,g=1+j,m=1,h=1,s=i,x=0)=>m*((r(n)*(x*w+s*F+t))|((g*r(n)*(s*F+x*w+t))<<h))%256,R=p=>t%p/p,l=p==7?1:(5^Q%7)%2+1,L=(n,W=1)=>K*(j+i*R(h))*z(n,1+k+k*C,W,1+e),(m>2)*64*abs(sin(2e3/((t%(X*q)%((7-5*(m>15&&K))*q)%(4*q))/8+48)))+(m>6)*.22*(Y+P)*E(h>>((K&&m>u)^(Q+m)-(p==6))%3+1-(K&&m>u),0,Z+H%5,.1)*S+(m>7)*(.5*P*E(h,q,4)*S+.54*Y*E(2*h,h,4)+i*(Y+P)*E(q*32,0,1.3)+.14*(3-2*S)*P*R(h))+(m>13)*.3*Y*E(q/2,0,8-p,1)*S+(m>15)*(B==11||(B>12&&J)?((7^m)%3+1)%2:1)*((B%4!=2+(m<24||m>96))*(.16-j*!J)*z(9+4*K-(e?-3+Q%4+p:Q%4==3)+H%2,1+2.5*j-2*j*(C||S)+(32*K*V),1+.5*(B%14>10),1,.3*(H%5))*E(q/2*(1+(t%(X*q)%(7*q)>>u)%4),0,.5*(B==14)+1.4-.2*K,k)+K*.14*z(X,1+k+X*V*K,Z,1+e)*E(q,0,2,k)+Z*L(2,Z)+Z*(!!M)*L(6-(m>>1)%4,3))+(m%X<14)*9*j*z(9+(p>5),1+j+V*(m>7),Z,1,1,1)*E(q/l,0,1.27+(p==7),k)+(m>2)*u*j*z(2-H%2,1+j+(m>6),Z,0)*((Q+18)%X<3)+1.3*(m>96)*i*J*(B%4!=2)*z(H%8+4*B%8+((1<<p%2)*((2+(p>5))*t>>11))%6,1+j*C,1,1,.4)*E(q/2<<(B^Q)%2,0,1.4-(3-m%3)/4,j)),255),[f(0,0),f(1,1e-4)]