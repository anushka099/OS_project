#This file displays the current status of all the ports which are accepting or being blocked
#it also checks the ping
#It also checks the status of port 9050, how is it behaving before/after applying the firewall rules

#!/bin/bash

sudo iptables -L

echo "check ping, no output means service not available"

sudo iptables -L -n | grep icmp

echo "check if 9050 is connectable or not, no output means connection not available"
telnet localhost 9050

#telnet ran successfully for the port 9050




