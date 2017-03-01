/**
 * Created by Quan Do on 10/5/2015.
 */
LobbyC.MainMenu = (function (my) {
    my.blackListIp = {
        "1.52.0.0":{
            action : "deny",
            mask : "255.252.0.0",
            comment: "Viet Nam",
            cidr_notation: "1.52.0.0/14"
        },
        "14.0.16.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "14.0.16.0/20"
        },
        "14.160.0.0":{
            action : "deny",
            mask : "255.224.0.0",
            comment : "Viet Nam",
            cidr_notation: "14.160.0.0/11"
        },
        "14.224.0.0":{
            action : "deny",
            mask : "255.224.0.0",
            comment : "Viet Nam",
            cidr_notation: "14.224.0.0/11"
        },
        "27.0.12.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "27.0.12.0/22"
        },
        "27.2.0.0":{
            action : "deny",
            mask : "255.254.0.0",
            comment : "Viet Nam",
            cidr_notation: "27.2.0.0/15"
        },
        "27.64.0.0":{
            action : "deny",
            mask : "255.240.0.0",
            comment : "Viet Nam",
            cidr_notation: "27.64.0.0/12"
        },
        "27.118.16.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "27.118.16.0/20"
        },
        "42.1.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "42.1.64.0/18"
        },
        "42.96.0.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.0.0/22"
        },
        "42.96.4.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.4.0/23"
        },
        "42.96.6.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.6.0/24"
        },
        "42.96.7.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.7.0/24"
        },
        "42.96.8.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.8.0/24"
        },
        "42.96.9.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.9.0/24"
        },
        "42.96.10.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.10.0/23"
        },
        "42.96.12.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.12.0/22"
        },
        "42.96.16.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.16.0/20"
        },
        "42.96.32.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "42.96.32.0/19"
        },
        "42.112.0.0":{
            action : "deny",
            mask : "255.248.0.0",
            comment : "Viet Nam",
            cidr_notation: "42.112.0.0/13"
        },
        "43.239.148.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "43.239.148.0/22"
        },
        "43.239.184.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "43.239.184.0/22"
        },
        "43.239.188.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "43.239.188.0/22"
        },
        "43.239.220.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "43.239.220.0/22"
        },
        "43.239.224.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "43.239.224.0/22"
        },
        "45.117.76.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.76.0/22"
        },
        "45.117.80.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.80.0/22"
        },
        "45.117.156.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.156.0/22"
        },
        "45.117.160.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.160.0/22"
        },
        "45.117.164.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.164.0/22"
        },
        "45.117.168.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.168.0/22"
        },
        "45.117.172.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.172.0/22"
        },
        "45.117.176.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.176.0/22"
        },
        "45.117.136.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.117.136.0/22"
        },
        "45.118.140.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.118.140.0/22"
        },
        "45.118.144.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.118.144.0/22"
        },
        "45.118.148.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.118.148.0/22"
        },
        "45.119.76.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.119.76.0/22"
        },
        "45.119.80.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.119.80.0/22"
        },
        "45.119.84.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.119.84.0/22"
        },
        "45.119.108.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.119.108.0/22"
        },
        "45.119.212.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.119.212.0/22"
        },
        "45.119.216.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.119.216.0/22"
        },
        "45.119.240.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.119.240.0/22"
        },
        "45.120.224.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.120.224.0/22"
        },
        "45.120.228.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.120.228.0/22"
        },
        "45.121.24.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.121.24.0/22"
        },
        "45.121.152.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.121.152.0/22"
        },
        "45.121.160.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.121.160.0/22"
        },
        "45.122.220.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.122.220.0/22"
        },
        "45.122.232.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.122.232.0/22"
        },
        "45.122.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.122.236.0/22"
        },
        "45.122.240.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.122.240.0/22"
        },
        "45.122.244.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.122.244.0/22"
        },
        "45.122.248.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.122.248.0/22"
        },
        "45.122.252.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.122.252.0/22"
        },
        "45.123.96.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.123.96.0/22"
        },
        "45.124.84.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.124.84.0/22"
        },
        "45.124.88.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.124.88.0/22"
        },
        "45.124.92.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.124.92.0/22"
        },
        "45.125.200.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.125.200.0/22"
        },
        "45.125.204.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.125.204.0/22"
        },
        "45.125.208.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.125.208.0/22"
        },
        "45.125.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.125.236.0/22"
        },
        "45.126.92.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.126.92.0/22"
        },
        "45.126.96.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.126.96.0/22"
        },
        "45.127.252.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "45.127.252.0/22"
        },
        "49.156.52.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "49.156.52.0/22"
        },
        "49.213.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "49.213.64.0/18"
        },
        "49.236.208.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "49.213.208.0/22"
        },
        "49.246.128.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "49.246.128.0/18"
        },
        "49.246.192.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "49.246.192.0/19"
        },
        "58.84.0.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "58.84.0.0/22"
        },
        "58.186.0.0":{
            action : "deny",
            mask : "255.254.0.0",
            comment : "Viet Nam",
            cidr_notation: "58.186.0.0/15"
        },
        "61.11.224.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "61.11.224.0/19"
        },
        "61.28.224.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "61.28.224.0/19"
        },
        "101.53.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "101.53.0.0/18"
        },
        "101.96.12.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "101.96.12.0/22"
        },
        "101.96.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "101.96.64.0/18"
        },
        "101.99.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "101.99.0.0/18"
        },
        "103.1.200.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.1.200.0/22"
        },
        "103.1.208.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.1.208.0/22"
        },
        "103.1.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.1.236.0/22"
        },
        "103.2.220.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.2.220.0/22"
        },
        "103.2.224.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.2.224.0/22"
        },
        "103.2.228.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.2.228.0/22"
        },
        "103.3.244.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.3.224.0/22"
        },
        "103.3.248.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.3.248.0/22"
        },
        "103.3.252.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.3.252.0/22"
        },
        "103.4.128.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.4.128.0/22"
        },

        "103.5.30.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "103.5.30.0/23"
        },
        "103.5.204.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.5.204.0/22"
        },
        "103.5.208.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.5.208.0/22"
        },
        "103.7.36.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.7.36.0/22"
        },
        "103.7.40.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.7.40.0/22"
        },
        "103.7.172.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "103.7.172.0/24"
        },
        "103.7.174.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "103.7.174.0/23"
        },
        "103.7.177.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "103.7.177.0/24"
        },
        "103.7.196.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "103.7.196.0/24"
        },
        "103.8.13.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "103.8.13.0/24"
        },
        "103.9.0.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.0.0/22"
        },
        "103.9.4.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.4.0/22"
        },
        "103.9.76.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.76.0/22"
        },
        "103.9.80.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.80.0/22"
        },
        "103.9.84.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.84.0/22"
        },
        "103.9.196.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.196.0/22"
        },
        "103.9.200.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.200.0/22"
        },
        "103.9.204.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.204.0/22"
        },
        "103.9.208.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.208.0/22"
        },
        "103.9.212.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.9.212.0/22"
        },
        "103.10.88.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.10.88.0/22"
        },
        "103.10.212.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.10.212.0/22"
        },
        "103.11.172.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.11.172.0/22"
        },
        "103.12.104.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.12.104.0/22"
        },
        "103.13.76.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.13.76.0/22"
        },
        "103.15.48.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.15.48.0/22"
        },
        "103.16.0.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.16.0.0/22"
        },
        "103.17.88.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.17.88.0/22"
        },
        "103.17.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.17.236.0/22"
        },
        "103.18.4.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.18.4.0/22"
        },
        "103.18.176.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.18.176.0/22"
        },
        "103.19.96.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.19.96.0/22"
        },
        "103.19.164.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.19.164.0/22"
        },
        "103.19.220.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.19.220.0/22"
        },
        "103.20.144.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.20.144.0/22"
        },
        "103.20.148.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.20.148.0/22"
        },
        "103.21.120.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.21.120.0/22"
        },
        "103.21.148.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.21.148.0/22"
        },
        "103.23.144.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.23.144.0/22"
        },
        "103.23.156.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.23.156.0/22"
        },
        "103.24.244.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.24.244.0/22"
        },
        "103.26.252.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.26.252.0/22"
        },
        "103.27.60.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.27.60.0/22"
        },
        "103.27.64.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.27.64.0/22"
        },
        "103.27.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.27.236.0/22"
        },
        "103.28.32.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.28.32.0/22"
        },
        "103.28.36.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.28.36.0/22"
        },
        "103.28.136.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.28.136.0/22"
        },
        "103.28.172.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.28.172.0/22"
        },
        "103.30.36.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.30.36.0/22"
        },
        "103.31.120.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.31.120.0/22"
        },
        "103.31.124.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.31.124.0/22"
        },
        "103.35.64.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.35.64.0/22"
        },
        "103.37.28.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.37.28.0/22"
        },
        "103.37.32.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.37.32.0/22"
        },
        "103.38.136.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.38.136.0/22"
        },
        "103.39.92.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.39.92.0/22"
        },
        "103.39.96.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.39.96.0/22"
        },
        "103.42.56.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.42.56.0/22"
        },
        "103.45.228.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.45.228.0/22"
        },
        "103.45.232.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.45.232.0/22"
        },
        "103.45.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.45.236.0/22"
        },
        "103.47.192.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.47.192.0/22"
        },
        "103.48.76.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.48.76.0/22"
        },
        "103.48.80.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.48.80.0/22"
        },
        "103.48.84.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.48.84.0/22"
        },
        "103.48.188.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.48.188.0/22"
        },
        "103.48.192.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.48.192.0/22"
        },
        "103.52.92.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.52.92.0/22"
        },
        "103.53.88.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.53.88.0/22"
        },
        "103.53.168.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.53.168.0/22"
        },
        "103.53.228.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.53.228.0/22"
        },
        "103.53.252.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.53.252.0/22"
        },
        "103.54.248.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.54.248.0/22"
        },
        "103.54.252.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.54.252.0/22"
        },
        "103.56.156.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.56.156.0/22"
        },
        "103.56.160.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.56.160.0/22"
        },
        "103.56.164.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.56.164.0/22"
        },
        "103.56.168.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.56.168.0/22"
        },
        "103.57.104.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.57.104.0/22"
        },
        "103.57.112.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.57.112.0/22"
        },
        "103.57.208.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.57.208.0/22"
        },
        "103.57.220.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.57.220.0/22"
        },
        "103.60.16.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.60.16.0/22"
        },
        "103.61.44.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.61.44.0/22"
        },
        "103.61.48.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.61.48.0/22"
        },
        "103.62.8.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.62.8.0/22"
        },
        "103.63.104.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.63.104.0/22"
        },
        "103.63.108.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.63.108.0/22"
        },
        "103.63.112.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.63.112.0/22"
        },
        "103.63.116.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.63.116.0/22"
        },
        "103.63.120.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.63.120.0/22"
        },
        "103.63.212.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.63.212.0/22"
        },
        "103.192.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.192.236.0/22"
        },
        "103.194.188.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.194.188.0/22"
        },
        "103.195.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.195.236.0/22"
        },
        "103.195.240.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.195.240.0/22"
        },
        "103.196.16.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.196.16.0/22"
        },
        "103.196.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.196.236.0/22"
        },
        "103.196.244.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.196.244.0/22"
        },
        "103.196.248.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.196.248.0/22"
        },
        "103.224.168.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.224.168.0/22"
        },
        "103.225.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.225.236.0/22"
        },
        "103.226.108.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.226.108.0/22"
        },
        "103.226.248.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.226.248.0/22"
        },
        "103.227.112.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.227.112.0/22"
        },
        "103.227.216.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.227.216.0/22"
        },
        "103.228.20.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.228.20.0/22"
        },
        "103.229.40.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.229.40.0/22"
        },
        "103.229.192.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.229.192.0/22"
        },
        "103.231.148.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.231.148.0/22"
        },
        "103.231.188.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.231.188.0/22"
        },
        "103.232.52.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.232.52.0/22"
        },
        "103.232.56.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.232.56.0/22"
        },
        "103.232.60.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.232.60.0/22"
        },
        "103.232.120.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.232.120.0/22"
        },
        "103.233.48.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.233.48.0/22"
        },
        "103.234.36.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.234.36.0/22"
        },
        "103.234.88.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.234.88.0/22"
        },
        "103.235.208.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.235.208.0/22"
        },
        "103.235.212.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.235.212.0/22"
        },
        "103.237.60.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.237.60.0/22"
        },
        "103.237.64.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.237.64.0/22"
        },
        "103.237.96.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.237.96.0/22"
        },
        "103.237.144.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.237.144.0/22"
        },
        "103.237.148.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.237.148.0/22"
        },
        "103.238.68.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.238.68.0/22"
        },
        "103.238.72.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.238.72.0/22"
        },
        "103.238.76.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.238.76.0/22"
        },
        "103.238.80.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.238.80.0/22"
        },
        "103.238.208.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.238.208.0/22"
        },
        "103.238.212.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.238.212.0/22"
        },
        "103.239.32.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.239.32.0/22"
        },
        "103.239.116.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.239.116.0/22"
        },
        "103.239.120.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.239.120.0/22"
        },
        "103.241.248.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.241.248.0/22"
        },
        "103.242.52.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.242.52.0/22"
        },
        "103.243.104.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.243.104.0/22"
        },
        "103.243.216.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.243.216.0/22"
        },
        "103.244.136.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.244.136.0/22"
        },
        "103.245.148.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.245.148.0/22"
        },
        "103.245.244.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.245.244.0/22"
        },
        "103.245.248.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.245.248.0/22"
        },
        "103.245.252.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.245.252.0/22"
        },
        "103.246.104.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "103.246.104.0/24"
        },
        "103.246.220.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.246.220.0/22"
        },
        "103.248.160.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.248.160.0/22"
        },
        "103.248.164.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.248.164.0/22"
        },
        "103.249.20.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.249.20.0/22"
        },
        "103.249.100.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.249.100.0/22"
        },
        "103.250.24.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.250.24.0/22"
        },
        "103.252.0.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.252.0.0/22"
        },
        "103.252.252.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.252.252.0/22"
        },
        "103.253.88.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.253.88.0/22"
        },
        "103.254.12.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.254.12.0/22"
        },
        "103.254.16.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.254.16.0/22"
        },
        "103.254.40.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.254.40.0/22"
        },
        "103.254.216.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "03.254.216.0/22"
        },
        "103.255.84.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.255.84.0/22"
        },
        "103.255.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "103.255.236.0/22"
        },
        "110.35.64.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "110.35.64.0/21"
        },
        "110.35.72.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "110.35.72.0/21"
        },
        "110.44.184.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "110.44.184.0/21"
        },
        "111.65.240.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "111.65.240.0/20"
        },
        "111.91.232.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "111.91.232.0/22"
        },
        "112.72.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "112.72.64.0/18"
        },
        "112.78.0.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "112.78.0.0/20"
        },
        "112.109.88.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "112.109.88.0/21"
        },
        "112.137.128.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "112.137.128.0/20"
        },
        "112.197.0.0":{
            action : "deny",
            mask : "255.255.0.0",
            comment : "Viet Nam",
            cidr_notation: "112.197.0.0/16"
        },
        "112.213.80.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "112.213.80.0/20"
        },
        "113.20.96.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "113.20.96.0/19"
        },
        "113.22.0.0":{
            action : "deny",
            mask : "255.255.0.0",
            comment : "Viet Nam",
            cidr_notation: "113.22.0.0/16"
        },
        "113.23.0.0":{
            action : "deny",
            mask : "255.255.128.0",
            comment : "Viet Nam",
            cidr_notation: "113.23.0.0/17"
        },
        "113.52.32.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "113.52.32.0/19"
        },
        "113.61.108.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "113.61.108.0/22"
        },
        "113.160.0.0":{
            action : "deny",
            mask : "255.224.0.0",
            comment : "Viet Nam",
            cidr_notation: "113.160.0.0/11"
        },
        "115.72.0.0":{
            action : "deny",
            mask : "255.248.0.0",
            comment : "Viet Nam",
            cidr_notation: "115.72.0.0/13"
        },
        "115.84.176.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "115.84.176.0/21"
        },
        "115.146.120.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "115.146.120.0/21"
        },
        "115.165.160.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "115.165.160.0/21"
        },
        "116.68.128.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "116.68.128.0/21"
        },
        "116.96.0.0":{
            action : "deny",
            mask : "255.240.0.0",
            comment : "Viet Nam",
            cidr_notation: "116.96.0.0/12"
        },
        "116.118.0.0":{
            action : "deny",
            mask : "255.255.128.0",
            comment : "Viet Nam",
            cidr_notation: "116.118.0.0/17"
        },
        "116.193.64.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "116.193.64.0/20"
        },
        "116.212.32.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "116.212.32.0/19"
        },
        "117.0.0.0":{
            action : "deny",
            mask : "255.248.0.0",
            comment : "Viet Nam",
            cidr_notation: "117.0.0.0/13"
        },
        "117.103.192.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "117.103.192.0/18"
        },
        "117.122.0.0":{
            action : "deny",
            mask : "255.255.128.0",
            comment : "Viet Nam",
            cidr_notation: "117.122.0.0/17"
        },
        "118.68.0.0":{
            action : "deny",
            mask : "255.252.0.0",
            comment : "Viet Nam",
            cidr_notation: "118.68.0.0/14"
        },
        "118.102.0.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "118.102.0.0/21"
        },
        "118.107.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "118.107.64.0/18"
        },
        "119.15.160.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "119.15.160.0/19"
        },
        "119.17.192.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "119.17.192.0/18"
        },
        "119.18.128.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "119.18.128.0/20"
        },
        "119.18.184.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "119.18.184.0/21"
        },
        "119.82.128.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "119.82.128.0/20"
        },
        "120.50.184.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "120.50.184.0/21"
        },
        "120.72.80.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "120.72.80.0/21"
        },
        "120.72.96.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "120.72.96.0/19"
        },
        "120.138.64.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "120.138.64.0/20"
        },
        "122.102.112.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "122.102.112.0/22"
        },
        "122.129.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "122.129.0.0/18"
        },
        "122.201.8.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "122.201.8.0/21"
        },
        "123.16.0.0":{
            action : "deny",
            mask : "255.240.0.0",
            comment : "Viet Nam",
            cidr_notation: "123.16.0.0/12"
        },
        "124.157.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "124.157.0.0/18"
        },
        "124.158.0.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "124.158.0.0/20"
        },
        "125.58.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "125.58.0.0/18"
        },
        "125.212.128.0":{
            action : "deny",
            mask : "255.255.128.0",
            comment : "Viet Nam",
            cidr_notation: "125.212.128.0/17"
        },
        "125.214.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "125.214.0.0/18"
        },
        "125.234.0.0":{
            action : "deny",
            mask : "255.254.0.0",
            comment : "Viet Nam",
            cidr_notation: "125.234.0.0/15"
        },
        "125.253.112.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "125.253.112.0/20"
        },
        "171.224.0.0":{
            action : "deny",
            mask : "255.224.0.0",
            comment : "Viet Nam",
            cidr_notation: "171.224.0.0/11"
        },
        "175.103.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "175.103.64.0/18"
        },
        "175.106.0.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "175.106.0.0/22"
        },
        "180.93.0.0":{
            action : "deny",
            mask : "255.255.0.0",
            comment : "Viet Nam",
            cidr_notation: "180.93.0.0/16"
        },
        "180.148.0.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "180.148.0.0/21"
        },
        "180.148.128.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "180.148.128.0/20"
        },
        "180.214.236.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "180.214.236.0/22"
        },
        "182.161.80.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "182.161.80.0/20"
        },
        "182.236.112.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "182.236.112.0/22"
        },
        "182.237.20.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "182.237.20.0/22"
        },
        "183.80.0.0":{
            action : "deny",
            mask : "255.255.0.0",
            comment : "Viet Nam",
            cidr_notation: "183.80.0.0/16"
        },
        "183.81.0.0":{
            action : "deny",
            mask : "255.255.128.0",
            comment : "Viet Nam",
            cidr_notation: "183.81.0.0/17"
        },
        "183.90.160.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "183.90.160.0/21"
        },
        "183.91.0.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "183.91.0.0/19"
        },
        "183.91.160.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "183.91.160.0/19"
        },
        "202.0.79.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.0.79.0/24"
        },
        "202.4.168.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.4.168.0/24"
        },
        "202.4.176.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.4.176.0/24"
        },
        "202.6.2.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.6.2.0/24"
        },
        "202.6.96.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.6.96.0/23"
        },
        "202.9.79.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.9.79.0/24"
        },
        "202.9.80.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.9.80.0/24"
        },
        "202.9.84.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.9.84.0/24"
        },
        "202.37.86.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.37.86.0/23"
        },
        "202.43.108.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "202.43.108.0/22"
        },
        "202.44.137.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.44.137.0/24"
        },
        "202.47.87.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.47.87.0/24"
        },
        "202.47.142.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.47.142.0/24"
        },
        "202.52.39.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.52.39.0/24"
        },
        "202.55.132.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "202.55.132.0/22"
        },
        "202.56.57.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.56.57.0/24"
        },
        "202.58.245.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.58.245.0/24"
        },
        "202.59.238.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.59.238.0/23"
        },
        "202.59.252.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.59.252.0/23"
        },
        "202.60.104.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "202.60.104.0/21"
        },
        "202.74.56.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.74.56.0/24"
        },
        "202.74.58.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.74.58.0/23"
        },
        "202.78.224.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "202.78.224.0/21"
        },
        "202.79.232.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "202.79.232.0/21"
        },
        "202.87.212.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "202.87.212.0/22"
        },
        "202.92.4.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "202.92.4.0/22"
        },
        "202.93.156.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "202.93.156.0/22"
        },
        "202.94.82.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.94.82.0/24"
        },
        "202.94.88.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.94.88.0/23"
        },
        "202.124.204.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.124.204.0/24"
        },
        "202.130.36.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.130.36.0/23"
        },
        "202.134.16.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "202.134.16.0/21"
        },
        "202.134.54.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "202.134.54.0/24"
        },
        "202.151.160.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "202.151.160.0/20"
        },
        "202.158.244.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "202.158.244.0/22"
        },
        "202.160.124.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.160.124.0/23"
        },
        "202.172.4.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "202.172.4.0/23"
        },
        "202.191.56.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "202.191.56.0/22"
        },
        "203.8.127.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "203.8.127.0/24"
        },
        "203.8.172.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "203.8.172.0/24"
        },
        "203.34.144.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "203.34.144.0/24"
        },
        "203.77.178.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "203.77.178.0/24"
        },
        "203.79.28.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "203.79.28.0/24"
        },
        "203.89.140.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.89.140.0/22"
        },
        "203.99.248.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.99.248.0/22"
        },
        "203.113.128.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "203.113.128.0/19"
        },
        "203.113.160.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "203.113.160.0/19"
        },
        "203.119.8.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.119.8.0/22"
        },
        "203.119.36.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.119.36.0/22"
        },
        "203.119.44.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.119.44.0/22"
        },
        "203.119.58.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "203.119.58.0/23"
        },
        "203.119.60.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.119.60.0/22"
        },
        "203.119.64.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "203.119.64.0/21"
        },
        "203.119.72.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.119.72.0/22"
        },
        "203.128.240.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "203.128.240.0/21"
        },
        "203.160.0.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "203.160.0.0/23"
        },
        "203.160.96.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "203.160.96.0/21"
        },
        "203.161.178.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "203.161.178.0/24"
        },
        "203.162.0.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.0.0/21"
        },
        "203.162.8.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.8.0/21"
        },
        "203.162.16.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.16.0/20"
        },
        "203.162.32.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.32.0/19"
        },
        "203.162.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.64.0/18"
        },
        "203.162.128.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.128.0/20"
        },
        "203.162.144.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.144.0/20"
        },
        "203.162.160.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.160.0/19"
        },
        "203.162.192.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "203.162.192.0/18"
        },
        "203.163.128.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "203.163.128.0/18"
        },
        "203.170.26.0":{
            action : "deny",
            mask : "255.255.254.0",
            comment : "Viet Nam",
            cidr_notation: "203.170.26.0/23"
        },
        "203.171.16.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "203.171.16.0/20"
        },
        "203.176.160.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "203.176.160.0/21"
        },
        "203.189.28.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.189.28.0/22"
        },
        "203.190.160.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "203.190.160.0/20"
        },
        "203.191.8.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "203.191.8.0/21"
        },
        "203.191.48.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "203.191.48.0/21"
        },
        "203.195.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "203.195.0.0/18"
        },
        "203.201.56.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.201.56.0/22"
        },
        "203.205.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "203.205.0.0/18"
        },
        "203.209.180.0":{
            action : "deny",
            mask : "255.255.252.0",
            comment : "Viet Nam",
            cidr_notation: "203.209.180.0/22"
        },
        "203.210.128.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "203.210.128.0/18"
        },
        "203.210.192.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "203.210.192.0/18"
        },
        "210.2.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "210.2.64.0/18"
        },
        "210.86.224.0":{
            action : "deny",
            mask : "255.255.240.0",
            comment : "Viet Nam",
            cidr_notation: "210.86.224.0/20"
        },
        "210.211.96.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "210.211.96.0/19"
        },
        "210.245.0.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "210.245.0.0/19"
        },
        "210.245.32.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "210.245.32.0/19"
        },
        "210.245.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "210.245.64.0/18"
        },
        "218.100.10.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "218.100.10.0/24"
        },
        "218.100.14.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "218.100.14.0/24"
        },
        "218.100.60.0":{
            action : "deny",
            mask : "255.255.255.0",
            comment : "Viet Nam",
            cidr_notation: "218.100.60.0/24"
        },
        "220.231.64.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "220.231.64.0/18"
        },
        "221.121.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "221.121.0.0/18"
        },
        "221.132.0.0":{
            action : "deny",
            mask : "255.255.192.0",
            comment : "Viet Nam",
            cidr_notation: "221.132.0.0/18"
        },
        "221.133.0.0":{
            action : "deny",
            mask : "255.255.224.0",
            comment : "Viet Nam",
            cidr_notation: "221.133.0.0/19"
        },
        "222.252.0.0":{
            action : "deny",
            mask : "255.252.0.0",
            comment : "Viet Nam",
            cidr_notation: "222.252.0.0/14"
        },
        "223.27.104.0":{
            action : "deny",
            mask : "255.255.248.0",
            comment : "Viet Nam",
            cidr_notation: "223.27.104.0/21"
        }
    };
    return my;
}(LobbyC.MainMenu || {}));

