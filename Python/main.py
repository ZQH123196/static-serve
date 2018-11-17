import socket

host = '127.0.0.1'
port = 10086
address = (host, port)

# ipv4 TCP 
server_socket = socket.socket(family=socket.AF_INET, type=socket.SOCK_STREAM)
server_socket.bind(address)
server_socket.listen()
print("server listen on {host}:{port}".format(host=host, port=port))

server_socket.close()
print("server has closed!")