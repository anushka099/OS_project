#this command helps to revert back to the original state of the ports


#!/bin/bash

#flush all existing rules
sudo iptables -F

#make default ports as usual
sudo iptables -P INPUT ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -P FORWARD ACCEPT

echo "back to original"
