package com.esiea.fr.arch.hb.mapper;

import org.springframework.stereotype.Component;

import com.esiea.fr.arch.hb.dto.UserDto;
import com.esiea.fr.arch.hb.entity.User;


@Component
public class MapperUser {
	
	
	public User map (UserDto userDto) {
		
		User user = new User();
		
		user.setFirstname(userDto.getFirstname());
		user.setLastname(userDto.getLastname());
		user.setMobile(userDto.getMobile());
		user.setBirthday(userDto.getBirthday());
		user.setPassword(userDto.getPassword());
		user.setUsername(userDto.getUsername());
		
		return user;
	}
}
