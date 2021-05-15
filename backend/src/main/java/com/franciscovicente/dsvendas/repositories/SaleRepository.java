package com.franciscovicente.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.franciscovicente.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
