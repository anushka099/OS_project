#This file displays the current status of all the ports which are accepting or being blocked
#it also checks the ping
#It also checks the status of port 9050, how is it behaving before/after applying the firewall rules

#!/bin/bash

#test current iptables 
sudo iptables -L

#check ping for icmps
sudo iptables -L -n | grep icmp

telnet localhost 9050
#telnet ran successfully for the port 9050




