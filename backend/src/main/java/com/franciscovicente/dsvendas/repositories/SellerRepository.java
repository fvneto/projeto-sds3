package com.franciscovicente.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.franciscovicente.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
