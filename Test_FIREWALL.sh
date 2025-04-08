#This file displays the current status of all the ports which are accepting or being blocked
#It also checks the status of port 9050, how is it behaving before/after applying the firewall rules

#!/bin/bash

#test current iptables 
sudo iptables -L

telnet localhost 9050

#telnet ran successfully for the port 9050
