#This file contains the code that modifies which ports are being allowed/disallowed explicitly



#!/bin/bash

# Flush existing iptables rules
sudo iptables -F

# Set default policies to DROP all incoming, outgoing, and forwarded traffic
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT DROP

# Allow established and related connections
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo iptables -A OUTPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow DNS (UDP and TCP port 53)
sudo iptables -A OUTPUT -p udp --dport 53 -j ACCEPT
sudo iptables -A INPUT -p udp --sport 53 -j ACCEPT
sudo iptables -A OUTPUT -p tcp --dport 53 -j ACCEPT
sudo iptables -A INPUT -p tcp --sport 53 -j ACCEPT

# Allow Tor traffic on ports 9001 and 9050
sudo iptables -A OUTPUT -p tcp --dport 9001 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 9001 -j ACCEPT
#sudo iptables -A OUTPUT -p tcp --dport 9050 -j ACCEPT
#sudo iptables -A INPUT -p tcp --dport 9050 -j ACCEPT

sudo iptables -A INPUT -p tcp --dport 9050 -j DROP
sudo iptables -A INPUT -p tcp --dport 80 -j DROP
sudo iptables -A INPUT -p tcp --dport 443 -j DROP


# Allow ICMP (Ping)
sudo iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT
sudo iptables -A OUTPUT -p icmp --icmp-type echo-reply -j ACCEPT

# Allow loopback interface (localhost) traffic
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A OUTPUT -o lo -j ACCEPT

echo "Firewall rules have been applied."
